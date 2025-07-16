'use client'

import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Mail, Send, Copy, RefreshCw, CheckCircle, Loader2 } from 'lucide-react'

interface Response {
  summary: string
  reply: string
}

export default function EmailResponderPage() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState<Response | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    
    // Simulate API call with mock response
    setTimeout(() => {
      const mockResponse: Response = {
        summary: `Customer is inquiring about ${input.toLowerCase().includes('catering') ? 'catering services' : 'services'} for ${input.toLowerCase().includes('party') ? 'a party' : 'an event'}.`,
        reply: `Hi there, thank you for reaching out! Yes, we do offer ${input.toLowerCase().includes('catering') ? 'catering services' : 'services'}, and we'd be happy to help with your ${input.toLowerCase().includes('party') ? 'party' : 'event'}. Could you please share the location and any specific preferences? Looking forward to assisting you!`
      }
      setResponse(mockResponse)
      setIsLoading(false)
    }, 2000)
  }

  const handleRegenerate = () => {
    if (!input.trim()) return
    handleSubmit(new Event('submit') as any)
  }

  const handleCopy = async () => {
    if (response) {
      await navigator.clipboard.writeText(response.reply)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Email Inquiry Responder Agent</h1>
            </div>
            <p className="text-xl text-gray-600">
              Paste a customer inquiry and get a ready-to-send response.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Inquiry</h2>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste the email inquiry here..."
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Generating Response...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Generate Response
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Output Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Response</h2>
              
              {!response && !isLoading && (
                <div className="text-center py-12 text-gray-500">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Enter a customer inquiry to generate a response</p>
                </div>
              )}

              {isLoading && (
                <div className="text-center py-12">
                  <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-blue-600" />
                  <p className="text-gray-600">Analyzing inquiry and generating response...</p>
                </div>
              )}

              {response && (
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="text-sm font-semibold text-blue-800 mb-2">Summary</h3>
                    <p className="text-blue-900">{response.summary}</p>
                  </div>

                  {/* Drafted Reply */}
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Drafted Reply</h3>
                    <div className="bg-white rounded p-3 border">
                      <p className="text-gray-800 whitespace-pre-wrap">{response.reply}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleRegenerate}
                      disabled={isLoading}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Regenerate
                    </button>
                    
                    <button
                      onClick={handleCopy}
                      className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy to Clipboard
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Example */}
          {!response && !isLoading && (
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Example</h3>
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-gray-700">
                  "Hi, I'd like to know if you offer catering for a party of 25 on July 21st in the evening."
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
} 