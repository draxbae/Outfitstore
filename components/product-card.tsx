import Link from "next/link"
import type { Product } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ProductImagePlaceholder from "./product-image-placeholder"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md border-gray-800">
        <div className="relative aspect-square overflow-hidden bg-gray-800">
          <ProductImagePlaceholder productName={product.name} className="w-full h-full absolute inset-0" />
          {product.isNew && <Badge className="absolute top-2 right-2 bg-green-500">Foun</Badge>}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="font-bold">${product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
