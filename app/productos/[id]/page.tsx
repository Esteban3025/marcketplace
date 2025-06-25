import { Heart, Share2, MapPin, Calendar, Eye, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"

export default function ProductDetailPage() {
  const product = {
    id: 1,
    title: "iPhone 14 Pro Max 256GB - Como Nuevo",
    price: "$850.000",
    location: "Buenos Aires, CABA",
    category: "Tecnología",
    description: `iPhone 14 Pro Max de 256GB en excelente estado, prácticamente como nuevo. 
    
Características:
• Pantalla Super Retina XDR de 6.7 pulgadas
• Chip A16 Bionic
• Sistema de cámaras Pro con teleobjetivo
• Batería con excelente duración
• Face ID avanzado
• Resistente al agua IP68

El teléfono ha sido usado con mucho cuidado, siempre con funda y protector de pantalla. Incluye caja original, cargador y todos los accesorios. Sin rayones ni golpes.

Motivo de venta: cambio por modelo más nuevo.

Acepto efectivo o transferencia. Posibilidad de entrega en zona norte o centro de CABA.`,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    publishedDate: "Hace 2 días",
    views: 156,
    likes: 23,
    seller: {
      name: "María González",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.8,
      reviews: 47,
      memberSince: "Miembro desde 2022",
      verified: true,
    },
  }

  const relatedProducts = [
    {
      id: 2,
      title: "iPhone 13 Pro 128GB",
      price: "$650.000",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 3,
      title: "Samsung Galaxy S23",
      price: "$720.000",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 4,
      title: "iPhone 14 Plus 128GB",
      price: "$780.000",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-blue-600">
              Productos
            </Link>
            <span>/</span>
            <Link href="/productos?categoria=tecnologia" className="hover:text-blue-600">
              Tecnología
            </Link>
            <span>/</span>
            <span className="text-gray-900">iPhone 14 Pro Max</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {/* Main Image */}
              <div className="relative mb-4">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <Button variant="ghost" size="sm" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="absolute top-4 right-16 bg-white/80 hover:bg-white">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className="border-2 border-transparent hover:border-blue-600 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.title} - Imagen ${index + 1}`}
                      width={150}
                      height={100}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
              <h2 className="text-xl font-bold mb-4">Descripción</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Product Info & Seller */}
          <div className="space-y-6">
            {/* Product Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Badge className="mb-3">{product.category}</Badge>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h1>

              <div className="text-3xl font-bold text-slate-900 mb-4">{product.price}</div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{product.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{product.publishedDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Eye className="w-4 h-4 mr-2" />
                  <span>{product.views} visualizaciones</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-slate-900 hover:bg-slate-800" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar vendedor
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Hacer oferta
                </Button>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Vendedor</h3>

              <div className="flex items-start space-x-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={product.seller.avatar || "/placeholder.svg"} />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{product.seller.name}</h4>
                    {product.seller.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verificado
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.seller.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.seller.rating} ({product.seller.reviews} reseñas)
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{product.seller.memberSince}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/perfil/${product.seller.name}`}>Ver perfil completo</Link>
                </Button>
                <Button variant="ghost" className="w-full">
                  Enviar mensaje
                </Button>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Consejos de seguridad</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Reúnete en lugares públicos y seguros</li>
                <li>• Inspecciona el producto antes de pagar</li>
                <li>• Desconfía de precios muy por debajo del mercado</li>
                <li>• Usa métodos de pago seguros</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.title}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold mb-2 hover:text-blue-600">{relatedProduct.title}</h3>
                  <p className="text-xl font-bold text-slate-900">{relatedProduct.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
