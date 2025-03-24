import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const featuredProducts = [
  {
    name: "LED Bulbs 9WATTS",
    brand: "KEHONG",
    price: "KSh 48",
    pack: "10PC/PK",
    image: "/led-bulb-9w_500.jpg",
  },
  {
    name: "LED Flood Light 30W",
    brand: "Alux",
    price: "KSh 580",
    pack: "5PC/PK",
    image: "/led-flood-light-30W.webp",
  },
  {
    name: "MCB's 32AMPS",
    brand: "ANDELI",
    price: "KSh 130",
    pack: "12PC/PK",
    image: "/Andeli-C32-Circuit-Breaker-MCB.webp",
  },
  {
    name: "Twin Socket 13A",
    brand: "ROYAL",
    price: "KSh 168",
    pack: "10PC/PK",
    image: "/Royal-Twin-Socket-13A.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-md hover:border-blue-200">
            <div className="relative h-48 bg-gray-100">
              <Image src={product.image || "/placeholder.svg?height=200&width=200"} alt={product.name} fill className="object-contain p-4" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
              <p className="text-sm text-gray-500 mb-3">Pack: {product.pack}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">{product.price}</span>
                <Button asChild variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  <Link href="#contact">Inquire</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Looking for specific products or bulk orders?</p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="#contact">
            <Phone className="mr-2 h-4 w-4" /> Contact Us for Pricing
          </Link>
        </Button>
      </div>
    </div>
  )
}

