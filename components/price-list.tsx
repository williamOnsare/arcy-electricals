import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const products = [
  { category: "BULBS", name: "LED BULBS 5WATTS", pack: "10PC/PK", brand: "KEHONG", price: 36 },
  { category: "BULBS", name: "LED BULBS 7WATTS", pack: "10PC/PK", brand: "KEHONG", price: 42 },
  { category: "BULBS", name: "LED BULBS 9WATTS", pack: "10PC/PK", brand: "KEHONG", price: 48 },
  { category: "BULBS", name: "LED BULBS 12WATTS", pack: "10PC/PK", brand: "KEHONG", price: 52 },
  { category: "BULKHEADS", name: "LED BULKHEAD ROUND", pack: "5PC/PK", brand: "HHOME", price: 220 },
  { category: "BULKHEADS", name: "LED BULKHEAD OVAL", pack: "5PC/PK", brand: "HHOME", price: 220 },
  { category: "CABLE CLIPS", name: "CABLE CLIPS-5*9MM", pack: "10PC/PK", brand: "", price: 45 },
  { category: "CABLE CLIPS", name: "CABLE CLIPS-6*10MM", pack: "10PC/PK", brand: "", price: 48 },
  { category: "INSULATION TAPE", name: "INSULATION TAPE -10YDS", pack: "10PC/PK", brand: "TLAC", price: 34 },
  { category: "INSULATION TAPE", name: "INSULATION TAPE -20YDS", pack: "10PC/PK", brand: "TLAC", price: 66 },
  { category: "CIRCUIT BREAKERS", name: "MCB'S 6AMPS", pack: "12PC/PK", brand: "ANDELI", price: 130 },
  { category: "CIRCUIT BREAKERS", name: "MCB'S 32AMPS", pack: "12PC/PK", brand: "ANDELI", price: 130 },
  { category: "CIRCUIT BREAKERS", name: "MCB'S 20AMPS", pack: "12PC/PK", brand: "ANDELI", price: 130 },
  { category: "CIRCUIT BREAKERS", name: "2P 63A", pack: "6PC/PK", brand: "ANDELI", price: 250 },
  { category: "CABLES", name: "1.5MM2 Singles", pack: "ROLL", brand: "", price: 1650 },
  { category: "CABLES", name: "2.5MM2 Singles", pack: "ROLL", brand: "", price: 2000 },
  { category: "CABLES", name: "1.5MM2 Twin with earth", pack: "ROLL", brand: "", price: 5000 },
  { category: "CABLES", name: "2.5MM2 Twin with earth", pack: "ROLL", brand: "", price: 7700 },
  { category: "LED FLOOD LIGHT", name: "LED FLOOD LIGHT 20W", pack: "5PC/PK", brand: "HHOME", price: 360 },
  { category: "LED FLOOD LIGHT", name: "LED FLOOD LIGHT 30W", pack: "5PC/PK", brand: "Alux", price: 580 },
  { category: "LED FLOOD LIGHT", name: "LED FLOOD LIGHT 50W", pack: "5PC/PK", brand: "Jsort", price: 600 },
  { category: "LED FLOOD LIGHT", name: "LED FLOOD LIGHT 200W", pack: "1PC/PK", brand: "HHOME", price: 2596 },
  { category: "SWITCHES", name: "1 GANG 2WAYS", pack: "10PC/PK", brand: "ROYAL", price: 54 },
  { category: "SWITCHES", name: "2 GANG 2WAYS", pack: "10PC/PK", brand: "ROYAL", price: 66 },
  { category: "SWITCHES", name: "3GANG 2WAYS", pack: "10PC/PK", brand: "ROYAL", price: 90 },
  { category: "SOCKETS", name: "SINGLE SOCKET 13A", pack: "10PC/PK", brand: "ROYAL", price: 78 },
  { category: "SOCKETS", name: "TWIN SOCKET 13A", pack: "10PC/PK", brand: "ROYAL", price: 168 },
  { category: "LAMP HOLDERS", name: "STRAIGHT HOLDER", pack: "10PC/PK", brand: "ASTRA", price: 54 },
  { category: "LAMP HOLDERS", name: "STRAIGHT HOLDER", pack: "10PC/PK", brand: "DP", price: 33 },
  { category: "LAMP HOLDERS", name: "STRAIGHT HOLDER", pack: "10PC/PK", brand: "UK", price: 30 },
]

export default function PriceList() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Inner Pack</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead className="text-right">Wholesale Price (KSh)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{product.category}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.pack}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

