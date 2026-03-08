'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, MessageCircle, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isMarkdown?: boolean;
}

const formatBotMessage = (text: string) => {
  // Simple markdown-to-JSX converter for basic bolding
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-red-600">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const addMessage = (text: string, sender: 'user' | 'bot', isMarkdown = true) => {
    setMessages((prev) => [
      ...prev,
      { id: uuidv4(), text, sender, timestamp: new Date(), isMarkdown },
    ]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage(
            "Hi there! 👋 I'm the ETS Virtual Assistant. I'm here to help you secure and automate your space with our premium ELV & AV solutions. \n\nWhat can I assist you with today?",
            'bot'
          );
        }, 1500);
      }, 500);
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    addMessage(userMessage, 'user', false);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/public/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      // Simulate natural thinking time
      const delay = Math.max(1000, Math.min(data.text.length * 10, 3000));
      setTimeout(() => {
        setIsTyping(false);
        addMessage(data.text || "I'm having trouble connecting to my brain. Please try again or call us directly!", 'bot');
      }, delay);

    } catch (error) {
      setIsTyping(false);
      addMessage("I apologize, but I encountered an error. Please contact us at +971 2 441 8186 for immediate assistance.", 'bot');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="pointer-events-auto mb-4 bg-white/90 backdrop-blur-md text-gray-800 text-sm px-5 py-3 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/20 relative"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <p className="font-medium">Need a quick quotation?</p>
              </div>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white/90 backdrop-blur-md rotate-45 border-r border-b border-white/20"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="pointer-events-auto group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_20px_50px_-10px_rgba(220,38,38,0.5)] transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {isOpen ? <X className="relative z-10 w-7 h-7" /> : <MessageCircle className="relative z-10 w-7 h-7" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-28 right-6 w-[380px] h-[550px] max-h-[calc(100vh-140px)] bg-white/80 backdrop-blur-2xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.3)] rounded-[32px] flex flex-col overflow-hidden border border-white/40 z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white pb-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Bot size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">ETS Assistant</h3>
                    <div className="flex items-center gap-1.5 opacity-80 decoration-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                      <span className="text-xs font-medium">Online & Ready</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 -mt-6 bg-white rounded-t-[32px] p-6 overflow-y-auto space-y-6 relative">
              <div className="absolute inset-0 bg-[url('/images/logo-pattern.svg')] bg-center bg-no-repeat bg-[length:400px] opacity-[0.02] pointer-events-none" />

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}
                >
                  <div className={`flex items-end gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-gray-100 text-gray-600' : 'bg-red-50 text-red-600'}`}>
                      {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.sender === 'user'
                          ? 'bg-red-600 text-white rounded-br-none'
                          : 'bg-gray-50 border border-gray-100 text-gray-800 rounded-bl-none'
                        }`}
                    >
                      {msg.sender === 'user' ? msg.text : (
                        <div className="whitespace-pre-wrap">
                          {formatBotMessage(msg.text)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <div className="bg-gray-50 border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-none">
                      <div className="flex gap-1.5">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-duration:0.6s]"></span>
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-4 bg-white border-t border-gray-50 flex gap-2 overflow-x-auto no-scrollbar">
              <a
                href="https://wa.me/971547922800"
                target="_blank"
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100 hover:bg-green-100 transition-colors"
              >
                <Phone size={14} /> WhatsApp Expert
              </a>
              <Button
                variant="outline"
                size="sm"
                className="flex-shrink-0 rounded-full text-xs font-bold border-gray-200"
                onClick={() => {
                  setInputValue("I need a quotation for a project");
                }}
              >
                Request Quote
              </Button>
            </div>

            {/* Input Footer */}
            <form
              onSubmit={handleSendMessage}
              className="p-6 bg-white border-t border-gray-50 flex gap-3 items-center"
            >
              <div className="flex-1 relative">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-gray-50 border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-red-100 transition-all outline-none"
                />
              </div>
              <Button
                type="submit"
                disabled={!inputValue.trim()}
                className="h-12 w-12 rounded-2xl bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200 transition-all active:scale-95 disabled:opacity-50 disabled:shadow-none"
              >
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
