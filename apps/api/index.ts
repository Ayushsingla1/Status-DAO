import express from "express";
import cors from "cors";
import { authMiddleware } from "./middleware";
import {prisma} from "db/schema";


const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/v1/website-status',authMiddleware,async(req,res) => {

    const websiteId = req.query.websiteId!;
    const userId = req.userId;
    try{
        const result = await prisma.website.findMany({
            where : {
                userId
            },
            include : {
                status : true
            }
        })

        res.json(result);

    }
    catch(e){
        console.log(e);
        res.status(404).json({
            msg : "No website found"
        })
    }
})

app.get('/api/v1/websites',authMiddleware,async(req,res) => {

    const userId = req.userId!;
    try {
        const result = await prisma.website.findMany({
            where : {
                userId
            }
        })

        res.json(result);

    } catch (error) {
        console.log(error);
    }
})

app.post('/api/v1/create-website',authMiddleware,async(req,res) => {
    try {
        const userId = req.userId!;
        const {url} = req.body;

        const result = await prisma.website.create({
            data : {
                url,
                userId
            }
        })
        console.log(result);
        res.status(200).json({id : result.id});

    } catch (error) {
        console.log(error)
        res.status(501).json({
            msg : "unable to add currently try later"
        })
    }
})

app.delete('/api/v1/delete-website',authMiddleware,async(req,res) => {
    try {

        const userId = req.userId;
        const websiteId = req.query.websiteId;
        const result = await prisma.website.delete({
            where : {
                userId,
                id : websiteId as string
            }
        })
        console.log(result);
        res.status(200).json({result});
        
    } catch (error) {
        console.log(error);
        res.status(501).json({
            msg : "unable to delete it currently"
        })
    }
})


app.listen(3001,() => {
    console.log("listening on port 3000");
})
