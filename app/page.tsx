import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import ClientStoriesCarousel from "./components/ClientStoriesCarousel";

export default function Home() {
  return (
    <section className="relative isolate bg-black">
      {/* HERO con carrusel tipo tcs.com */}
      <HeroCarousel />

      {/* SERVICIOS destacados */}
      <section className="border-t border-white/10 bg-primary/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Transforme su negocio con tecnologías avanzadas</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: "IA y datos", desc: "Análisis y modelos para decisiones inteligentes." },
              { title: "Nube", desc: "Arquitecturas modernas, seguras y escalables." },
              { title: "Operaciones", desc: "Automatización y eficiencia de procesos." },
              { title: "Consultoría", desc: "Estrategia tecnológica orientada a valor." },
            ].map((s, i) => (
              <a key={i} href="/servicios" className="group rounded-xl overflow-hidden border border-white/10 bg-primary/40 hover:bg-primary/30 transition">
                <div className="h-40 w-full bg-black/40 flex items-center justify-center">
                  {i === 0 ? (
                    <Image
                      src="/businesstech/ia.png"
                      alt="Soluciones de IA y datos"
                      width={400}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : i === 1 ? (
                    <Image
                      src="/businesstech/cloud.png"
                      alt="Soluciones en la nube"
                      width={400}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : i === 2 ? (
                    <Image
                      src="/businesstech/operations.png"
                      alt="Operaciones empresariales"
                      width={400}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : i === 3 ? (
                    <Image
                      src="/businesstech/itconsultancy.png"
                      alt="Consultoría de TI"
                      width={400}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-foreground/60 text-sm">Área para imagen {i + 1}</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1 group-hover:text-accent-500 transition">{s.title}</h3>
                  <p className="text-sm text-foreground/70">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIAS DE CLIENTES */}
      <ClientStoriesCarousel />

      {/* INDUSTRIAS */}
      <section className="border-t border-white/10 bg-primary/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Seleccione su industria. Descubra nuestro impacto.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Banca",
              "Comunicaciones y medios",
              "Educación",
              "Salud",
              "Seguros",
              "Fabricación",
              "Retail",
              "Mercado de capitales",
              "Bienes de consumo y distribución",
              "Energía y servicios públicos",
              "Alta tecnología",
              "Logística",
            ].map((name, i) => (
              <a key={i} href="/servicios" className="flex items-center justify-between rounded-lg border border-white/10 bg-primary/40 px-4 py-3 hover:bg-primary/30 transition">
                <span>{name}</span>
                <span className="text-foreground/50">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Síguenos para conocer las últimas actualizaciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            {[
              { label: "Facebook", href: "https://www.facebook.com/nerteksystemstechnologies" },
              { label: "X", href: "#" },
              { label: "YouTube", href: "#" },
              { label: "Instagram", href: "https://www.instagram.com/nerteksystemstechnologies" },
              { label: "LinkedIn", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href === "#" ? undefined : "_blank"}
                rel={item.href === "#" ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-primary/40 px-4 py-3 hover:bg-primary/30 transition"
              >
                <div className="h-7 w-7 rounded bg-white/10 flex items-center justify-center text-[11px]">
                  {item.label === "Facebook" && (
                    <span className="font-semibold">f</span>
                  )}
                  {item.label === "X" && (
                    <span className="font-semibold">X</span>
                  )}
                  {item.label === "YouTube" && (
                    <span className="font-semibold">▶</span>
                  )}
                  {item.label === "Instagram" && (
                    <span className="font-semibold">◎</span>
                  )}
                  {item.label === "LinkedIn" && (
                    <span className="font-semibold">in</span>
                  )}
                </div>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
