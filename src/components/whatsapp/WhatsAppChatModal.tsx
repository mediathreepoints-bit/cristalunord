'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, ExternalLink, Sparkles, AlertCircle, Globe } from 'lucide-react';
import { processAgentMessage } from '@/lib/whatsapp/agent-engine';

interface MessageItem {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export default function WhatsAppChatModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Bonjour et bienvenue chez CRISTALU NORD ! 👋\nJe suis l'assistant commercial. Quel type d'ouvrage aluminium, PVC ou verre souhaitez-vous réaliser ?",
      time: '12:00',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'ar'>('fr');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: MessageItem = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Call conversational engine (or /api/whatsapp/agent)
    setTimeout(() => {
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? ('user' as const) : ('assistant' as const),
        text: m.text,
      }));

      const res = processAgentMessage(text, history);
      const botMsg: MessageItem = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: res.replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);

      if (res.detectedLanguage) {
        setLanguage(res.detectedLanguage);
      }
    }, 600);
  };

  const quickPrompts = [
    { label: 'Baie vitrée aluminium', text: 'Je souhaite un devis pour une grande baie vitrée coulissante en aluminium.' },
    { label: 'Fenêtres PVC', text: 'Je recherche des fenêtres PVC pour une isolation acoustique et thermique.' },
    { label: 'Garde-corps en verre', text: 'Avez-vous des garde-corps en verre sécurit pour escalier ou terrasse ?' },
    { label: 'Habillage façade Alucobond', text: 'Nous avons un projet d’habillage de façade commerciale en panneaux composites.' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-brand-paperCard w-full sm:max-w-md h-[90vh] sm:h-[620px] rounded-t-2xl sm:rounded-2xl shadow-apple-lg flex flex-col overflow-hidden border border-brand-line">
        {/* Header */}
        <div className="bg-brand-ink text-white p-4 flex items-center justify-between border-b border-brand-lineDark">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                CN
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-brand-ink"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-heading text-sm font-bold text-white">Assistant CRISTALU NORD</h3>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="text-[11px] text-gray-300">En ligne · Réponse instantanée</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const newLang = language === 'fr' ? 'ar' : 'fr';
                setLanguage(newLang);
                if (newLang === 'ar') {
                  handleSend('السلام عليكم');
                } else {
                  handleSend('Bonjour');
                }
              }}
              className="px-2 py-1 text-[11px] font-bold bg-white/10 hover:bg-white/20 rounded text-gray-200 transition-colors flex items-center gap-1"
              title="Changer de langue (Français / العربية)"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'fr' ? 'العربية' : 'Français'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-full transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Configuration banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-3.5 py-2 flex items-center justify-between text-[11px] text-amber-800">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
            <span>Mode qualification direct &amp; Devis WhatsApp</span>
          </div>
          <a
            href="https://wa.me/212777077468"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline text-amber-900 inline-flex items-center gap-0.5"
          >
            <span>Ouvrir WhatsApp</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-brand-paperAlt" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-brand-red flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold">
                  CN
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs shadow-sm leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-brand-ink text-white rounded-br-none'
                    : 'bg-white text-brand-ink border border-brand-line rounded-bl-none'
                }`}
              >
                {msg.text}
                <div
                  className={`text-[9px] mt-1 text-right ${
                    msg.sender === 'user' ? 'text-gray-400' : 'text-gray-400'
                  }`}
                >
                  {msg.time}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-[10px] text-brand-ink">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-gray-500 italic">
              <Bot className="w-4 h-4 text-brand-red animate-spin" />
              <span>L’assistant Cristalu Nord rédige une réponse...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="p-2.5 bg-brand-paperCard border-t border-brand-line overflow-x-auto whitespace-nowrap flex gap-2">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p.text)}
              className="text-[11px] px-3 py-1.5 rounded-full bg-brand-paperAlt hover:bg-brand-red hover:text-white border border-brand-line transition-all flex-shrink-0"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-brand-paperCard border-t border-brand-line flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Écrivez votre message ou vos dimensions...'}
            className="flex-1 bg-brand-paperAlt border border-brand-line rounded-full px-4 py-2 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          />

          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-2 bg-brand-red text-white rounded-full hover:bg-brand-redHover disabled:opacity-40 transition-all flex-shrink-0"
            aria-label="Envoyer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
