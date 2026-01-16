import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo.png" alt="TravelKaro" width={180} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-blue-100 mb-4">
              TravelKaro is your trusted partner for Umrah journeys, providing seamless travel experiences that are both
              memorable and spiritually fulfilling.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-200 transition duration-300">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 transition duration-300">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 transition duration-300">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-200 transition duration-300">
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-blue-100 hover:text-white transition duration-300">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition duration-300">
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition duration-300">
                  Visa Processing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition duration-300">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition duration-300">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition duration-300">
                  Guided Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">123 Travel Street, Dubai, UAE</li>
              <li className="text-blue-100">Phone: +1 (234) 567-8900</li>
              <li className="text-blue-100">Email: info@travelkaro.com</li>
              <li className="text-blue-100">WhatsApp: +1 (234) 567-8900</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} TravelKaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
