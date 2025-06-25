"use client"

import type React from "react"

import { Upload, X, MapPin, DollarSign, FileText, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function PublishPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const categories = [
    "Tecnología",
    "Hogar y Jardín",
    "Deportes y Fitness",
    "Vehículos",
    "Moda y Belleza",
    "Gaming",
    "Libros y Música",
    "Mascotas",
    "Bebés y Niños",
    "Otros",
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // Simular carga de imágenes
      const newImages = Array.from(files).map(() => "/placeholder.svg?height=150&width=150")
      setUploadedImages((prev) => [...prev, ...newImages].slice(0, 8))
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Publicar producto</h1>
            <p className="text-gray-600">Completa la información para publicar tu producto</p>
          </div>

          <form className="space-y-8">
            {/* Images */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Fotos del producto
                </CardTitle>
                <CardDescription>Sube hasta 8 fotos. La primera será la imagen principal.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Producto ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      {index === 0 && <Badge className="absolute bottom-2 left-2 bg-blue-600">Principal</Badge>}
                    </div>
                  ))}

                  {uploadedImages.length < 8 && (
                    <label className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                      <Upload className="w-6 h-6 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Subir foto</span>
                      <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  )}
                </div>

                <p className="text-sm text-gray-500">
                  Formatos aceptados: JPG, PNG, WebP. Tamaño máximo: 5MB por imagen.
                </p>
              </CardContent>
            </Card>

            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Información básica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Título del producto *</Label>
                  <Input id="title" placeholder="Ej: iPhone 14 Pro Max 256GB - Como nuevo" required />
                  <p className="text-sm text-gray-500">
                    Sé específico y descriptivo. Incluye marca, modelo y características principales.
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Descripción *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe tu producto: estado, características, motivo de venta, etc."
                    rows={6}
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Incluye todos los detalles importantes. Una buena descripción genera más confianza.
                  </p>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Price and Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Precio y ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Price */}
                <div className="space-y-2">
                  <Label htmlFor="price">Precio *</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <Input id="price" type="number" placeholder="0" className="pl-8" required />
                  </div>
                  <p className="text-sm text-gray-500">Investiga precios similares para ser competitivo.</p>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="location" placeholder="Ciudad, Provincia" className="pl-10" required />
                  </div>
                </div>

                {/* Condition */}
                <div className="space-y-2">
                  <Label htmlFor="condition">Estado del producto *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nuevo">Nuevo</SelectItem>
                      <SelectItem value="como-nuevo">Como nuevo</SelectItem>
                      <SelectItem value="muy-bueno">Muy bueno</SelectItem>
                      <SelectItem value="bueno">Bueno</SelectItem>
                      <SelectItem value="regular">Regular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>Los compradores podrán contactarte a través de la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Consejos para una venta exitosa:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Responde rápido a los mensajes</li>
                    <li>• Sé honesto sobre el estado del producto</li>
                    <li>• Propón lugares seguros para el encuentro</li>
                    <li>• Mantén un trato cordial y profesional</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="flex-1 bg-slate-900 hover:bg-slate-800" size="lg">
                Publicar producto
              </Button>
              <Button type="button" variant="outline" className="flex-1" size="lg">
                Guardar borrador
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Al publicar, aceptas nuestros{" "}
                <a href="/terminos" className="text-blue-600 hover:text-blue-800">
                  términos de uso
                </a>{" "}
                y{" "}
                <a href="/politicas" className="text-blue-600 hover:text-blue-800">
                  políticas de publicación
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
