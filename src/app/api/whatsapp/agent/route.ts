import { NextRequest, NextResponse } from 'next/server';
import { processAgentMessage } from '@/lib/whatsapp/agent-engine';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message manquant' }, { status: 400 });
    }

    const response = processAgentMessage(message, history || []);
    return NextResponse.json(response);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Erreur interne';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
