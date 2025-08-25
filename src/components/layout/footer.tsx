import Image from "next/image";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#ag-grid-section" },
      { name: "Template", href: "#template-section" },
      { name: "Pricing", href: "#pricing-section" },
    ],
    company: [
      {
        name: "API Security",
        href: "https://developer.schwab.com/user-guides/get-started/authenticate-with-oauth",
      },
      { name: "FAQ", href: "#faq" },
      { name: "", href: "#" },
    ],
    support: [
      { name: "Privacy Policy", comingSoon: true },
      { name: "Terms of Service", comingSoon: true },
      { name: "", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo/schwabify-logo-1.png"
                alt="Schwabify Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold text-foreground">
                Schwabify
              </span>
            </div>
            <p className="text-muted-foreground">
              Streamlining Schwab API interactions with ease. By trader, for
              traders.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.comingSoon ? (
                    <span className="text-muted-foreground/60 cursor-not-allowed flex items-center gap-2">
                      {link.name}
                      <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground border">
                        Coming Soon
                      </span>
                    </span>
                  ) : link.href ? (
                    <a
                      href={link.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span>{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 SchwabifyAI. All rights reserved.</p>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="text-gray-600">
              © 2025 Schwabify.com All rights reserved.
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Schwabify.com is not affiliated with, endorsed by, or sponsored by
              Charles Schwab or Thinkorswim. All product names, logos, and
              brands are property of their respective owners.
            </div>
          </div>
          <div className="flex space-x-5"></div>
        </div>
      </div>
    </footer>
  );
}
