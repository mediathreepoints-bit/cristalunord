'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Tanger');
  const [projectType, setProjectType] = useState('Menuiserie aluminium');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          phone,
          email,
          city,
          project_type: projectType,
          message,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Erreur lors de l’envoi');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Erreur de transmission';
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-16 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            CONTACT &amp; DEVIS DIRECT
          </span>
          <span className="w-8 h-[1px] bg-brand-red"></span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-ink mb-6">
          Contactez l’Atelier <em className="font-serif italic font-normal text-brand-red">CRISTALU NORD.</em>
        </h1>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
          Partagez vos plans, vos dimensions ou vos questions. Notre équipe technique vous répond dans les plus brefs délais avec une proposition chiffrée.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-paperCard border border-brand-line p-6 rounded-xl shadow-sm space-y-4">
              <h2 className="font-heading text-base font-bold text-brand-ink border-b border-brand-line pb-3">
                Coordonnées Directes
              </h2>

              <a
                href="tel:+212777077468"
                className="flex items-center gap-3 text-brand-ink hover:text-brand-red transition-colors text-xs font-semibold"
              >
                <div className="w-8 h-8 rounded bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-muted uppercase font-bold">Appel Téléphonique</span>
                  <strong className="text-sm font-extrabold">+212 777 077 468</strong>
                </div>
              </a>

              <a
                href="https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20des%20renseignements%20pour%20un%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-emerald-800 hover:text-emerald-900 transition-colors text-xs font-semibold"
              >
                <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-emerald-700 uppercase font-bold">WhatsApp Direct</span>
                  <strong className="text-sm font-extrabold text-emerald-900">+212 777 077 468 ↗</strong>
                </div>
              </a>

              <div className="flex items-center gap-3 text-xs font-semibold">
                <div className="w-8 h-8 rounded bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-muted uppercase font-bold">Email Technique</span>
                  <strong className="text-brand-ink">contact@cristalunord.ma</strong>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs font-semibold border-t border-brand-line pt-3">
                <div className="w-8 h-8 rounded bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-muted uppercase font-bold">Horaires d'Atelier</span>
                  <p className="text-brand-muted font-normal text-xs">Lundi au Samedi : 08h30 – 18h30</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-64 rounded-xl overflow-hidden border border-brand-line shadow-sm relative bg-gray-100">
              <iframe
                title="Carte Tanger & Région Nord"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103598.05831637785!2d-5.892404099999999!3d35.7594651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc57111e3041c!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-brand-paperCard border border-brand-line p-8 sm:p-10 rounded-xl shadow-apple">
            {isSuccess ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="font-heading text-xl font-bold text-brand-ink">
                  Votre message a bien été envoyé !
                </h2>
                <p className="text-xs text-brand-muted max-w-md mx-auto leading-relaxed">
                  Notre équipe technique étudie vos éléments et prendra contact avec vous dans la journée.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setMessage('');
                  }}
                  className="mt-4 px-6 py-2.5 bg-brand-ink text-white text-xs font-bold rounded"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h2 className="font-heading text-lg font-bold text-brand-ink mb-4 border-b border-brand-line pb-2">
                  Formulaire de Contact &amp; Projet
                </h2>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-brand-ink mb-1">
                      Votre nom complet <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : M. Amrani"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-ink mb-1">
                      Téléphone / WhatsApp <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+212 661 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-brand-ink mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-ink mb-1">
                      Ville du chantier
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-brand-ink mb-1">
                    Nature du projet <span className="text-brand-red">*</span>
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red"
                  >
                    <option value="Menuiserie aluminium">Menuiserie aluminium (baies vitrées, fenêtres, portes)</option>
                    <option value="Menuiserie PVC">Menuiserie PVC isolante</option>
                    <option value="Façade vitrée & Mur rideau">Façade vitrée &amp; Mur rideau</option>
                    <option value="Habillage composite Alucobond">Habillage composite Alucobond</option>
                    <option value="Garde-corps en verre">Garde-corps en verre trempé</option>
                    <option value="Autre projet sur mesure">Autre projet sur mesure</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-brand-ink mb-1">
                    Votre message ou détails des dimensions <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez votre demande, le nombre d'ouvrages ou vos questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-brand-paper border border-brand-line rounded p-2.5 text-xs text-brand-ink focus:outline-none focus:border-brand-red resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-ink hover:bg-brand-red text-white py-3.5 rounded font-bold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Transmettre ma demande'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
