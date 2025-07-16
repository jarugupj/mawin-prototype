import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Zap, Shield, ArrowRight, Sparkles, Clock, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Agents that Just Work
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Plug-and-play AI agents for your business
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              No setup needed. Get professional AI assistance for customer service, 
              lead management, and more in minutes.
            </p>
            <Link 
              href="/agents"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Agents
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Setup</h3>
              <p className="text-gray-600">Connect and start using AI agents instantly. No technical knowledge required.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Plug-and-Play</h3>
              <p className="text-gray-600">Ready-to-use agents that work with your existing tools and workflows.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Results</h3>
              <p className="text-gray-600">Professional, accurate responses that maintain your brand voice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agent */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Email Responder Agent</h2>
                    <p className="text-gray-600">Summarizes inquiries and drafts email replies</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Get professional email responses in seconds. Simply paste a customer inquiry 
                  and receive a ready-to-send reply that maintains your brand voice.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Summarizes customer requests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Drafts professional responses</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Editable and customizable</span>
                  </div>
                </div>
                
                <Link 
                  href="/agents/email-responder"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try Email Responder
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border">
                    <p className="text-sm text-gray-500 mb-2">Customer Inquiry</p>
                    <p className="text-gray-700">"Hi, I'd like to know if you offer catering for a party of 25 on July 21st in the evening."</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-600 mb-2">AI Response</p>
                    <p className="text-gray-700">"Hi there, thank you for reaching out! Yes, we do offer catering services, and we'd be happy to help with your party on July 21st..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 