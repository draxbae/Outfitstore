import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  // Nomor WhatsApp (tanpa tanda + dan spasi)
  const whatsappNumber = "6281234567890" // Ganti dengan nomor WhatsApp Anda
  const instagramUsername = "outfit_store" // Ganti dengan username Instagram Anda

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Outfit Store</h3>
            <p className="text-sm text-muted-foreground">
              Loja roupa online ne'ebé di'ak liu ho kolesaun sira ne'ebé foun liu no foun liu.
            </p>
            <div className="flex space-x-4">
              <Link
                href={`https://instagram.com/${instagramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold">Kompras</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  Produtu sira
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold">Kontaktu</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Jl. Pakaian Indah No. 123, Jakarta</li>
              <li className="text-muted-foreground">info@outfitstore.com</li>
              <li className="text-muted-foreground">
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  +{whatsappNumber.replace(/(\d{2})(\d{3})(\d{4})(\d{4})/, "$1 $2 $3 $4")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Outfit Store. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
