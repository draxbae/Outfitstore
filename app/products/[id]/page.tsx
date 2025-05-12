import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProductImagePlaceholder from "@/components/product-image-placeholder"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Nomor WhatsApp (tanpa tanda + dan spasi)
  const whatsappNumber = "6281234567890" // Ganti dengan nomor WhatsApp Anda

  // Membuat pesan untuk WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${product.name} (${product.id}) dengan harga $${product.price.toFixed(2)}. Apakah masih tersedia?`,
  )

  return (
    <div className="container px-4 py-12 mx-auto">
      <Link href="/products" className="flex items-center text-sm mb-6 text-gray-500 hover:text-gray-900">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Fila fali ba Produtu sira
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <div className="aspect-square relative">
            <ProductImagePlaceholder productName={product.name} className="w-full h-full" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <Badge variant="outline" className="mr-2">
                {product.category}
              </Badge>
              {product.isNew && <Badge className="bg-green-500">Foun</Badge>}
            </div>
          </div>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          <div>
            <h3 className="text-lg font-medium mb-2">Deskrisaun</h3>
            <p className="text-gray-400">{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Medida</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button key={size} variant="outline" size="sm">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <Button size="lg" className="w-full bg-green-600 hover:bg-green-700" asChild>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pesan via WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
