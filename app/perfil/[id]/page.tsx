import { MapPin, Calendar, Star, MessageCircle, UserPlus, Share2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ProfilePage() {
  const user = {
    name: "María González",
    avatar: "/placeholder.svg?height=120&width=120",
    location: "Buenos Aires, CABA",
    memberSince: "Marzo 2022",
    rating: 4.8,
    reviews: 47,
    followers: 234,
    following: 89,
    verified: true,
    description:
      "Apasionada por la tecnología y los productos de calidad. Siempre busco dar el mejor servicio a mis compradores. Respondo rápido y soy muy cuidadosa con los envíos.",
    stats: {
      totalSales: 156,
      activeListings: 12,
      profileViews: 2340,
    },
  }

  const userProducts = [
    {
      id: 1,
      title: "iPhone 14 Pro Max 256GB",
      price: "$850.000",
      image: "/placeholder.svg?height=200&width=200",
      status: "Activo",
      views: 156,
      likes: 23,
    },
    {
      id: 2,
      title: "MacBook Air M2 2022",
      price: "$1.200.000",
      image: "/placeholder.svg?height=200&width=200",
      status: "Activo",
      views: 89,
      likes: 15,
    },
    {
      id: 3,
      title: "iPad Pro 11 pulgadas",
      price: "$650.000",
      image: "/placeholder.svg?height=200&width=200",
      status: "Vendido",
      views: 234,
      likes: 45,
    },
    {
      id: 4,
      title: "AirPods Pro 2da Gen",
      price: "$180.000",
      image: "/placeholder.svg?height=200&width=200",
      status: "Activo",
      views: 67,
      likes: 12,
    },
  ]

  const reviews = [
    {
      id: 1,
      reviewer: "Carlos Mendez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment: "Excelente vendedora, muy responsable y el producto llegó en perfectas condiciones. Recomendada 100%.",
      date: "Hace 1 semana",
      product: "iPhone 13 Pro",
    },
    {
      id: 2,
      reviewer: "Ana Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      comment: "Todo perfecto, tal como se describía. Muy buena comunicación y entrega puntual.",
      date: "Hace 2 semanas",
      product: "MacBook Air",
    },
    {
      id: 3,
      reviewer: "Luis Fernandez",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      comment: "Buen producto y buen trato. Solo tardó un poco más de lo esperado en responder.",
      date: "Hace 1 mes",
      product: "iPad Mini",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="relative">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl">MG</AvatarFallback>
                  </Avatar>
                  {user.verified && (
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                      Verificado
                    </Badge>
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                      <div className="flex items-center space-x-4 text-gray-600 mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{user.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Miembro desde {user.memberSince}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(user.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold">{user.rating}</span>
                        <span className="text-gray-600">({user.reviews} reseñas)</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-4 sm:mt-0">
                      <Button className="bg-slate-900 hover:bg-slate-800">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enviar mensaje
                      </Button>
                      <Button variant="outline">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Seguir
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{user.stats.totalSales}</div>
                      <div className="text-sm text-gray-600">Ventas totales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{user.stats.activeListings}</div>
                      <div className="text-sm text-gray-600">Productos activos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{user.followers}</div>
                      <div className="text-sm text-gray-600">Seguidores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">{user.following}</div>
                      <div className="text-sm text-gray-600">Siguiendo</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{user.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Tabs */}
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="products">Productos ({userProducts.length})</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas ({reviews.length})</TabsTrigger>
              <TabsTrigger value="activity">Actividad</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {userProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge
                          className={`absolute top-2 left-2 ${
                            product.status === "Activo" ? "bg-green-600" : "bg-gray-600"
                          }`}
                        >
                          {product.status}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {product.title}
                        </h3>
                        <p className="text-2xl font-bold text-slate-900 mb-3">{product.price}</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{product.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>{product.likes}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{review.reviewer[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.reviewer}</h4>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600">• {review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-2">{review.comment}</p>
                          <Badge variant="secondary" className="text-xs">
                            Producto: {review.product}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-gray-500">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-lg font-semibold mb-2">Actividad reciente</h3>
                    <p>La actividad del usuario se mostrará aquí</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
