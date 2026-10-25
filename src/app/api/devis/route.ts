import { NextRequest, NextResponse } from 'next/server';
import { QuoteRequestSchema } from '@/lib/validations/quote';
import { dataStore } from '@/lib/data/initial-data';
import { supabaseAdmin, isSupabaseAdminConfigured } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = QuoteRequestSchema.parse(body);

    const year = new Date().getFullYear();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const quoteNumber = `DEV-${year}-${randomNum}`;

    // Add to in-memory/persistent fallback data store
    const newLead = dataStore.addLead({
      full_name: validatedData.full_name,
      phone: validatedData.phone,
      email: validatedData.email || undefined,
      city: validatedData.city,
      project_type: validatedData.product_name,
      material: validatedData.material,
      dimensions: validatedData.width_cm && validatedData.height_cm ? `${validatedData.width_cm}x${validatedData.height_cm} cm` : undefined,
      quantity: validatedData.quantity,
      options: {
        glazing: validatedData.glazing,
        color: validatedData.color,
        opening: validatedData.opening_type,
        installation: validatedData.include_installation,
        tags: validatedData.tags,
      },
      source: 'Configurateur Devis Web',
      status: 'nouveau',
      notes: validatedData.comment || 'Demande enregistrée via le configurateur en ligne.',
    });

    // If Supabase Admin is configured, persist to PostgreSQL
    if (isSupabaseAdminConfigured() && supabaseAdmin) {
      await supabaseAdmin.from('leads').insert({
        full_name: validatedData.full_name,
        phone: validatedData.phone,
        email: validatedData.email || null,
        city: validatedData.city,
        project_type: validatedData.product_name,
        material: validatedData.material,
        source: 'Configurateur Devis Web',
        status: 'nouveau',
        notes: validatedData.comment || null,
      });
    }

    return NextResponse.json({
      success: true,
      quote_number: quoteNumber,
      lead_id: newLead.id,
      message: 'Demande de devis enregistrée avec succès.',
    });
  } catch (err: unknown) {
    console.error('Error processing quote request:', err);
    const errorMessage = err instanceof Error ? err.message : 'Erreur interne du serveur';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}
