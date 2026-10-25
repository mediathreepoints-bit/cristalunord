import { NextRequest, NextResponse } from 'next/server';
import { processAgentMessage } from '@/lib/whatsapp/agent-engine';
import { dataStore } from '@/lib/data/initial-data';

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'cristalu_nord_webhook_verify_secret_2026';
const WHATSAPP_API_TOKEN = process.env.WHATSAPP_API_TOKEN || '';
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || '';

// GET : Meta WhatsApp Webhook Verification
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[WhatsApp Webhook] Verification successful');
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Verification failed' }, { status: 403 });
}

// POST : Incoming WhatsApp message processing
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check if it's a WhatsApp message event
    if (body.object === 'whatsapp_business_account') {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const message = value?.messages?.[0];

      if (message && message.type === 'text') {
        const fromNumber = message.from; // Sender phone number
        const messageText = message.text?.body || '';

        console.log(`[WhatsApp Inbound] From: ${fromNumber}, Text: ${messageText}`);

        // Process message with AI / rule engine
        const response = processAgentMessage(messageText);

        // If Meta Cloud API token is present, send actual reply
        if (WHATSAPP_API_TOKEN && WHATSAPP_PHONE_NUMBER_ID) {
          await fetch(`https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${WHATSAPP_API_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messaging_product: 'whatsapp',
              to: fromNumber,
              type: 'text',
              text: { body: response.replyText },
            }),
          });
        }
      }

      return NextResponse.json({ status: 'EVENT_RECEIVED' }, { status: 200 });
    }

    return NextResponse.json({ status: 'IGNORED' }, { status: 200 });
  } catch (err: unknown) {
    console.error('[WhatsApp Webhook Error]', err);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}
