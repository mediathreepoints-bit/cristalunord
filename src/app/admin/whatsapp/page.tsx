'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { MessageSquare, Send, User, Bot, AlertCircle, CheckCircle2, Phone } from 'lucide-react';
import { dataStore } from '@/lib/data/initial-data';
import { WhatsAppConversation } from '@/types';
import { formatDateTime } from '@/lib/utils';

export default function AdminWhatsAppPage() {
  const [conversations, setConversations] = useState<WhatsAppConversation[]>(dataStore.conversations);
  const [selectedConv, setSelectedConv] = useState<WhatsAppConversation>(conversations[0]);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedConv) return;

    const newMsg = {
      id: `msg-${Date.now()}`,
      conversation_id: selectedConv.id,
      direction: 'outbound' as const,
      message_text: replyText.trim(),
      status: 'sent' as const,
      created_at: new Date().toISOString(),
    };

    const updated = {
      ...selectedConv,
      requires_human_intervention: false,
      last_message_at: new Date().toISOString(),
      messages: [...selectedConv.messages, newMsg],
    };

    setSelectedConv(updated);
    setConversations((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
    setReplyText('');
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader title="Gestion des Conversations WhatsApp" />

      <main className="p-8 space-y-6 flex-1">
        {/* Banner */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Assistant IA WhatsApp &amp; Cloud API : Synchronisation des messages entrants et qualification de prospects.</span>
          </div>
          <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            Numéro officiel : +212 777 077 468
          </span>
        </div>

        {/* 2 Columns : Conversation List & Active Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[640px]">
          {/* Threads List */}
          <div className="lg:col-span-4 bg-brand-paperCard border border-brand-line rounded-lg overflow-y-auto flex flex-col shadow-sm">
            <div className="p-4 border-b border-brand-line bg-brand-paperAlt">
              <h3 className="font-heading text-xs font-bold text-brand-ink uppercase tracking-wider">
                Discussions en cours ({conversations.length})
              </h3>
            </div>

            <div className="divide-y divide-brand-line flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConv(conv)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedConv?.id === conv.id ? 'bg-brand-redLight/40' : 'hover:bg-brand-paper'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-xs font-bold text-brand-ink">{conv.client_name}</strong>
                    <span className="text-[10px] text-brand-muted">{formatDateTime(conv.last_message_at)}</span>
                  </div>

                  <p className="text-[11px] text-brand-muted truncate">
                    {conv.messages[conv.messages.length - 1]?.message_text}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-[9px] uppercase font-bold bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">
                      {conv.city || 'Maroc'}
                    </span>
                    {conv.requires_human_intervention && (
                      <span className="text-[9px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded flex items-center gap-1">
                        <AlertCircle className="w-2.5 h-2.5" />
                        <span>Action requise</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Conversation Pane */}
          <div className="lg:col-span-8 bg-brand-paperCard border border-brand-line rounded-lg flex flex-col shadow-sm overflow-hidden">
            {/* Thread Header */}
            <div className="p-4 bg-brand-ink text-white flex items-center justify-between border-b border-brand-lineDark">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center font-bold text-xs text-white">
                  {selectedConv.client_name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">{selectedConv.client_name}</h4>
                  <span className="text-xs text-gray-300">+{selectedConv.phone_number} · {selectedConv.city}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${selectedConv.phone_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded text-xs font-bold flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ouvrir sur mobile</span>
              </a>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-brand-paperAlt">
              {selectedConv.messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-end gap-2 ${m.direction === 'outbound' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.direction === 'inbound' && (
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-[10px] text-brand-ink font-bold">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-xs shadow-sm leading-relaxed whitespace-pre-line ${
                      m.direction === 'outbound'
                        ? 'bg-brand-ink text-white rounded-br-none'
                        : 'bg-white text-brand-ink border border-brand-line rounded-bl-none'
                    }`}
                  >
                    {m.message_text}
                    <div className="text-[9px] mt-1 text-right text-gray-400">
                      {formatDateTime(m.created_at)}
                    </div>
                  </div>

                  {m.direction === 'outbound' && (
                    <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center text-[10px] text-white font-bold">
                      CN
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Human Reply Form */}
            <form onSubmit={handleSendReply} className="p-3 bg-brand-paperCard border-t border-brand-line flex gap-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Rédiger une réponse manuelle à ce client..."
                className="flex-1 bg-brand-paper border border-brand-line rounded px-4 py-2 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
              />
              <button
                type="submit"
                disabled={!replyText.trim()}
                className="bg-brand-red hover:bg-brand-redHover text-white px-4 py-2 rounded text-xs font-bold flex items-center gap-1 disabled:opacity-40"
              >
                <span>Envoyer</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
