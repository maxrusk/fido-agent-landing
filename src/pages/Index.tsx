import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Fido Agent</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="#features" className="text-gray-500 hover:text-gray-900">Features</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Welcome to Fido Agent - Your Digital Companion
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Empowering your digital life with seamless integration and intelligent assistance.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks and streamline your workflow with our intelligent agent.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Integration</h3>
              <p className="text-gray-600">Integrate with your favorite apps and services for a unified digital experience.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Assistance</h3>
              <p className="text-gray-600">Get tailored recommendations and support based on your unique needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-700">
              <p className="mb-4">
                Fido Agent is dedicated to providing innovative solutions that enhance your digital productivity and simplify your online interactions.
              </p>
              <p>
                Our mission is to empower individuals and businesses with cutting-edge technology that adapts to their evolving needs.
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/500x300"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Fido Agent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
