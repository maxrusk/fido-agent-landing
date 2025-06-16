
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Laptop, LineChart, BadgeDollarSign, ExternalLink } from "lucide-react";

const Index = () => {
  const handleTryFido = () => {
    window.open('https://chatgpt.com/g/g-6849ed2b9ea48191a53c4f016cf0b29c-sba-loan-guidance-agent', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="vision">Our Vision</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            {/* Hero Section */}
            <div className="relative">
              <div className="pt-12 pb-16">
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
                    🤖 Powered by Agentic Intelligence
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                    Empower Your Business 
                    <br />
                    <span className="text-blue-600">with Fido</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Unlock SBA Loans • Build Strong Credit • Plan Smarter
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                      onClick={handleTryFido}
                    >
                      Get Started Free
                    </Button>
                    <p className="text-gray-500 text-sm">
                      No credit card required
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white/60 backdrop-blur-sm rounded-lg mb-8">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Everything You Need to Grow
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Fido combines AI intelligence with financial expertise to accelerate your business success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Laptop className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      SBA Loan Applications, Simplified
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Fido automates paperwork, checks your eligibility, and increases approval odds — without the stress.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                      <BadgeDollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Business Credit Intelligence
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Track, build, and optimize your business credit with personalized coaching and step-by-step guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                      <LineChart className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Auto-Generated Business Plans
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Tell Fido your goals. It builds dynamic, fundable plans perfectly aligned with lender criteria.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Built with Agentic Intelligence
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Fido isn't just a chatbot — it's a thinking agent working on your behalf 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gradient-to-t from-blue-50/50 to-transparent rounded-lg">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Join thousands of entrepreneurs who trust Fido to accelerate their growth
                </p>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-lg"
                  onClick={handleTryFido}
                >
                  Get Started Free
                </Button>
                <p className="mt-6 text-sm text-gray-500">
                  Your ambition + our agentic intelligence = unstoppable growth
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vision">
            <div className="max-w-4xl mx-auto py-12">
              <div className="text-center mb-16">
                <div className="text-2xl text-gray-400 mb-4">⸻</div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Vision</h1>
                <p className="text-xl text-gray-600">A Trusted Partner for the Next Generation of Entrepreneurs</p>
                <div className="text-2xl text-gray-400 mt-4">⸻</div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                <div className="text-xl leading-relaxed">
                  <p className="mb-6">Every business starts with a goal.</p>
                  <p className="mb-2">Sometimes it's to earn more for your family.</p>
                  <p className="mb-2">Sometimes it's to create freedom, stability, or something entirely new.</p>
                  <p className="mb-6">No matter the reason, starting and growing a business takes courage.</p>
                  <p className="mb-6 font-medium">At Fido, we understand the realities of that journey.</p>
                  <p className="mb-2">You wear every hat. You face every decision. You often go it alone.</p>
                  <p className="font-semibold">We built Fido to change that.</p>
                </div>

                <div className="text-center py-8">
                  <div className="text-2xl text-gray-400">⸻</div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Built on Trust, Designed to Help</h2>
                  <p className="text-xl mb-6">Fido is your business co-pilot, a reliable, intelligent system that helps you get more done with less effort.</p>
                  <p className="text-lg mb-4">From day one, it works alongside you to:</p>
                  <ul className="text-lg space-y-2 mb-6 pl-6">
                    <li>• Create your website or landing page</li>
                    <li>• Write content and ads that attract customers</li>
                    <li>• Help you apply for funding and build business credit</li>
                    <li>• Track performance and suggest improvements automatically</li>
                  </ul>
                  <p className="text-lg">It is consistent. It is proactive. And it always keeps your goals in focus.</p>
                </div>

                <div className="text-center py-8">
                  <div className="text-2xl text-gray-400">⸻</div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Agentic Intelligence, Applied to Your Business</h2>
                  <p className="text-xl mb-4">Fido is powered by a new class of AI, what we call agentic intelligence.</p>
                  <p className="text-lg mb-6">It is not just another chatbot or template tool. It is built to act on your behalf.</p>
                  <p className="text-lg mb-4">This means:</p>
                  <ul className="text-lg space-y-2 mb-6 pl-6">
                    <li>• You spend less time figuring out what to do next</li>
                    <li>• You reduce the trial-and-error of growth</li>
                    <li>• You stay focused on your strengths while Fido handles the rest</li>
                  </ul>
                  <p className="text-lg">Whether you are launching, growing, or refining your business, Fido adapts to where you are and helps move you forward.</p>
                </div>

                <div className="text-center py-8">
                  <div className="text-2xl text-gray-400">⸻</div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Business Owners Who Do It All</h2>
                  <p className="text-lg mb-4">We didn't build Fido for tech companies or corporate teams.</p>
                  <p className="text-lg mb-4">We built it for people doing everything themselves:</p>
                  <ul className="text-lg space-y-2 mb-6 pl-6">
                    <li>• The freelancer ready to grow</li>
                    <li>• The local business owner bringing in new clients</li>
                    <li>• The founder applying for a loan for the first time</li>
                    <li>• The seller turning side income into a real operation</li>
                  </ul>
                  <p className="text-lg">Fido simplifies what used to be complex so you can spend less time managing systems and more time growing your business.</p>
                </div>

                <div className="text-center py-8">
                  <div className="text-2xl text-gray-400">⸻</div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Stand For</h2>
                  <p className="text-xl mb-6 font-medium">Helping small business owners succeed, faster, easier, and more confidently, through intelligent, trustworthy technology.</p>
                  <p className="text-lg mb-2">We believe technology should work like a partner, not a puzzle.</p>
                  <p className="text-lg mb-2">That automation should feel human, not robotic.</p>
                  <p className="text-lg mb-6">And that financial tools should empower you, not slow you down.</p>
                  <p className="text-lg font-semibold">That is what Fido delivers.</p>
                </div>

                <div className="text-center py-8">
                  <div className="text-2xl text-gray-400">⸻</div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Moving Forward, Together</h2>
                  <p className="text-lg mb-6">We are building Fido for the long haul because we know your journey doesn't end at launch.</p>
                  <p className="text-lg mb-2">It evolves.</p>
                  <p className="text-lg mb-2">It hits friction.</p>
                  <p className="text-lg mb-6">It requires new ideas and smart tools.</p>
                  <p className="text-lg mb-6 font-medium">Fido is here for all of it.</p>
                  <p className="text-lg mb-2">Clear tools. Simple guidance. Real results.</p>
                  <p className="text-lg">That is what we believe the future of business should feel like.</p>
                </div>

                <div className="text-center py-12 bg-gradient-to-t from-blue-50/50 to-transparent rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Try Fido Copilot For Free</h3>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg inline-flex items-center gap-2"
                    onClick={handleTryFido}
                  >
                    Try Fido For Free
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
