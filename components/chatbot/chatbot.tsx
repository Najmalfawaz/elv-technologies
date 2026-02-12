'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import { faqSectionData } from '@/lib/data';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  buttons?: string[];
}

type ChatStage =
  | 'initial'
  | 'collecting_name'
  | 'collecting_phone'
  | 'collecting_message'
  | 'general';

const detectIntent = (message: string) => {
  const lower = message.toLowerCase();

  if (/(price|cost|how much|charges|quotation|quote)/.test(lower))
    return 'pricing';

  if (/(service|solution|offer|provide)/.test(lower))
    return 'services';

  if (/(support|help|issue|problem)/.test(lower))
    return 'support';

  if (/(callback|call me|contact me)/.test(lower))
    return 'callback';

  return 'faq';
};

const findBestAnswer = (question: string) => {
  const processed = question.toLowerCase();
  let bestMatch = { score: 0, answer: '' };

  faqSectionData.faqs.forEach((item: { question: string, answer: string }) => {
    const matchCount = item.question
      .toLowerCase()
      .split(' ')
      .filter((word) => processed.includes(word)).length;

    if (matchCount > bestMatch.score) {
      bestMatch = { score: matchCount, answer: item.answer };
    }
  });

  return bestMatch;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chatStage, setChatStage] = useState<ChatStage>('initial');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const addMessage = (
    text: string,
    sender: 'user' | 'bot',
    buttons?: string[]
  ) => {
    setMessages((prev) => [
      ...prev,
      { id: uuidv4(), text, sender, timestamp: new Date(), buttons },
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
      addMessage(
        'Hello! I am your virtual assistant. How can I help you today?',
        'bot',
        ['Our Services', 'Pricing', 'Request a Callback']
      );
    }
  }, [isOpen]);

  // Tooltip auto hide
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const getDynamicDelay = (text: string) => {
    return 1200 + Math.min(text.length * 25, 2000) + Math.random() * 800;
  };

  const simulateReply = (
    callback: () => void,
    delayText: string = ''
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, getDynamicDelay(delayText));
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    addMessage(userMessage, 'user');
    setInputValue('');

    if (chatStage === 'collecting_name') {
      setFormData((prev) => ({ ...prev, name: userMessage }));
      setChatStage('collecting_phone');
      simulateReply(() => {
        addMessage('Please share your phone number.', 'bot');
      }, userMessage);
      return;
    }

    if (chatStage === 'collecting_phone') {
      setFormData((prev) => ({ ...prev, phone: userMessage }));
      setChatStage('collecting_message');
      simulateReply(() => {
        addMessage('Briefly describe your requirement.', 'bot');
      }, userMessage);
      return;
    }

    if (chatStage === 'collecting_message') {
      setChatStage('general');
      simulateReply(() => {
        addMessage(
          'Thank you. Our team will contact you shortly.',
          'bot'
        );
      }, userMessage);
      return;
    }

    const intent = detectIntent(userMessage);

    simulateReply(() => {
      if (intent === 'pricing') {
        addMessage(
          'Pricing depends on project requirements. Would you like a customized quote?',
          'bot',
          ['Request a Callback']
        );
        return;
      }

      if (intent === 'services') {
        addMessage(
          'We provide Security & Surveillance, Audio Visual Solutions, Network & Communications, and Home Automation.',
          'bot'
        );
        return;
      }

      if (intent === 'callback') {
        setChatStage('collecting_name');
        addMessage('Sure. May I know your full name?', 'bot');
        return;
      }

      const { answer, score } = findBestAnswer(userMessage);

      if (score > 0) {
        addMessage(answer, 'bot');
      } else {
        addMessage(
          'I may not have the exact answer. Would you like our team to contact you?',
          'bot',
          ['Request a Callback']
        );
      }
    }, userMessage);
  };

  const handleQuickOption = (text: string) => {
    setInputValue(text);
    setTimeout(() => {
      handleSendMessage(new Event('submit') as any);
    }, 100);
  };

  return (
    <>
      {/* Floating Button + Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mb-3 bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-lg border relative"
            >
              Hi 👋 Welcome! Need help?
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 border-r border-b"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
        >
          {isOpen ? <X /> : <Bot />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 right-6 w-[340px] h-[420px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-red-600 text-white p-4 flex items-center gap-2">
              <Sparkles size={18} />
              <span className="font-semibold">ELV Technology Solutions</span>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex ${
                      msg.sender === 'user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        msg.sender === 'user'
                          ? 'bg-red-600 text-white'
                          : 'bg-white border'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>

                  {msg.buttons && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {msg.buttons.map((btn) => (
                        <Button
                          key={btn}
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuickOption(btn)}
                        >
                          {btn}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
              />
              <Button type="submit">
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
