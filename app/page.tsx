import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  // Menampilkan hanya 4 produk di halaman utama
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Kolesaun roupa foun
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Deskobre estilu sira ne'ebé foun liu ho ami nia kolesaun roupa eskluzivu. Kualidade di'ak liu ho folin
                ne'ebé baratu.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Kompras agora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Produtu destakadu</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Ami nia kolesaun di'ak liu ne'ebé hili espesialmente ba ita-boot
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                Haree Produtu Hotu-hotu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Diskon 10% ba Kompras Dahuluk
              </h2>
              <p className="text-gray-400 md:text-xl">
                Hetan diskon espesial ba ita-boot nia kompras dahuluk.
                <span className="font-bold">FIRSTBUY</span> bainhira checkout.
              </p>
              <Button asChild size="lg">
                <Link href="/products">Kompras agora</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-800 aspect-video flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-2xl font-medium text-white">Promo Banner</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
