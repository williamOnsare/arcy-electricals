import { Zap, MapPin, Phone, Clock, ShoppingBag, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCategories from "@/components/product-categories";
import FeaturedProducts from "@/components/featured-products";
import ContactCTA from "@/components/contact-cta";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-blue-600 text-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6" />
            <span className="text-xl font-bold">ARCY ELECTRICALS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#products"
              className="text-sm font-medium hover:text-blue-100"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-blue-100"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-100"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="tel:0733493612"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-blue-100"
            >
              <Phone className="h-4 w-4" />
              <span>0733493612</span>
            </Link>
            <Button
              asChild
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white py-12 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/commercial-lighting.JPG"
              alt="Electrical background"
              fill
              className="object-cover h-[600] w-[1200]"
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Quality Electrical Products <br className="hidden md:inline" />
              at Wholesale Prices
            </h1>
            <p className="max-w-[600px] text-blue-100 md:text-xl">
              Your trusted supplier of electrical components in Nakuru, Kenya.
              We offer a wide range of high-quality products at competitive
              prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Link href="tel:0733493612">
                  <Phone className="mr-2 h-4 w-4" /> Call: 0733493612
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 border-white hover:bg-blue-50"
              >
                <Link href="#products">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Browse Products
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-blue-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wholesale Prices</h3>
                <p className="text-gray-600">
                  Get the best prices on bulk purchases for all your electrical
                  needs
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                <p className="text-gray-600">
                  We stock only reliable brands and high-quality electrical
                  components
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Advice</h3>
                <p className="text-gray-600">
                  Our knowledgeable staff can help you find the right products
                  for your needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="products" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Product Categories
            </h2>
            <ProductCategories />
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Products
            </h2>
            <FeaturedProducts />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  About ARCY ELECTRICALS
                </h2>
                <p className="text-gray-600 mb-6">
                  Located in Nakuru, Kenya, ARCY ELECTRICALS is your trusted
                  partner for all electrical components and supplies. We pride
                  ourselves on offering quality products at competitive
                  wholesale prices.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're an electrical contractor, builder, or
                  homeowner, we have the products you need to complete your
                  projects successfully.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">
                        KERIO VALLEY LODGE, GUSII ROAD, NAKURU, KENYA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Contact Numbers</h4>
                      <p className="text-gray-600">0733493612 / 0738203822</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/futuristic-electronics-store.jpg"
                  alt="ARCY ELECTRICALS Shop"
                  fill
                  className="object-cover w-[600] h-[400]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <ContactCTA />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6" />
                <span className="text-xl font-bold text-white">
                  ARCY ELECTRICALS
                </span>
              </div>
              <p className="text-sm">
                Your trusted supplier of quality electrical products in Nakuru,
                Kenya.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:0733493612" className="hover:text-white">
                    0733493612
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:0738203822" className="hover:text-white">
                    0738203822
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>KERIO VALLEY LODGE, GUSII ROAD, NAKURU</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} ARCY ELECTRICALS. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
