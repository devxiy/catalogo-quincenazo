import { NextResponse } from 'next/server';
import { pdf } from '@react-pdf/renderer';
import dinamicosRaw from '../../../data/dinamicos-ultra.json';
import { heroPromos } from '../../../data/catalog';
import { CatalogPdfDocument } from '../../../lib/pdf/CatalogPdfDocument';
import { categoryLayoutConfig, categoryLayoutOrder } from '../../../data/categoryLayout';
import { CatalogProduct } from '../../../types/catalog';

type DinamicosData = Record<string, CatalogProduct[]>;

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const origin = new URL(request.url).origin;
    const dinamicos = dinamicosRaw as DinamicosData;

    const heroImage = `${origin}${heroPromos[0]?.image ?? '/assets/banner-ultra-negros.png'}`;
    const logoImage = `${origin}/assets/logo-aki.png`;
    const fallbackProductImage = `${origin}/assets/producto.png`;

    const categories = categoryLayoutOrder
      .map((categoryKey) => {
        const config = categoryLayoutConfig[categoryKey];
        const products = dinamicos[categoryKey] ?? [];

        if (!config || products.length === 0) {
          return null;
        }

        return {
          id: config.id,
          name: config.name,
          accentColor: config.accentColor,
          bannerImage: `${origin}/assets/categoria-${config.id}.png`,
          featuredImage: `${origin}/assets/categoria-big-${config.id}.png`,
          products,
        };
      })
      .filter((category): category is NonNullable<typeof category> => Boolean(category));

    if (categories.length === 0) {
      return NextResponse.json({ error: 'No hay datos para generar el PDF.' }, { status: 404 });
    }

    const pdfDocument = (
      <CatalogPdfDocument
        heroImage={heroImage}
        logoImage={logoImage}
        fallbackProductImage={fallbackProductImage}
        categories={categories}
      />
    );

    const pdfFile = (await pdf(pdfDocument).toBuffer()) as unknown as Buffer;
    const pdfBytes = new Uint8Array(pdfFile);
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    return new NextResponse(pdfBlob, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="catalogo-quincenazo.pdf"',
      },
    });
  } catch (error) {
    console.error('[catalog-pdf] Failed to generate PDF', error);
    return NextResponse.json({ error: 'No se pudo generar el PDF.' }, { status: 500 });
  }
}

