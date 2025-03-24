import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import PriceList from "@/components/price-list"

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">ARCY ELECTRICALS Product List</h1>
      <p className="text-gray-600 mb-8">
        Below is our current wholesale price list. For bulk orders or special inquiries, please contact us directly at
        0733493612 or 0738203822.
      </p>

      <PriceList />

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Need more information or ready to place an order?</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="tel:0733493612">
              <Phone className="mr-2 h-4 w-4" /> Call: 0733493612
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link href="tel:0738203822">
              <Phone className="mr-2 h-4 w-4" /> Call: 0738203822
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

