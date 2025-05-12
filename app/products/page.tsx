import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="text-3xl font-bold mb-8">Produtu hotu-hotu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
