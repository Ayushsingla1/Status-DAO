"use client"
import Head from 'next/head';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Home = () =>  {

  // Sample statistics for display purposes
  const stats = [
    { label: 'Websites Monitored', value: '25,000+' },
    { label: 'Average Response Time', value: '1.2s' },
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Alert Delivery Time', value: '<30s' }
  ];

  // Sample testimonials
  const testimonials = [
    {
      text: "Their monitoring service alerted us to an outage before our customers noticed. Saved us from a major crisis!",
      author: "Sarah J., CTO",
      company: "E-commerce Solutions"
    },
    {
      text: "The instant notifications have been a game-changer for our DevOps team. We've reduced our response time by 70%.",
      author: "Michael R.",
      company: "Cloud Services Inc."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Head>
        <title>StatusGuard - Website Monitoring Service</title>
        <meta name="description" content="24/7 website monitoring with instant notifications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 111.412-.088z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
            </svg>
            <h1 className="text-2xl font-bold">StatusGuard</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <div className="rounded-md font-medium transition-colors flex items-center">
            <SignedOut>
                <div className='px-4 py-2 bg-purple-800 rounded-md hover:cursor-pointer'><SignInButton /></div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
          </nav>
          <button className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <section className="relative bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900"></div>
            <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")' }}></div>
          </div>
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="block">Never Miss When Your</span>
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Website Goes Down</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Get instant notifications by call or email when your website experiences downtime. Our 24/7 monitoring ensures you're always the first to know.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="/dashboard" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-center px-6 py-3 rounded-lg font-medium text-lg transition-colors hover:from-indigo-600 hover:to-purple-700">
                    Start Monitoring
                  </a>
                  <a href="#how-it-works" className="bg-gray-800 text-center border border-gray-600 px-6 py-3 rounded-lg font-medium text-lg transition-colors hover:bg-gray-700">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative mx-auto max-w-md">
                  <div className="rounded-lg bg-gray-800 border border-gray-700 shadow-2xl overflow-hidden">
                    <div className="h-6 bg-gray-700 w-full flex items-center px-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                        <div className="bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded-md text-sm font-medium">
                          Dashboard
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-green-400 text-sm font-medium">Connected</span>
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="grid gap-4">
                          <div className="p-3 rounded-md bg-gray-700 flex justify-between items-center">
                            <span className="text-gray-300 truncate">example.com</span>
                            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Online</span>
                          </div>
                          <div className="p-3 rounded-md bg-gray-700 flex justify-between items-center">
                            <span className="text-gray-300 truncate">myapp.io</span>
                            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Online</span>
                          </div>
                          <div className="p-3 rounded-md bg-gray-700 flex justify-between items-center">
                            <span className="text-gray-300 truncate">dashboard.tool</span>
                            <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full font-medium">Offline</span>
                          </div>
                          <div className="animate-pulse flex space-x-2 items-center">
                            <span className="text-purple-400 text-sm">Sending email notification...</span>
                            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full opacity-30 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Monitoring Features</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Everything you need to ensure your websites and services are running smoothly 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transform transition-transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/40 text-indigo-500 mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Notifications</h3>
                <p className="text-gray-400">
                  Get alerted immediately via email, SMS, phone call, Slack, Discord, or webhook when your website goes down.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transform transition-transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/40 text-purple-500 mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Global Monitoring</h3>
                <p className="text-gray-400">
                  Check your website from multiple locations worldwide to ensure it's accessible to all your users.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transform transition-transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/40 text-indigo-500 mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Real-time Dashboard</h3>
                <p className="text-gray-400">
                  Monitor all your websites in one place with our intuitive real-time status dashboard.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transform transition-transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/40 text-purple-500 mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Detailed Reports</h3>
                <p className="text-gray-400">
                  Get comprehensive uptime reports and insights into your website's performance over time.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transform transition-transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/40 text-indigo-500 mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Checks</h3>
                <p className="text-gray-400">
                  Monitor specific elements of your site, API endpoints, or check for specific text or status codes.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 transform transition-transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/40 text-purple-500 mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
                <p className="text-gray-400">
                  Measure and track your website's load time and performance metrics to identify issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our monitoring service is simple to set up and use
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center relative">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white font-bold text-xl mb-4 z-10 relative">1</div>
                <h3 className="text-xl font-bold mb-2">Add Your Website</h3>
                <p className="text-gray-400">Enter your website URL and set your monitoring preferences</p>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-indigo-600 -z-10 transform -translate-x-8"></div>
              </div>

              <div className="text-center relative">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white font-bold text-xl mb-4 z-10 relative">2</div>
                <h3 className="text-xl font-bold mb-2">Set Up Alerts</h3>
                <p className="text-gray-400">Choose how you want to be notified when issues are detected</p>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-indigo-600 -z-10 transform -translate-x-8"></div>
              </div>

              <div className="text-center relative">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white font-bold text-xl mb-4 z-10 relative">3</div>
                <h3 className="text-xl font-bold mb-2">We Monitor 24/7</h3>
                <p className="text-gray-400">Our system checks your site every minute from multiple locations</p>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-indigo-600 -z-10 transform -translate-x-8"></div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white font-bold text-xl mb-4">4</div>
                <h3 className="text-xl font-bold mb-2">Get Notified</h3>
                <p className="text-gray-400">Receive instant alerts when your website has issues</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Trusted by thousands of businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
</div>
)}

export default Home;