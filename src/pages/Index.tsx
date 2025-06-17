import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Laptop, LineChart, BadgeDollarSign, ExternalLink, Mail, Linkedin, MessageCircle } from "lucide-react";

const Index = () => {
  const handleTryFido = () => {
    window.open('https://chatgpt.com/g/g-6849ed2b9ea48191a53c4f016cf0b29c-sba-loan-guidance-agent', '_blank');
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8 bg-transparent border-none p-0 gap-4">
            <TabsTrigger value="home" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black text-gray-500 bg-transparent border-2 border-transparent text-base font-bold rounded-xl px-8 py-3 hover:bg-gray-50">Home</TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black text-gray-500 bg-transparent border-2 border-transparent font-bold rounded-xl px-8 py-3 hover:bg-gray-50">Our Vision</TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black text-gray-500 bg-transparent border-2 border-transparent font-bold rounded-xl px-8 py-3 hover:bg-gray-50">Contact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            {/* Hero Section */}
            <div className="relative">
              <div className="pt-12 pb-16">
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 text-sm font-medium mb-8 border border-blue-200">
                    <span className="mr-2">🤖</span>
                    Powered by Agentic Intelligence
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                    Empower Your Business 
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">with Fido</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Unlock SBA Loans • Build Strong Credit • Plan Smarter
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" onClick={handleTryFido}>Try  our SBA Copilot (beta)</Button>
                    <p className="text-gray-500 text-sm font-light">
                      No credit card required
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white/60 backdrop-blur-sm rounded-2xl mb-8 border border-blue-100/50">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Everything You Need to Grow
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Fido combines AI intelligence with financial expertise to accelerate your business success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                      <Laptop className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      SBA Loan Applications, Simplified
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Fido automates paperwork, checks your eligibility, and increases approval odds — without the stress.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-6">
                      <BadgeDollarSign className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Business Credit Intelligence
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Track, build, and optimize your business credit with personalized coaching and step-by-step guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
                      <LineChart className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Auto-Generated Business Plans
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Tell Fido your goals. It builds dynamic, fundable plans perfectly aligned with lender criteria.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-6">
                      <Calendar className="w-7 h-7 text-sky-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Built with Agentic Intelligence
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Fido isn't just a chatbot — it's a thinking agent working on your behalf 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Start building smarter with AI-powered business tools designed for growth
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-12 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" onClick={handleTryFido}>
                  Get Started Free
                </Button>
                <p className="mt-6 text-sm text-gray-500 font-light">
                  Your ambition + our agentic intelligence = unstoppable growth
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vision">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 p-8 md:p-12">
              <div className="max-w-4xl mx-auto py-12">
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Our Vision</h1>
                  <p className="text-xl text-gray-600 font-light">A Trusted Partner for the Next Generation of Entrepreneurs</p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                  <div className="text-xl leading-relaxed font-light">
                    <p className="mb-6">Every business starts with a goal.</p>
                    <p className="mb-2">Sometimes it's to earn more for your family.</p>
                    <p className="mb-2">Sometimes it's to create freedom, stability, or something entirely new.</p>
                    <p className="mb-6">No matter the reason, starting and growing a business takes courage.</p>
                    <p className="mb-6 font-medium">At Fido, we understand the realities of that journey.</p>
                    <p className="mb-2">You wear every hat. You face every decision. You often go at it alone.</p>
                    <p className="font-semibold">We built Fido to change that.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Built on Trust, Designed to Help</h2>
                    <p className="text-xl mb-6 font-light">Fido is your business co-pilot.  A reliable, trustworthy companion and intelligent system that helps you get more while focusing on what matters.</p>
                    <p className="text-lg mb-4 font-light">From day one, it works alongside you to:</p>
                    <ul className="text-lg space-y-2 mb-6 pl-6 font-light">
                      <li>• Create your website or landing page</li>
                      <li>• Write content and ads that attract customers</li>
                      <li>• Help you apply for funding and build business credit</li>
                      <li>• Track performance and suggest improvements automatically</li>
                    </ul>
                    <p className="text-lg font-light">It is consistent. It is proactive. And it always keeps your goals in focus.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Agentic Intelligence, Applied to Your Business</h2>
                    <p className="text-xl mb-4 font-light">Fido is powered by a new class of AI, what we call agentic intelligence.</p>
                    <p className="text-lg mb-6 font-light">It is not just another chatbot or template tool. It is built to act on your behalf.</p>
                    <p className="text-lg mb-4 font-light">This means:</p>
                    <ul className="text-lg space-y-2 mb-6 pl-6 font-light">
                      <li>• You spend less time figuring out what to do next</li>
                      <li>• You reduce the trial-and-error of growth</li>
                      <li>• You stay focused on your strengths while Fido handles the rest</li>
                    </ul>
                    <p className="text-lg font-light">Whether you are launching, growing, or refining your business, Fido adapts to where you are and helps move you forward.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">For Business Owners Who Do It All</h2>
                    <p className="text-lg mb-4 font-light">We didn't build Fido for tech companies or corporate teams.</p>
                    <p className="text-lg mb-4 font-light">We built it for people doing everything themselves:</p>
                    <ul className="text-lg space-y-2 mb-6 pl-6 font-light">
                      <li>• The freelancer ready to grow</li>
                      <li>• The local business owner bringing in new clients</li>
                      <li>• The founder applying for a loan for the first time</li>
                      <li>• The seller turning side income into a real operation</li>
                    </ul>
                    <p className="text-lg font-light">Fido simplifies what used to be complex so you can spend less time managing systems and more time growing your business.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Stand For</h2>
                    <p className="text-xl mb-6 font-medium">Helping small business owners succeed, faster, easier, and more confidently, through intelligent, trustworthy technology.</p>
                    <p className="text-lg mb-2 font-light">We believe technology should work like a partner, not a puzzle.</p>
                    <p className="text-lg mb-2 font-light">That automation should feel human, not robotic.</p>
                    <p className="text-lg mb-6 font-light">And that financial tools should empower you, not slow you down.</p>
                    <p className="text-lg font-semibold">That is what Fido delivers.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Moving Forward, Together</h2>
                    <p className="text-lg mb-6 font-light">We are building Fido for the long haul because we know your journey doesn't end at launch.</p>
                    <p className="text-lg mb-2 font-light">It evolves.</p>
                    <p className="text-lg mb-2 font-light">It hits friction.</p>
                    <p className="text-lg mb-6 font-light">It requires new ideas and smart tools.</p>
                    <p className="text-lg mb-6 font-medium">Fido is here for all of it.</p>
                    <p className="text-lg mb-2 font-light">Clear tools. Simple guidance. Real results.</p>
                    <p className="text-lg font-light">That is what we believe the future of business should feel like.</p>
                  </div>

                  <div className="text-center py-12 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Try Fido Copilot For Free</h3>
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2" onClick={handleTryFido}>
                      Try Fido For Free
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 p-8 md:p-12">
              <div className="max-w-4xl mx-auto py-12">
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Contact Us</h1>
                  <p className="text-xl text-gray-600 font-light">Get in touch with our team</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                          <p className="text-gray-600">founders@fidofinancial.ai</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                          <Linkedin className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
                          <p className="text-gray-600">Fido Financial</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Reddit</h3>
                          <p className="text-gray-600">Fido Financial</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-blue-100/50">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Tell us how we can help you..." />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>

                <div className="text-center py-12 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl mt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2" onClick={handleTryFido}>
                    Try Fido For Free
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default Index;
