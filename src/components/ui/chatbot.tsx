'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, LifeBuoy, Phone, Mail } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { AnimatePresence, motion } from 'framer-motion';
import { faq } from '@/data/faq';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  buttons?: string[];
}

// A more intelligent function to find the best match from the FAQ
const findBestAnswer = (question: string): { answer: string; score: number } => {
  const stopWords = new Set(['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now']);

  const processText = (text: string): Set<string> => {
    return new Set(
      text
        .toLowerCase()
        .replace(/[?.,!]/g, '') // remove punctuation
        .split(/\s+/)
        .filter(word => !stopWords.has(word) && word.length > 1)
        .map(word => word.replace(/es$|s$/, '')) // simple stemming
    );
  };

  const queryTokens = processText(question);

  if (queryTokens.size === 0) {
    return { answer: "I'm sorry, I don't have an answer for that. Could you please provide more details?", score: 0 };
  }

  let bestMatch = { score: 0, answer: "" };

  faq.forEach(item => {
    const questionTokens = processText(item.question);
    
    let intersection = 0;
    for (const token of queryTokens) {
      if (questionTokens.has(token)) {
        intersection++;
      }
    }

    const union = new Set([...queryTokens, ...questionTokens]).size;
    const jaccardScore = union > 0 ? intersection / union : 0;

    if (jaccardScore > bestMatch.score) {
      bestMatch = { score: jaccardScore, answer: item.answer };
    }
  });

  return bestMatch;
};


export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage(
        'Hello! I am your AI Assistant. Ask me a question, or choose an option below.',
        'bot',
        ['Request a Callback', 'Live Chat']
      );
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot', buttons?: string[]) => {
    const newMessage: Message = { id: uuidv4(), text, sender, timestamp: new Date(), buttons };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleButtonClick = (text: string) => {
    addMessage(text, 'user');
    setShowOptions(false);

    if (text === 'Live Chat') {
      addMessage('You can reach us via phone or email for a live chat.\n\n📞 +971 54 792 2800\n📧 info@elvtechnology.com', 'bot');
    } else if (text === 'Request a Callback') {
      addMessage('Sure — I can arrange a callback. Please enter your full name.', 'bot');
    } else {
      const { answer } = findBestAnswer(text);
      addMessage(answer, 'bot');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    addMessage(userMessage, 'user');
    setInputValue('');
    setShowOptions(false);

    setTimeout(() => {
      const { answer, score } = findBestAnswer(userMessage);
      
      if (score > 0.2) {
        addMessage(answer, 'bot');
      } else {
        addMessage(
          "I'm sorry, I couldn't find a clear answer for that. Perhaps one of these options can help?",
          'bot',
          ['Our Services', 'Request a Quote', 'Contact Support']
        );
        setShowOptions(true);
      }
    }, 500);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
            >
              Hi, welcome! Need help?
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}>
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'x' : 'message'}
                initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
              </motion.div>
            </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-24 right-6 z-50 flex flex-col w-[calc(100vw-48px)] max-w-sm h-[450px] overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-2xl">
              
              <div className="shrink-0 bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">AI Assistant</h3>
                    <p className="text-xs text-white/80">We typically reply instantly</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
                {messages.map((message) => (
                    <div key={message.id}>
                        <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div
                            className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                                message.sender === 'user'
                                ? 'bg-gradient-to-br from-red-500 to-red-600 text-white rounded-br-none'
                                : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                            }`}>
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                            <p className={`mt-1 text-xs text-right ${
                                message.sender === 'user' ? 'text-red-100' : 'text-gray-400'
                            }`}>
                                {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                            </div>
                        </div>
                        {message.buttons && message.sender === 'bot' && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {message.buttons.map((buttonText, index) => (
                                    <Button key={index} variant="outline" size="sm" onClick={() => handleButtonClick(buttonText)}>
                                        {buttonText}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {!showOptions && (
                 <div className="p-4 bg-white border-t border-gray-200 shrink-0">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1"
                    />
                    <Button type="submit" size="icon" className="bg-red-500 hover:bg-red-600 shrink-0" disabled={!inputValue.trim()}>
                        <Send className="w-4 h-4" />
                    </Button>
                    </form>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
