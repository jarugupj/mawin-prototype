import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Mail, ArrowRight, Sparkles } from 'lucide-react'

const agents = [
  {
    id: 'email-responder',
    name: 'Email Responder',
    description: 'Summarizes inquiries and drafts email replies',
    icon: Mail,
    color: 'blue',
    href: '/agents/email-responder'
  }
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Agents Directory
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore AI Agents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of specialized AI agents designed to help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${agent.color}-100 rounded-lg flex items-center justify-center`}>
                    <agent.icon className={`w-6 h-6 text-${agent.color}-600`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {agent.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {agent.description}
                </p>
                
                <Link 
                  href={agent.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* Coming Soon */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                More Agents Coming Soon
              </h3>
              <p className="text-gray-600 mb-4">
                We're working on additional AI agents for lead scoring, social media management, 
                and customer support. Stay tuned!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span>• Lead Scoring Agent</span>
                <span>• Social Media Generator</span>
                <span>• Customer Chatbot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 