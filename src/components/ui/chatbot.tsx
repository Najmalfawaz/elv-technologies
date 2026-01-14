'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, LifeBuoy } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { AnimatePresence, motion } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const emirates = ['Abu Dhabi', 'Dubai', 'Sharjah', 'Umm Al Quwain', 'Ajman', 'Ras Al Khaimah', 'Fujairah'];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chatState, setChatState] = useState('initial');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', emirate: '', requirements: '' });
  const [editField, setEditField] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: 'Hello, welcome to ELV Technology Solutions 👋\nHow can I assist you today?',
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = { id: Date.now().toString(), text, sender, timestamp: new Date() };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleInitialChoice = (choice: string) => {
    addMessage(choice, 'user');
    if (choice === 'Live Chat') {
      setChatState('live_chat');
      addMessage(
        'You can reach us via phone or email for a live chat.\n\n📞 +971 54 792 2800\n📧 info@elvtechnology.com',
        'bot'
      );
    } else {
      setChatState('callback_name');
      addMessage('Sure — I can arrange a callback. Please enter your full name.', 'bot');
    }
  };

  const handleNameInput = (name: string) => {
    if (name.trim().length < 2) {
      addMessage('Please enter your full name (first and last).', 'bot');
      return;
    }
    setFormData({ ...formData, name });
    addMessage(name, 'user');
    setChatState('callback_email');
    addMessage(`Thanks, ${name}. Please enter your company email or personal email.`, 'bot');
  };

  const handleEmailInput = (email: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addMessage('Please enter a valid email address (example: name@company.com).', 'bot');
      return;
    }
    setFormData({ ...formData, email });
    addMessage(email, 'user');
    setChatState('callback_phone');
    addMessage('Please enter your phone number.', 'bot');
  };

  const handlePhoneInput = (phone: string) => {
    if (!/^(\+971|0)[0-9]{9}$/.test(phone.replace(/\s/g, ''))) {
      addMessage('Please enter a valid phone number.', 'bot');
      return;
    }
    setFormData({ ...formData, phone });
    addMessage(phone, 'user');
    setChatState('callback_emirate');
    addMessage('Which emirate are you calling from? (Tap one)', 'bot');
  };

  const handleEmirateSelection = (emirate: string) => {
    setFormData({ ...formData, emirate });
    addMessage(emirate, 'user');
    setChatState('callback_requirements');
    addMessage('Briefly type your requirements (what do you need?)', 'bot');
  };

  const handleRequirementsInput = (requirements: string) => {
    if (requirements.length > 1000) {
      addMessage('Requirements must not exceed 1000 characters.', 'bot');
      return;
    }
    setFormData({ ...formData, requirements });
    addMessage(requirements, 'user');
    setChatState('callback_confirm');
  };

  const handleConfirmation = (response: string) => {
    addMessage(response, 'user');
    if (response === 'Submit Request') {
      setChatState('callback_submitted');
      addMessage(
        'Thank you!\nA member of the ELV Technology Solutions team will contact you shortly.\nIf you need anything else, feel free to ask anytime.',
        'bot'
      );
    } else {
      setChatState('callback_edit');
      addMessage('What would you like to edit?', 'bot');
    }
  };

  const handleEdit = (field: string) => {
    addMessage(`Edit ${field}`, 'user');
    setEditField(field.toLowerCase());
    setChatState(`callback_${field.toLowerCase()}`);
    addMessage(`Please enter your ${field.toLowerCase()}.`, 'bot');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (!value) return;

    if (editField) {
        const updatedFormData = { ...formData, [editField]: value };
        setFormData(updatedFormData);
        setEditField(null);
        addMessage(value, 'user');
        setChatState('callback_confirm');
        setInputValue('');
        return;
    }

    switch (chatState) {
      case 'callback_name':
        handleNameInput(value);
        break;
      case 'callback_email':
        handleEmailInput(value);
        break;
      case 'callback_phone':
        handlePhoneInput(value);
        break;
      case 'callback_requirements':
        handleRequirementsInput(value);
        break;
      default:
        addMessage(inputValue, 'user');
        // Basic echo for other cases, can be replaced with NLP
        addMessage("I'm processing your request...", 'bot') 
        break;
    }
    setInputValue('');
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
              className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
            >
              Hi, welcome! Need help?
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg"
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
              className="fixed bottom-24 right-6 z-50 flex flex-col w-[calc(100vw-48px)] max-w-sm h-[600px] overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-2xl">
              
              <div className="shrink-0 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">ELV Support</h3>
                    <p className="text-xs text-white/80">We typically reply instantly</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-orange-500 text-white rounded-br-none'
                          : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                      }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      <p className={`mt-1 text-xs ${message.sender === 'user' ? 'text-orange-100' : 'text-gray-400'}`}>
                        {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* ... (rest of the form logic is the same) ... */}
              {(chatState.startsWith('callback_') && !['callback_emirate', 'callback_confirm', 'callback_edit', 'callback_submitted'].includes(chatState) || editField) && (
                <div className="p-4 bg-white border-t border-gray-200 shrink-0">
                  <form onSubmit={handleFormSubmit} className="flex gap-2">
                    <Input
                      type={chatState === 'callback_email' || editField ==='email' ? 'email' : chatState === 'callback_phone' || editField ==='phone' ? 'tel' : 'text'}
                      placeholder={
                        chatState === 'callback_name' || editField === 'name' ? 'Enter your full name...'
                        : chatState === 'callback_email' || editField === 'email' ? 'Enter your email...'
                        : chatState === 'callback_phone' || editField === 'phone' ? 'Enter your phone number...'
                        : 'Type your message...'
                      }
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="icon" className="bg-orange-500 hover:bg-orange-600 shrink-0" disabled={!inputValue.trim()}>
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
