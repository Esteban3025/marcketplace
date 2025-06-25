import { MessageSquare, Users, TrendingUp, Plus, Search, Filter, Pin, Clock, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ForumPage() {
  const categories = [
    {
      name: "Ayuda",
      description: "Preguntas y respuestas sobre compras y ventas",
      topics: 156,
      posts: 1240,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Tips",
      description: "Consejos para comprar y vender mejor",
      topics: 89,
      posts: 567,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Experiencias",
      description: "Comparte tus historias de compra y venta",
      topics: 234,
      posts: 1890,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Novedades",
      description: "Actualizaciones y noticias de la plataforma",
      topics: 45,
      posts: 234,
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const pinnedTopics = [
    {
      id: 1,
      title: "Bienvenidos al foro de PuestoFlex",
      author: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Novedades",
      replies: 45,
      likes: 123,
      lastActivity: "Hace 2 horas",
      pinned: true,
    },
    {
      id: 2,
      title: "Reglas de la comunidad - Léelas antes de participar",
      author: "Moderador",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Novedades",
      replies: 12,
      likes: 89,
      lastActivity: "Hace 1 día",
      pinned: true,
    },
  ]

  const recentTopics = [
    {
      id: 3,
      title: "¿Cómo evitar estafas al comprar online?",
      author: "CarlosSeguro",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Ayuda",
      replies: 23,
      likes: 45,
      lastActivity: "Hace 15 min",
      pinned: false,
    },
    {
      id: 4,
      title: "Mi experiencia vendiendo mi auto en PuestoFlex",
      author: "AutosJuan",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Experiencias",
      replies: 18,
      likes: 67,
      lastActivity: "Hace 1 hora",
      pinned: false,
    },
    {
      id: 5,
      title: "Tips para tomar mejores fotos de productos",
      author: "FotoExperto",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Tips",
      replies: 34,
      likes: 89,
      lastActivity: "Hace 2 horas",
      pinned: false,
    },
    {
      id: 6,
      title: "¿Cuál es el mejor horario para publicar?",
      author: "VendedorPro",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Tips",
      replies: 12,
      likes: 28,
      lastActivity: "Hace 3 horas",
      pinned: false,
    },
    {
      id: 7,
      title: "Problema con un comprador que no responde",
      author: "MariaVende",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Ayuda",
      replies: 8,
      likes: 15,
      lastActivity: "Hace 4 horas",
      pinned: false,
    },
  ]

  const topContributors = [
    {
      name: "CarlosSeguro",
      avatar: "/placeholder.svg?height=40&width=40",
      posts: 234,
      likes: 1567,
    },
    {
      name: "FotoExperto",
      avatar: "/placeholder.svg?height=40&width=40",
      posts: 189,
      likes: 1234,
    },
    {
      name: "VendedorPro",
      avatar: "/placeholder.svg?height=40&width=40",
      posts: 156,
      likes: 987,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Foro de la comunidad</h1>
            <p className="text-gray-600">Comparte experiencias, obtén ayuda y conecta con otros usuarios</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-slate-900 hover:bg-slate-800">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo tema
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Buscar en el foro..." className="pl-10" />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Categorías</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {categories.map((category) => (
                  <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={category.color}>{category.name}</Badge>
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{category.topics} temas</span>
                        <span>{category.posts} mensajes</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div>
              <Tabs defaultValue="recent" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recent">Recientes</TabsTrigger>
                  <TabsTrigger value="popular">Populares</TabsTrigger>
                  <TabsTrigger value="unanswered">Sin responder</TabsTrigger>
                </TabsList>

                <TabsContent value="recent" className="space-y-4">
                  {/* Pinned Topics */}
                  {pinnedTopics.map((topic) => (
                    <Card key={topic.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={topic.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{topic.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <Pin className="w-4 h-4 text-blue-600" />
                              <Badge variant="secondary">{topic.category}</Badge>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 cursor-pointer">
                              {topic.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center space-x-4">
                                <span>Por {topic.author}</span>
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="w-4 h-4" />
                                  <span>{topic.replies}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <ThumbsUp className="w-4 h-4" />
                                  <span>{topic.likes}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{topic.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Regular Topics */}
                  {recentTopics.map((topic) => (
                    <Card key={topic.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={topic.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{topic.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="secondary">{topic.category}</Badge>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 cursor-pointer">
                              {topic.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center space-x-4">
                                <span>Por {topic.author}</span>
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="w-4 h-4" />
                                  <span>{topic.replies}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <ThumbsUp className="w-4 h-4" />
                                  <span>{topic.likes}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{topic.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="popular">
                  <div className="text-center py-8 text-gray-500">Contenido de temas populares...</div>
                </TabsContent>

                <TabsContent value="unanswered">
                  <div className="text-center py-8 text-gray-500">Contenido de temas sin responder...</div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Forum Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Estadísticas del foro</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temas totales</span>
                    <span className="font-semibold">524</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mensajes</span>
                    <span className="font-semibold">3,931</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Miembros activos</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nuevos hoy</span>
                    <span className="font-semibold">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Top contribuidores</h3>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-slate-900 text-white text-xs font-bold rounded-full">
                        {index + 1}
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={contributor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <p className="text-xs text-gray-600">
                          {contributor.posts} posts • {contributor.likes} likes
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Acciones rápidas</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo tema
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Ver miembros
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Temas trending
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
