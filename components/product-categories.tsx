import { Lightbulb, Cable, Plug, Flashlight, Power, Gauge } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Bulbs & Lighting",
    icon: Lightbulb,
    description: "LED bulbs, bulkheads, flood lights",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Cables & Wiring",
    icon: Cable,
    description: "Single & twin cables, cable clips",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Switches & Sockets",
    icon: Plug,
    description: "Switches, sockets, lamp holders",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Circuit Protection",
    icon: Power,
    description: "MCBs, circuit breakers, fuses",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Outdoor Lighting",
    icon: Flashlight,
    description: "Flood lights, security lights",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Electrical Accessories",
    icon: Gauge,
    description: "Insulation tape, connectors, tools",
    color: "bg-orange-100 text-orange-600",
  },
]

export default function ProductCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Link href="#contact" key={index}>
          <Card className="h-full transition-all hover:shadow-md hover:border-blue-200">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className={`h-12 w-12 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

