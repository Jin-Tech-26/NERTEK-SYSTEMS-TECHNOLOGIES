import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import MainNav from "./components/MainNav";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Nertek Systems Technologies",
    template: "%s | Nertek Systems Technologies",
  },
  description: "Desarrollo de software a la medida, sistemas de información empresariales e integración tecnológica.",
  keywords: [
    "desarrollo de software",
    "sistemas de información",
    "soluciones tecnológicas",
    "integración de sistemas",
    "aplicaciones web",
  ],
  authors: [{ name: "Nertek Systems Technologies" }],
  icons: {
    icon: "/images/logo_favicon.ico",
    shortcut: "/images/logo_favicon.ico",
    apple: "/images/logo_favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Nertek Systems Technologies",
    description:
      "Desarrollo de software a la medida y soluciones tecnológicas para tu negocio.",
    siteName: "Nertek Systems Technologies",
    images: [
      { url: "/images/logo1.png", width: 512, height: 512, alt: "Nertek" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nertek Systems Technologies",
    description:
      "Desarrollo de software a la medida y soluciones tecnológicas para tu negocio.",
    images: ["/images/logo1.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-background text-foreground">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-white/10 bg-primary font-aptos-slab">
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/images/logo1.png" alt="Nertek Systems Technologies" width={36} height={36} className="h-9 w-9 object-contain" />
                <span className="text-sm uppercase tracking-widest text-foreground/80">Nertek Systems Technologies</span>
              </Link>
              <MainNav />
            </div>
          </header>
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <footer className="border-t border-white/10 bg-primary-600 font-aptos-slab">
            <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-foreground/70 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span>© {new Date().getFullYear()} Nertek Systems Technologies</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a href="#" className="hover:text-accent-500 transition-colors">Aviso de privacidad</a>
                  <a href="#" className="hover:text-accent-500 transition-colors">Política de cookies</a>
                  <a href="#" className="hover:text-accent-500 transition-colors">Declaración de accesibilidad</a>
                  <a href="#" className="hover:text-accent-500 transition-colors">Política de seguridad</a>
                  <a href="#" className="hover:text-accent-500 transition-colors">Personalizar cookies</a>
                </div>
                <span className="whitespace-nowrap">Desarrollo de software, sistemas de información y tecnologías especializadas.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
