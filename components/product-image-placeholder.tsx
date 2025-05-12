interface ProductImagePlaceholderProps {
  productName: string
  className?: string
}

export default function ProductImagePlaceholder({ productName, className = "" }: ProductImagePlaceholderProps) {
  return (
    <div className={`bg-gray-800 flex items-center justify-center ${className}`}>
      <div className="text-center p-4">
        <div className="text-xl font-medium text-white">{productName}</div>
      </div>
    </div>
  )
}
