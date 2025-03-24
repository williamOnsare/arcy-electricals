import { Phone, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactCTA() {
  return (
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us Today</h2>
        <p className="max-w-[600px] mx-auto text-blue-100">
          Have questions about our products or need a quote? Reach out to us
          directly or fill out the form below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="What products are you interested in?"
                  rows={4}
                />
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Call Us Directly</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-blue-100">Primary Contact</p>
                <Link
                  href="tel:0733493612"
                  className="text-2xl font-bold hover:text-blue-200 transition-colors"
                >
                  0733493612
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-blue-100">Alternative Contact</p>
                <Link
                  href="tel:0738203822"
                  className="text-2xl font-bold hover:text-blue-200 transition-colors"
                >
                  0738203822
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-blue-100 mb-4">
                Need immediate assistance? Call us now!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="tel:0738203822">
                    <Phone className="mr-2 h-4 w-4" /> Call: 0738203822
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
