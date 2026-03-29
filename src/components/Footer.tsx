import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Emaculata</h3>
            <p className="text-sm leading-relaxed">
              Engineers of a sustainable future.
              <br />
              Climate risk consulting
              <br />
              for businesses across Australia and beyond.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-forest-light transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-forest-light transition-colors">
                  Climate
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-forest-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-forest-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Emaculata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
