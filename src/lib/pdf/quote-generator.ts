import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Quote } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';

export function generateQuotePDF(quote: Quote): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header Background bar
  doc.setFillColor(18, 20, 20); // Architectural Ink
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Red accent line
  doc.setFillColor(167, 30, 34); // Cristalu Red
  doc.rect(0, 28, pageWidth, 2, 'F');

  // Brand title & subtitle
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('CRISTALU NORD', 14, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('MENUISERIE ALUMINIUM & PVC · FAÇADES EN VERRE · MAROC', 14, 21);

  // Quote Reference Badge (Top Right)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(`DEVIS N° ${quote.quote_number}`, pageWidth - 14, 14, { align: 'right' });
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.text(`Date : ${formatDate(quote.created_at)}`, pageWidth - 14, 21, { align: 'right' });

  // Contact Info Box (Left) & Client Info Box (Right)
  doc.setTextColor(30, 30, 30);

  // Company Box
  doc.setFillColor(248, 249, 247);
  doc.roundedRect(14, 36, 85, 38, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('ÉMETTEUR :', 18, 43);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('CRISTALU NORD SARL', 18, 49);
  doc.text('Tél / WhatsApp : +212 777 077 468', 18, 54);
  doc.text('Email : contact@cristalunord.ma', 18, 59);
  doc.text('Tanger / Tétouan / Maroc', 18, 64);

  // Client Box
  doc.setFillColor(248, 249, 247);
  doc.roundedRect(105, 36, 91, 38, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('CLIENT :', 110, 43);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text(quote.client_name, 110, 49);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(`Tél : ${quote.client_phone}`, 110, 54);
  if (quote.client_email) {
    doc.text(`Email : ${quote.client_email}`, 110, 59);
  }
  doc.text(`Chantier : ${quote.site_address || quote.city || 'Tanger'}`, 110, 64);

  // Quote Title / Object
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(167, 30, 34);
  doc.text(`Objet : ${quote.title}`, 14, 82);

  // Table of Items
  const tableData = quote.items.map((item, idx) => [
    `${idx + 1}`,
    `${item.description}\n${item.glazing_option ? `• Vitrage: ${item.glazing_option}` : ''}${item.color_finish ? ` | Finition: ${item.color_finish}` : ''}`,
    item.width_cm && item.height_cm ? `${item.width_cm} × ${item.height_cm} cm` : 'Sur-mesure',
    `${item.quantity}`,
    `${formatCurrency(item.unit_price_ht)}`,
    `${formatCurrency(item.total_price_ht)}`,
  ]);

  autoTable(doc, {
    startY: 87,
    head: [['#', 'Désignation des Ouvrages', 'Dimensions', 'Qté', 'P.U HT', 'Total HT']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [18, 20, 20],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 8.5,
    },
    bodyStyles: {
      fontSize: 8,
      cellPadding: 3,
    },
    columnStyles: {
      0: { cellWidth: 10, halign: 'center' },
      1: { cellWidth: 80 },
      2: { cellWidth: 26, halign: 'center' },
      3: { cellWidth: 14, halign: 'center' },
      4: { cellWidth: 28, halign: 'right' },
      5: { cellWidth: 28, halign: 'right' },
    },
  });

  // Totals Section
  const finalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 8;
  const totalsX = 120;
  const totalsWidth = 76;

  doc.setFillColor(248, 249, 247);
  doc.roundedRect(totalsX, finalY, totalsWidth, 38, 2, 2, 'F');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);

  doc.text('Total Brut HT :', totalsX + 4, finalY + 7);
  doc.text(formatCurrency(quote.subtotal_ht), totalsX + totalsWidth - 4, finalY + 7, { align: 'right' });

  if (quote.discount_amount > 0) {
    doc.text(`Remise (${quote.discount_percentage}%) :`, totalsX + 4, finalY + 13);
    doc.text(`- ${formatCurrency(quote.discount_amount)}`, totalsX + totalsWidth - 4, finalY + 13, { align: 'right' });
  }

  doc.text(`TVA (${quote.tva_rate}%) :`, totalsX + 4, finalY + 19);
  doc.text(formatCurrency(quote.tva_amount), totalsX + totalsWidth - 4, finalY + 19, { align: 'right' });

  doc.setFillColor(18, 20, 20);
  doc.rect(totalsX, finalY + 24, totalsWidth, 12, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(255, 255, 255);
  doc.text('NET À PAYER TTC :', totalsX + 4, finalY + 31.5);
  doc.text(formatCurrency(quote.total_ttc), totalsX + totalsWidth - 4, finalY + 31.5, { align: 'right' });

  // Payment terms & Conditions (Left side of totals)
  doc.setTextColor(40, 40, 40);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Modalités & Conditions :', 14, finalY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text(`• Validité de l'offre : ${quote.validity_days} jours à compter de la date d'émission.`, 14, finalY + 12);
  doc.text(`• Conditions de règlement : ${quote.payment_terms}`, 14, finalY + 17);
  doc.text('• Fabrication sur mesure conforme aux normes RTCM Maroc & Qualicoat.', 14, finalY + 22);
  doc.text('• Pose assurée par l\'équipe technique qualifiée Cristalu Nord.', 14, finalY + 27);

  // Signature Block
  const sigY = finalY + 45;
  if (sigY < 265) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('Pour Cristalu Nord (Direction Technique) :', 14, sigY);
    doc.text('Bon pour Accord & Commande (Client) :', 110, sigY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text('Date et signature précédée de la mention "Lu et approuvé" :', 110, sigY + 5);
  }

  // Footer on all pages
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(120, 120, 120);
  doc.text(
    'CRISTALU NORD SARL · Menuiserie Aluminium, PVC, Façades & Vitrages · Tél : +212 777 077 468 · Tanger, Maroc',
    pageWidth / 2,
    pageHeight - 6,
    { align: 'center' }
  );

  return doc;
}
