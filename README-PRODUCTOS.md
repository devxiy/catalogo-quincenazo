# 📦 Estructura JSON de Productos - Catálogo Black Days AKÍ

## 🚀 Descripción General

Este documento describe la estructura JSON que debe seguirse para agregar productos al catálogo Black Days de AKÍ. Cada producto debe incluir todos los campos especificados para garantizar una visualización correcta en el catálogo.

## 📋 Estructura de Producto

```json
{
  "id": "string",                    // ID único del producto
  "name": "string",                  // Nombre del producto
  "description": "string",           // Descripción detallada
  "category": "string",              // Categoría principal
  "subcategory": "string",           // Subcategoría
  "brand": "string",                 // Marca del producto
  "price": number,                   // Precio actual (con descuento)
  "regularPrice": number,            // Precio regular (sin descuento)
  "discount": "string",              // Texto del descuento (ej: "50% OFF", "3x2")
  "discountPercentage": number,      // Porcentaje de descuento (0-100)
  "imageUrl": "string",              // URL de la imagen principal
  "additionalImages": ["string"],    // Array de URLs de imágenes adicionales
  "features": ["string"],            // Array de características principales
  "tags": ["string"],                // Array de etiquetas especiales
  "stock": number,                   // Cantidad en stock
  "sku": "string",                   // Código SKU
  "isNew": boolean,                  // Si es producto nuevo
  "isBestSeller": boolean,           // Si es más vendido
  "rating": number,                  // Calificación (0-5)
  "reviewCount": number              // Cantidad de reseñas
}
```

## 📁 Categorías Disponibles

Las categorías principales disponibles son:

- **Tecnología**: Televisores, smartphones, laptops, tablets, gaming
- **Línea Blanca**: Refrigeradoras, lavadoras, microondas, cocinas
- **Alimentos y Bebidas**: Bebidas, abarrotes, snacks, productos frescos
- **Hogar**: Muebles, decoración, dormitorio, cocina
- **Limpieza**: Detergentes, papel higiénico, productos de aseo

## 🏷️ Tags Especiales

Los tags determinan características especiales del producto:

- `"oferta-relampago"`: Muestra badge de oferta relámpago
- `"envio-gratis"`: Indica envío gratuito
- `"12-meses"`: Permite pago en 12 meses sin intereses
- `"3x2"`, `"3x6"`, `"4x3"`: Promociones especiales de cantidad
- `"mega-oferta"`: Ofertas destacadas
- `"limitado"`: Stock limitado
- `"pack-ahorro"`: Packs económicos
- `"premium"`: Productos premium
- `"gaming"`: Productos gaming
- `"garantia"`: Con garantía extendida

## 📸 Imágenes

- **imageUrl**: URL de la imagen principal (obligatorio)
- **additionalImages**: Array de URLs para imágenes adicionales (opcional)
- Tamaño recomendado: 800x800px mínimo
- Formatos soportados: JPG, PNG, WebP
- Se recomienda usar servicios como Unsplash, Cloudinary o similares

## 💡 Ejemplo Completo

```json
{
  "id": "16",
  "name": "MacBook Pro 14\" M3 Pro 18GB RAM 512GB SSD",
  "description": "La laptop más potente de Apple con el nuevo chip M3 Pro, pantalla Liquid Retina XDR",
  "category": "Tecnología",
  "subcategory": "Laptops",
  "brand": "Apple",
  "price": 1499.00,
  "regularPrice": 2499.00,
  "discount": "40% OFF",
  "discountPercentage": 40,
  "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
  "additionalImages": [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80"
  ],
  "features": [
    "Chip Apple M3 Pro con CPU de 11 núcleos",
    "18GB de memoria unificada",
    "512GB SSD almacenamiento",
    "Pantalla Liquid Retina XDR de 14.2\"",
    "Hasta 18 horas de batería"
  ],
  "tags": ["premium", "envio-gratis", "12-meses", "mega-oferta"],
  "stock": 5,
  "sku": "MAC-M3P-14-512",
  "isNew": true,
  "isBestSeller": true,
  "rating": 4.9,
  "reviewCount": 1523
}
```

## 🔧 Cómo Agregar Productos

1. Abre el archivo `/data/products.json`
2. Agrega tu nuevo producto al array siguiendo la estructura especificada
3. Asegúrate de que el ID sea único
4. Verifica que todos los campos obligatorios estén presentes
5. Guarda el archivo

## ✅ Validación

Antes de agregar un producto, verifica:

- [ ] ID único
- [ ] Todos los campos obligatorios completos
- [ ] URLs de imágenes válidas y accesibles
- [ ] Precio menor que regularPrice (si hay descuento)
- [ ] discountPercentage calculado correctamente
- [ ] Tags válidos según la lista
- [ ] Categoría existente

## 🎯 Tips para Mejores Resultados

1. **Títulos atractivos**: Incluye la marca y características principales
2. **Descripciones claras**: Destaca los beneficios del producto
3. **Imágenes de calidad**: Usa imágenes de alta resolución con fondo claro
4. **Features relevantes**: Lista las 5 características más importantes
5. **Tags estratégicos**: Usa tags que aumenten la visibilidad del producto
6. **Precios competitivos**: Asegúrate de que el descuento sea atractivo

## 🚨 Notas Importantes

- El archivo `products.json` debe mantener formato JSON válido
- No uses comillas simples, solo dobles
- No dejes comas al final del último elemento
- Los números no deben ir entre comillas
- Los booleanos deben ser `true` o `false` (sin comillas)
