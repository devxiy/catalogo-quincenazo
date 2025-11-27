export type CatalogProduct = {
  codigo: string;
  nombre: string;
  precio_oferta: string;
  precio_normal: string;
  descuento: string;
  imagen: string;
  vigencia: {
    inicio: string;
    fin: string;
  };
};

export type CategoryLayoutKey = 'Alimentos' | 'Bebidas' | 'Higiene' | 'Limpieza' | 'Hogar';

