"use client";

import Image from "next/image";
import { useRef } from "react";

const items = Array.from({ length: 8 }).map((_, i) => ({ index: i }));

export default function ClientStoriesCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const container = containerRef.current;
    if (!container) return;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.clientWidth ?? 340;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Historias de clientes</h2>
          <div className="flex items-center gap-4 text-lg md:text-2xl text-foreground/80">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="px-1 md:px-2 leading-none hover:text-accent-500 transition-colors"
              aria-label="Ver historias anteriores"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="px-1 md:px-2 leading-none hover:text-accent-500 transition-colors"
              aria-label="Ver más historias"
            >
              →
            </button>
          </div>
        </div>
        <div className="relative">
          <div
            ref={containerRef}
            className="flex items-stretch gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
          >
            {items.map(({ index: i }) => (
              <article
                key={i}
                className="snap-start min-w-[280px] md:min-w-[340px] max-w-[340px] rounded-xl overflow-hidden border border-white/10 bg-primary/40 flex flex-col"
              >
                <div className="h-44 w-full bg-black/40 flex items-center justify-center">
                  {i === 0 ? (
                    <Image
                      src="/images/projects/grupoacalg.PNG"
                      alt="Proyecto web Grupo ACALG"
                      width={480}
                      height={260}
                      className="h-full w-full object-cover"
                    />
                  ) : i === 1 ? (
                    <Image
                      src="/images/projects/capillaselroble.PNG"
                      alt="Proyecto web Capillas El Roble"
                      width={480}
                      height={260}
                      className="h-full w-full object-cover"
                    />
                  ) : i === 2 ? (
                    <Image
                      src="/images/projects/funeralesycremaciones.PNG"
                      alt="Proyecto web Funerales y Cremaciones"
                      width={480}
                      height={260}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-foreground/60 text-sm">Placeholder imagen {i + 1}</span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-medium mb-1">
                    {i === 0
                      ? "Grupo ACALG"
                      : i === 1
                        ? "Capillas El Roble"
                        : i === 2
                          ? "Funerales y Cremaciones"
                          : `Proyecto ${i + 1}`}
                  </h3>
                  <p className="text-sm text-foreground/70 flex-1">
                    {i === 0
                      ? "Desarrollo y despliegue de sitio web empresarial."
                      : i === 1
                        ? "Desarrollo y despliegue de sitio web para planes y aseguramientos funerarios."
                        : i === 2
                          ? "Desarrollo y despliegue de sitio web para servicios funerarios."
                          : "Breve descripción del impacto logrado."}
                  </p>
                  <div className="mt-3 text-xs text-accent-500">LEER MÁS →</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
