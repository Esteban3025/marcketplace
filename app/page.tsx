import { Search, Users, ShoppingBag, MessageSquare, ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      price: "$850.000",
      location: "Asuncion, Trinidad",
      image: "/placeholder.svg?height=200&width=200",
      featured: true,
    },
    {
      id: 2,
      title: "Notebook Lenovo ThinkPad",
      price: "$420.000",
      location: "Fernando de la Mora, Fernando Zona Nte",
      image: "/placeholder.svg?height=200&width=200",
      featured: true,
    },
    {
      id: 3,
      title: "Bicicleta Mountain Bike",
      price: "$180.000",
      location: "San Lorenzo, 10 de Agosto",
      image: "/placeholder.svg?height=200&width=200",
      featured: true,
    },
    {
      id: 4,
      title: "PlayStation 5",
      price: "$650.000",
      location: "Asuncion, Recoleta",
      image: "/placeholder.svg?height=200&width=200",
      featured: true,
    },
  ]

  const forumTopics = [
    {
      title: "Tips para vender más rápido",
      author: "MariaVendedora",
      replies: 23,
      category: "Tips",
    },
    {
      title: "¿Cómo evitar estafas?",
      author: "CarlosSeguro",
      replies: 45,
      category: "Ayuda",
    },
    {
      title: "Mi experiencia vendiendo autos",
      author: "AutosJuan",
      replies: 12,
      category: "Experiencias",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Compra y vende con <span className="text-blue-400">confianza</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              El marketplace social donde conectas con tu comunidad
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="¿Qué estás buscando?" className="pl-12 py-4 text-lg bg-white text-gray-900" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-transparent">
                  Buscar
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/publicar">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Publicar producto
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Link href="/registro">
                  <Users className="w-5 h-5 mr-2" />
                  Únete gratis
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Productos destacados</h2>
            <Button asChild variant="outline">
              <Link href="/productos">
                Ver todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-blue-600">Destacado</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-2xl font-bold text-slate-900 mb-2">{product.price}</p>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{product.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Foro de la comunidad</h2>
              <p className="text-gray-600">Comparte experiencias y obtén consejos</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/foro">
                <MessageSquare className="w-4 h-4 mr-2" />
                Ver foro
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {forumTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {topic.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-3 hover:text-blue-600 cursor-pointer">{topic.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Por {topic.author}</span>
                    <span>{topic.replies} respuestas</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-xl">Productos publicados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5,000+</div>
              <div className="text-xl">Usuarios activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15,000+</div>
              <div className="text-xl">Transacciones exitosas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para empezar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya confían en PuestoFlex para sus compras y ventas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
              <Link href="/registro">Crear cuenta gratis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/productos">Explorar productos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
