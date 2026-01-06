'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, LifeBuoy, Phone, Mail } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

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
        break;
    }
    setInputValue('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}>
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-0 right-0 z-40 w-full h-full bg-black/30 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {isOpen && (
        <div className="fixed bottom-0 right-0 z-50 flex flex-col w-full h-[calc(100%-150px)] overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-t-2xl md:h-[700px] md:max-w-sm md:rounded-2xl md:bottom-24 md:right-6">
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

          {chatState === 'initial' && (
            <div className="p-4 bg-white border-t border-gray-200 shrink-0 flex gap-2">
              <Button onClick={() => handleInitialChoice('Live Chat')} className="w-full">Live Chat</Button>
              <Button onClick={() => handleInitialChoice('Request a Callback')} className="w-full">Request a Callback</Button>
            </div>
          )}

          {chatState === 'live_chat' && (
            <div className="p-4 bg-white border-t border-gray-200 shrink-0 flex flex-col gap-2">
                <Button onClick={() => window.open('tel:+971547922800', '_blank')} className="w-full flex items-center gap-2"><Phone className="w-4 h-4"/>+971 54 792 2800</Button>
                <Button onClick={() => window.open('mailto:info@elvtechnology.com', '_blank')} className="w-full flex items-center gap-2"><Mail className="w-4 h-4"/>info@elvtechnology.com</Button>
            </div>
          )}

          {chatState === 'callback_emirate' && (
            <div className="p-4 bg-white border-t border-gray-200 shrink-0 grid grid-cols-2 gap-2">
              {emirates.map((emirate) => (
                <Button key={emirate} variant="outline" onClick={() => handleEmirateSelection(emirate)}>{emirate}</Button>
              ))}
            </div>
          )}

          {chatState === 'callback_confirm' && (
            <div className="p-4 bg-white border-t border-gray-200 shrink-0">
              <div className="p-4 bg-gray-100 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Review your request:</h4>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Emirate:</strong> {formData.emirate}</p>
                <p><strong>Requirements:</strong> {formData.requirements}</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleConfirmation('Submit Request')} className="w-full">Submit Request</Button>
                <Button onClick={() => handleConfirmation('Edit')} className="w-full" variant="outline">Edit</Button>
              </div>
            </div>
          )}

          {chatState === 'callback_edit' && (
            <div className="p-4 bg-white border-t border-gray-200 shrink-0 grid grid-cols-2 gap-2">
              {Object.keys(formData).map((field) => (
                <Button key={field} variant="outline" onClick={() => handleEdit(field.charAt(0).toUpperCase() + field.slice(1))}>
                  Edit {field.charAt(0).toUpperCase() + field.slice(1)}
                </Button>
              ))}
            </div>
          )}

          {(chatState.startsWith('callback_') && !['callback_emirate', 'callback_confirm', 'callback_edit', 'callback_submitted'].includes(chatState) || editField) && (
            <div className="p-4 bg-white border-t border-gray-200 shrink-0">
              <form onSubmit={handleFormSubmit} className="flex gap-2">
                <Input
                  type={chatState === 'callback_email' || editField ==='email' ? 'email' : chatState === 'callback_phone' || editField ==='phone' ? 'tel' : 'text'}
                  placeholder={
                     chatState === 'callback_name' || editField === 'name' ? 'Enter your full name...'
                    : chatState === 'callback_email' || editField === 'email' ? 'Enter your email...'
                    : chatState === 'callback_phone' || editField === 'phone' ? 'Enter your phone number...'
                    : 'Type your requirements...'
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
        </div>
      )}
    </>
  );
}
