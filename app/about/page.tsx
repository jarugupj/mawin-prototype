import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Zap, Users, Target, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Mawin
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're building the future of AI-powered business automation, one agent at a time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To democratize AI for small and medium businesses by providing plug-and-play 
              AI agents that work out of the box, requiring no technical setup or expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
              <p className="text-gray-600">
                We believe AI should be accessible to everyone. No complex setup, no technical jargon.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer-First</h3>
              <p className="text-gray-600">
                Every agent is designed with real business needs in mind, solving actual problems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We're constantly exploring new ways to make AI more powerful and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or want to learn more about how Mawin can help your business?
          </p>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-600">
              This is a prototype. For real inquiries, please reach out to our team.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 