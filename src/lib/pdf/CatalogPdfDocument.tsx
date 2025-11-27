import React from 'react';
import { Document, Page, Text, View, Image, Link, StyleSheet } from '@react-pdf/renderer';
import { CatalogProduct } from '../../types/catalog';

const TIPTI_URL = 'https://www.tipti.market/tienda/gran-aki?page=1';

export type PdfCategory = {
  id: string;
  name: string;
  accentColor: string;
  bannerImage: string;
  featuredImage: string;
  products: CatalogProduct[];
};

type CatalogPdfDocumentProps = {
  heroImage: string;
  logoImage: string;
  fallbackProductImage: string;
  categories: PdfCategory[];
};

const styles = StyleSheet.create({
  page: {
    padding: 24,
    backgroundColor: '#080010',
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 90,
    height: 30,
    objectFit: 'contain',
  },
  badge: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 2,
  },
  heroImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    objectFit: 'cover',
    marginBottom: 16,
  },
  intro: {
    fontSize: 12,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 800,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  bannerImage: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    objectFit: 'cover',
    marginBottom: 8,
  },
  featuredImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    objectFit: 'cover',
    marginBottom: 10,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  productCard: {
    width: '48%',
    borderRadius: 12,
    borderWidth: 1,
    padding: 8,
    backgroundColor: '#150022',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: 90,
    objectFit: 'contain',
    marginBottom: 6,
  },
  productName: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 4,
  },
  productCode: {
    fontSize: 9,
    color: '#B3B3B3',
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  offerPrice: {
    fontSize: 16,
    fontWeight: 800,
    color: '#FFDE00',
  },
  regularPrice: {
    fontSize: 10,
    textDecoration: 'line-through',
    color: '#E0E0E0',
  },
  categoryFooter: {
    marginTop: 6,
    fontSize: 9,
    color: '#B3B3B3',
  },
});

const formatPrice = (value: string) => {
  const numeric = parseFloat(value);
  if (Number.isNaN(numeric)) return '0.00';
  return numeric.toFixed(2);
};

export const CatalogPdfDocument = ({
  heroImage,
  logoImage,
  fallbackProductImage,
  categories,
}: CatalogPdfDocumentProps) => (
  <Document>
    {categories.map((category, index) => (
      <Page key={category.id} size="A4" style={styles.page} wrap>
        <View style={styles.headerRow}>
          <Image src={logoImage} style={styles.logo} />
          <Text style={styles.badge}>CATÁLOGO INTERACTIVO</Text>
        </View>

        {index === 0 && (
          <>
            <Image src={heroImage} style={styles.heroImage} />
            <Text style={styles.intro}>
              Recorre las ofertas de Quincenazo Días Ultra Negros. Cada tarjeta está enlazada a Tipti
              para que completes la compra en un clic.
            </Text>
          </>
        )}

        <Text style={[styles.categoryTitle, { color: category.accentColor }]}>{category.name}</Text>

        <Image src={category.bannerImage} style={styles.bannerImage} />
        <Image src={category.featuredImage} style={styles.featuredImage} />

        <View style={styles.productGrid}>
          {category.products.map((product) => (
            <Link key={product.codigo} src={TIPTI_URL} style={[styles.productCard, { borderColor: category.accentColor }]}>
              <Image
                src={product.imagen || fallbackProductImage}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.nombre}</Text>
              <Text style={styles.productCode}>CÓD. {product.codigo}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.offerPrice}>${formatPrice(product.precio_oferta)}</Text>
                <Text style={styles.regularPrice}>${formatPrice(product.precio_normal)}</Text>
              </View>
            </Link>
          ))}
        </View>

        <Text style={styles.categoryFooter}>
          Valores sujetos a vigencia y disponibilidad. Imágenes referenciales. Usa el botón en cada tarjeta para comprar en Tipti.
        </Text>
      </Page>
    ))}
  </Document>
);

