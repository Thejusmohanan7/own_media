// components/ChatBot.tsx
'use client';

import { useState, useRef, useEffect, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Phone, 
  MessageSquare, 
  Camera,
  Video,
  Calendar,
  CreditCard
} from 'lucide-react';

// Define TypeScript interfaces
interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isSystem?: boolean;
  sender?: string;
}

interface QuickQuestion {
  id: number;
  text: string;
  icon: JSX.Element;
  color: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const phoneNumber = '8156970994';

  const quickQuestions: QuickQuestion[] = [
    {
      id: 1,
      text: "See Photography Portfolio",
      icon: <Camera size={18} />,
      color: "text-blue-400"
    },
    {
      id: 2,
      text: "View Package Pricing", 
      icon: <CreditCard size={18} />,
      color: "text-green-400"
    },
    {
      id: 3,
      text: "Check Availability",
      icon: <Calendar size={18} />,
      color: "text-purple-400"
    },
    {
      id: 4,
      text: "Videography Services",
      icon: <Video size={18} />,
      color: "text-red-400"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fixed useEffect with proper dependencies
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "You can explore our photography services, or contact us directly for assistance.",
            isBot: true,
            timestamp: new Date(),
            isSystem: true
          }
        ]);
        setShowOptions(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]); // Added messages.length to dependencies

  const handleQuickQuestion = (question: QuickQuestion) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: question.text,
      isBot: false,
      timestamp: new Date()
    }]);

    setShowOptions(false);

    const timer = setTimeout(() => {
      let response = "";
      
      switch(question.id) {
        case 1:
          response = "Here's our latest photography portfolio showcasing weddings, portraits, and events. Would you like to see specific categories?";
          break;
        case 2:
          response = "Our packages start from $500 for basic coverage to $2500 for premium packages. Would you like detailed pricing for a specific type of event?";
          break;
        case 3:
          response = "I can check our availability for your preferred dates. Please share your event date and I'll check immediately.";
          break;
        case 4:
          response = "Our videography services include cinematic films, event coverage, and drone footage. We offer packages starting from $800.";
          break;
        default:
          response = "Thank you for your interest! Our team will assist you shortly.";
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date()
      }]);
    }, 1000);

    return () => clearTimeout(timer);
  };

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = () => {
    const message = "Hello Own Media! I'm interested in your photography services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMessages([]);
      setShowOptions(false);
    }
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Bot Icon */}
      <motion.div
        className="fixed bottom-28 right-8 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.button
          onClick={toggleChat}
          className="relative bg-gray-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-700"
          animate={{ 
            scale: isOpen ? 0.95 : 1
          }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
      </motion.div>

      {/* Dark UI Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 w-96 bg-gray-900 rounded-lg shadow-xl z-40 overflow-hidden border border-gray-700"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="bg-gray-800 text-white p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Camera size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Own Media Assistant</h3>
                    <p className="text-xs text-gray-300">Always here to help</p>
                  </div>
                </div>
                <div className="text-xs text-gray-300 bg-gray-700 px-3 py-1 rounded">
                  {getCurrentTime()}
                </div>
              </div>
            </div>

            {/* Messages Container - Hidden Scrollbar */}
            <div className="h-72 overflow-y-auto p-4 bg-gray-900 scrollbar-hide">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    {/* System message */}
                    {message.isSystem && (
                      <div className="text-center">
                        <span className="text-xs text-gray-400 bg-gray-800 px-3 py-2 rounded">
                          {message.text}
                        </span>
                      </div>
                    )}

                    {/* Regular message */}
                    {!message.isSystem && (
                      <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                        <div
                          className={`max-w-[85%] px-4 py-3 rounded-lg ${
                            message.isBot
                              ? 'bg-gray-800 border border-gray-700 text-gray-200'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <span className="text-xs text-gray-400 block mt-2 text-right">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Quick Questions */}
                {showOptions && (
                  <div className="space-y-4">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white text-base mb-4">OWN MEDIA TOPICS</h4>
                      <div className="grid gap-3">
                        {quickQuestions.map((question) => (
                          <button
                            key={question.id}
                            onClick={() => handleQuickQuestion(question)}
                            className="flex items-center space-x-3 p-3 text-left hover:bg-gray-700 rounded-lg transition-colors duration-200"
                          >
                            <div className={question.color}>
                              {question.icon}
                            </div>
                            <span className="text-sm text-gray-200 font-medium">{question.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quality Assurance Note */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500">
                        Contact us directly for immediate assistance.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>

            {/* Contact Buttons - Simplified without phone number */}
            <div className="border-t border-gray-700 p-4 bg-gray-800">
              <div className="flex space-x-3">
                <button
                  onClick={handleCall}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors duration-200 border border-gray-600"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 text-sm font-medium transition-colors duration-200"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp</span>
                </button>
              </div>
              
              {/* Type something indicator */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-400">Select an option or contact us directly</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;