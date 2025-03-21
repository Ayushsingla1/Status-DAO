//@ts-ignore
import {OutgoingMessage, SignupOutgoingMessage,ValidateOutgoingMessage} from "common/types"
import {Keypair} from "@solana/web3.js";
import nacl from "tweetnacl";
import nacl_util from "tweetnacl-util";
import { randomUUIDv7 } from "bun";
import 'dotenv';

require('dotenv').config();
let validatorId : string | null = null;
const Callbacks : {[callbackId : string] : (data : SignupOutgoingMessage) => void} = {};

const main = async() => {

    console.log(process.env.PRIVATE_KEY);
    const keypair = Keypair.fromSecretKey(
        Uint8Array.from(JSON.parse(process.env.PRIVATE_KEY!))
    )

    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = async(event) => {
        const data : OutgoingMessage = JSON.parse(event.data);

        if(data.type === 'signup'){
            Callbacks[data.data.callbackId]?.(data.data);
            delete Callbacks[data.data.callbackId];
        }
        else if(data.type === 'validate'){
            await validateHandler(data.data,keypair,ws);
        }
    }

    ws.onopen = async() => {
        const callbackId = randomUUIDv7();
        Callbacks[callbackId] = (data : SignupOutgoingMessage) => {
            validatorId = data.validatorId;
        }
        const signedMessage = await signMessage(`Signed message for ${callbackId}, ${keypair.publicKey}`, keypair);

        if(signedMessage) {
            ws.send(JSON.stringify({
                type : 'signup',
                data : {
                    callbackId : callbackId,
                    publicKey : keypair.publicKey,
                    ip : '127.0.0.1',
                    signedMessage : signedMessage
                }
            }))
        }
        else return;
    }
}

const signMessage = async(data : string,keypair : Keypair) => {
    const messageBytes = nacl_util.decodeUTF8(data);
    const signature = nacl.sign.detached(messageBytes,keypair.secretKey);
    

    return JSON.stringify(Array.from(signature));
}


const validateHandler = async(data : ValidateOutgoingMessage , keypair : Keypair , ws : WebSocket) => {
    console.log(`Validating ${data.url}`);
    const startTime = Date.now();
    const signature = await signMessage(`Replying to ${data.callbackId}`, keypair);

    try {
        const response = await fetch(data.url);
        const endTime = Date.now();
        const latency = endTime - startTime;
        const status = response.status;

        console.log(data.url);
        console.log(status);
        ws.send(JSON.stringify({
            type: 'validate',
            data: {
                callbackId : data.callbackId,
                status: status === 200 ? 'Good' : 'Bad',
                latency,
                websiteId : data.websiteId,
                validatorId,
                signedMessage: signature,
            },
        }));
    } catch (error) {
        ws.send(JSON.stringify({
            type: 'validate',
            data: {
                callbackId : data.callbackId,
                status:'Bad',
                latency: 1000,
                websiteId : data.websiteId,
                validatorId,
                signedMessage: signature,
            },
        }));
        console.error(error);
    }
}

main();

setInterval(() => {
    
}, 10000);