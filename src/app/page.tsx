'use client';

import { getCurrentPractice } from '@/lib/practice-config';
import { Phone, Mic, Calendar, Clock, Star, CheckCircle, Users, MessageSquare, Zap, Shield } from 'lucide-react';

export default function AIVoiceAgentDemo() {
  const practice = getCurrentPractice();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{practice.name}</h1>
                <p className="text-sm text-gray-600">AI Voice Agent Demo</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Live Demo</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Interactive Demo Presentation
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Meet Robin: Your AI <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Appointment Assistant</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Experience how <strong>Robin</strong> handles patient calls with human-like conversations, schedules appointments instantly, 
            and answers questions about {practice.name} services - completely automated, 24/7.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-900">24/7 Phone Coverage</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border">
              <Calendar className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-900">Instant Appointment Booking</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-900">Human-Like Conversations</span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">How Your Voice Agent Works</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-3">1. Patient Calls</h4>
              <p className="text-gray-600">
                Patients call your practice and are greeted by Robin, who introduces herself as your AI {practice.type} assistant 
                and explains the available treatments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-3">2. AI Conversation</h4>
              <p className="text-gray-600">
                Robin conducts natural conversations, understanding patient needs and guiding them through treatment options 
                with {practice.doctor}'s expertise built-in.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-3">3. Appointment Booked</h4>
              <p className="text-gray-600">
                Robin collects patient information, schedules appointments, and confirms all details professionally 
                while maintaining your practice's high standards.
              </p>
            </div>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Live Demo - Try Robin Now</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Click below to experience exactly what your patients will hear when they call {practice.name}. 
              Robin knows about all {practice.services.length} of your {practice.type} services and {practice.doctor}'s expertise.
            </p>
          </div>
          
          {/* Demo Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 flex-1 sm:flex-none justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
              <Mic className="w-5 h-5" />
              Voice Demo
            </button>
            <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 flex-1 sm:flex-none justify-center text-gray-600 hover:text-gray-900 hover:bg-white/50">
              <MessageSquare className="w-5 h-5" />
              Chat Demo
            </button>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Call {practice.name}
              </h2>
              <p className="text-gray-600 mt-2">
                Experience how patients will interact with your AI {practice.type} assistant. 
                Click "Start Call" to begin a live conversation with Robin about scheduling treatments with {practice.doctor}.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Call Interface */}
              <div className="lg:w-1/2">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Ready to Connect
                  </div>
                  
                  <button className="relative inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                    <Phone className="w-6 h-6" />
                    Start Call
                  </button>
                </div>
              </div>

              {/* Services Robin Knows */}
              <div className="lg:w-1/2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Robin Knows About These Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {practice.services.slice(0, 5).map((service, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-4 h-4 text-blue-600" />
                        <h4 className="font-medium text-gray-900 text-sm">{service.name}</h4>
                      </div>
                      <p className="text-xs text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* How to Test */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">How to Test:</h3>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Click "Start Call" and allow microphone access
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Speak naturally - ask about services or try to book an appointment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Robin will respond with voice and text about {practice.doctor}'s {practice.type} services
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">Robin Knows All Your Treatments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practice.services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
                {service.duration && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {service.duration}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">Benefits for {practice.name}</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Patient Experience */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Patient Experience</h4>
                  <p className="text-gray-600">Enhanced accessibility & convenience</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">24/7 availability for appointment scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Consistent, professional patient interactions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Detailed treatment explanations & education</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Reduced wait times for appointment booking</span>
                </li>
              </ul>
            </div>

            {/* Practice Efficiency */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Practice Efficiency</h4>
                  <p className="text-gray-600">Streamlined operations & growth</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Reduced staff workload for phone scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Automated patient information collection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Scalable solution for practice growth</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Professional brand representation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Phone className="w-8 h-8 text-blue-600" />
              Real Implementation: Your Phone Number
            </h3>
            <p className="text-gray-600">
              This is a demonstration. The actual voice agent will be installed directly on your business phone number.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold">Demo Experience (This Website)</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Interactive demo via web browser</li>
                <li>• Test voice and chat functionality</li>
                <li>• Experience Robin's capabilities</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl font-bold">Live Implementation (Your Practice)</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Installed on your main phone line</li>
                <li>• Patients call your phone number directly</li>
                <li>• 24/7 automated appointment booking</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Ready to install on your phone system
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center gap-3">
            🚀 Advanced AI Technology Stack
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">AI Conversation Engine</h4>
              <p className="text-gray-600">
                Enterprise-grade conversational AI with natural voice interaction and healthcare-specific training
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Real-time Voice Processing</h4>
              <p className="text-gray-600">
                Low-latency speech recognition and natural language processing for seamless conversations
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Custom Integration</h4>
              <p className="text-gray-600">
                Tailored specifically for {practice.name} with {practice.doctor}'s treatment protocols and practice preferences
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in AI Solutions for {practice.name}?</h2>
          <p className="text-xl text-blue-100 mb-2">You've seen how Robin handles patient calls perfectly</p>
          <p className="text-lg text-blue-200 mb-8">
            Let's explore how AI can help transform your practice's patient experience
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Meet Your Consultant</h3>
                <p className="text-blue-100"><strong>Pierre Björlin</strong></p>
                <p className="text-blue-200 text-sm">AI Consultant</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://calendly.com/pierre-bjorlin" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                Book Your Free Discovery Call
              </a>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-blue-200">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15-minute call
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  No commitment required
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Custom setup for {practice.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-2">
            {practice.name} AI Voice Agent Demo - Experience the Future of {practice.type.charAt(0).toUpperCase() + practice.type.slice(1)} Scheduling
          </p>
          <p className="text-gray-400">
            {practice.doctor} • Powered by AI Technology
          </p>
        </div>
      </footer>
    </div>
  );
}