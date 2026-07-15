import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo & Description */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              FurniShop
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Premium furniture for every room. Discover modern, stylish,
              and comfortable furniture designed to make your home beautiful.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  Categories
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Support
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping
                </Link>
              </li>

              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Email: support@furnishop.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Jaipur, Rajasthan, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FurniShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}