'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, FileText, FolderKanban, MessageSquare, 
  Settings, Globe, LogOut, ShieldAlert 
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Vue Générale', href: '/admin', icon: LayoutDashboard },
    { name: 'CRM & Prospects', href: '/admin/crm', icon: Users },
    { name: 'Gestion des Devis', href: '/admin/devis', icon: FileText },
    { name: 'Suivi Chantiers', href: '/admin/projets', icon: FolderKanban },
    { name: 'WhatsApp & Messages', href: '/admin/whatsapp', icon: MessageSquare },
    { name: 'Contenu & SEO', href: '/admin/contenu', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-brand-ink text-gray-300 min-h-screen flex flex-col border-r border-brand-lineDark">
      {/* Brand Header */}
      <div className="p-6 border-b border-brand-lineDark">
        <Link href="/" className="inline-block" aria-label="CRISTALU NORD">
          <div className="relative h-9 w-44">
            <Image
              src="/assets/logo-cristalu-nord-blanc.webp"
              alt="CRISTALU NORD"
              fill
              className="object-contain object-left"
            />
          </div>
        </Link>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded w-max border border-emerald-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Portail Administration</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Exit */}
      <div className="p-4 border-t border-brand-lineDark space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 px-3 py-2 text-xs text-gray-400 hover:text-white rounded transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span>Voir le site public ↗</span>
        </Link>

        <Link
          href="/admin/login"
          className="flex items-center gap-2.5 px-3 py-2 text-xs text-red-400 hover:text-red-300 rounded transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </Link>
      </div>
    </aside>
  );
}
