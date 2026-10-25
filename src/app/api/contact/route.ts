import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/validations/contact';
import { dataStore } from '@/lib/data/initial-data';
import { supabaseAdmin, isSupabaseAdminConfigured } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = ContactFormSchema.parse(body);

    dataStore.addLead({
      full_name: validatedData.full_name,
      phone: validatedData.phone,
      email: validatedData.email || undefined,
      city: validatedData.city || 'Tanger',
      project_type: validatedData.project_type,
      material: 'aluminium',
      source: 'Formulaire de Contact',
      status: 'nouveau',
      notes: validatedData.message,
    });

    if (isSupabaseAdminConfigured() && supabaseAdmin) {
      await supabaseAdmin.from('contact_requests').insert({
        full_name: validatedData.full_name,
        phone: validatedData.phone,
        email: validatedData.email || null,
        city: validatedData.city || 'Tanger',
        project_type: validatedData.project_type,
        message: validatedData.message,
        tags: validatedData.tags || [],
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Votre message a bien été transmis à l’équipe Cristalu Nord.',
    });
  } catch (err: unknown) {
    console.error('Error processing contact form:', err);
    const errorMessage = err instanceof Error ? err.message : 'Erreur de validation';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}
