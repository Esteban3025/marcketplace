import { Search, Filter, Grid, List, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro Max 256GB",
      price: "$850.000",
      location: "San Antonio, Central",
      image: "/placeholder.svg?height=200&width=200",
      category: "Tecnología",
      featured: true,
      likes: 12,
    },
    {
      id: 2,
      title: "Notebook Lenovo ThinkPad X1",
      price: "$420.000",
      location: "San Lorenzo, Central",
      image: "/placeholder.svg?height=200&width=200",
      category: "Tecnología",
      featured: false,
      likes: 8,
    },
    {
      id: 3,
      title: "Bicicleta Mountain Bike Trek",
      price: "$180.000",
      location: "Limpio, Central",
      image: "/placeholder.svg?height=200&width=200",
      category: "Deportes",
      featured: false,
      likes: 15,
    },
    {
      id: 4,
      title: "PlayStation 5 + 2 Joysticks",
      price: "$650.000",
      location: "Villa Rica, Guairá",
      image: "/placeholder.svg?height=200&width=200",
      category: "Gaming",
      featured: true,
      likes: 23,
    },
    {
      id: 5,
      title: "Sofá 3 Cuerpos Cuero",
      price: "$320.000",
      location: "Santani, San Pedro",
      image: "/placeholder.svg?height=200&width=200",
      category: "Hogar",
      featured: false,
      likes: 6,
    },
    {
      id: 6,
      title: "Auto Volkswagen Gol 2018",
      price: "$2.800.000",
      location: "Mariano Roque Alonso, Central",
      image: "/placeholder.svg?height=200&width=200",
      category: "Vehículos",
      featured: false,
      likes: 31,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Productos</h1>
          <p className="text-gray-600">Encuentra lo que buscas en nuestra comunidad</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Buscar productos..." className="pl-10" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="tecnologia">Tecnología</SelectItem>
                  <SelectItem value="hogar">Hogar</SelectItem>
                  <SelectItem value="deportes">Deportes</SelectItem>
                  <SelectItem value="vehiculos">Vehículos</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="caba">Asuncion</SelectItem>
                  <SelectItem value="cordoba">San Antonio</SelectItem>
                  <SelectItem value="santa-fe">Limpio</SelectItem>
                  <SelectItem value="mendoza">San Lorenzo</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Más nuevos</SelectItem>
                  <SelectItem value="price-low">Menor precio</SelectItem>
                  <SelectItem value="price-high">Mayor precio</SelectItem>
                  <SelectItem value="popular">Más populares</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex border rounded-lg">
              <Button variant="ghost" size="sm" className="rounded-r-none">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-l-none">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold">1-6</span> de <span className="font-semibold">156</span> productos
          </p>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Más filtros
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Link href={`/productos/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </Link>
                  {product.featured && <Badge className="absolute top-2 left-2 bg-blue-600">Destacado</Badge>}
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <Link href={`/productos/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-2xl font-bold text-slate-900 mb-2">{product.price}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{product.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm">{product.likes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" disabled>
              Anterior
            </Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">...</Button>
            <Button variant="outline">26</Button>
            <Button variant="outline">Siguiente</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
