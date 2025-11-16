"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  title: string;
  description?: string;
  image: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

const DURATION_MS = 6000; // 6s por slide
const TICK_MS = 100; // avance de barra

export default function HeroCarousel() {
  // Puedes reemplazar las imágenes por las reales en /public/images
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Arquitectura tecnológica y ciudades inteligentes",
        description:
          "Diseñamos arquitecturas de software robustas para ecosistemas urbanos conectados y seguros.",
        image: "/images/carousels/architecture.png",
        ctaPrimary: { label: "Diseñar mi plataforma", href: "/contacto" },
        ctaSecondary: { label: "Ver arquitecturas", href: "/servicios" },
      },
      {
        title: "Ecosistemas empresariales y consorcios digitales",
        description:
          "Integramos aplicaciones, datos y procesos para habilitar nuevos modelos de negocio entre organizaciones.",
        image: "/images/carousels/consorcio.png",
        ctaPrimary: { label: "Impulsar mi consorcio", href: "/servicios" },
      },
      {
        title: "Museos y espacios culturales inteligentes",
        description:
          "Creamos experiencias digitales para instituciones culturales, galerías y museos contemporáneos.",
        image: "/images/carousels/contemporaryartmuseum.png",
        ctaPrimary: { label: "Explorar soluciones para cultura", href: "/servicios" },
      },
      {
        title: "Operaciones y mantenimiento conectados",
        description:
          "Digitalizamos talleres y operaciones de campo con sistemas de seguimiento, órdenes de trabajo y analítica.",
        image: "/images/carousels/mechanicworkshop.png",
        ctaPrimary: { label: "Optimizar mis operaciones", href: "/contacto" },
      },
      {
        title: "Experiencias digitales para restaurantes y retail",
        description:
          "Implementamos plataformas para reservas, pedidos, lealtad y analítica en puntos de venta físicos.",
        image: "/images/carousels/restaurante.png",
        ctaPrimary: { label: "Modernizar mi negocio", href: "/contacto" },
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    setIndex((i) => (i + 1) % slides.length);
    setProgress(0);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }
    timerRef.current = window.setInterval(() => {
      setProgress((p) => {
        const np = p + (TICK_MS / DURATION_MS) * 100;
        if (np >= 100) {
          // avanza slide y reinicia progreso
          setIndex((i) => (i + 1) % slides.length);
          return 0;
        }
        return np;
      });
    }, TICK_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  // Actualiza la variable CSS de la barra de progreso sin estilos inline en JSX
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.setProperty("--progress-width", `${progress}%`);
    }
  }, [progress]);

  return (
    <div className="relative mx-auto max-w-6xl px-4 pt-6 md:pt-10 pb-6 mb-6 select-none">
      {/* Contenedor sin peeking lateral */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-primary/30">
          <div className="relative h-[400px] md:h-[480px]">
            {slides.map((s, i) => (
              <div
                key={`${i}-${i === index ? "active" : "inactive"}`}
                className={`absolute inset-0 ${
                  i === index
                    ? "opacity-100 animate-slide-in-right"
                    : "opacity-0"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  priority={i === index}
                />
                {/* Vignette para legibilidad (capa casi sólida para máximo contraste) */}
                <div className="absolute inset-0 bg-black/80" />

                {/* Título sobresaliendo del carrusel (bajado para evitar corte) */}
                <div className="absolute left-6 md:left-10 top-2 md:top-3 z-20 animate-slide-in-right-delay">
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow-md">
                    {s.title}
                  </h2>
                </div>

                {/* Subtítulo y CTAs en la parte inferior izquierda */}
                <div className="absolute left-6 md:left-10 bottom-12 md:bottom-14 z-20 animate-slide-in-right-delay">
                  <div className="max-w-2xl space-y-3">
                    {s.description && (
                      <p className="text-foreground/85 text-base md:text-lg">
                        {s.description}
                      </p>
                    )}
                    <div className="flex gap-3">
                      {s.ctaPrimary && (
                        <a
                          href={s.ctaPrimary.href}
                          className="inline-flex items-center rounded-md bg-accent-500 px-4 py-2 text-sm font-medium text-white hover:brightness-110 transition"
                        >
                          {s.ctaPrimary.label}
                        </a>
                      )}
                      {s.ctaSecondary && (
                        <a
                          href={s.ctaSecondary.href}
                          className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/5 transition"
                        >
                          {s.ctaSecondary.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Se eliminan las bandas laterales para maximizar visibilidad del contenido */}

            {/* Controles en esquina inferior derecha, sin bordes */}
            <div className="absolute right-3 bottom-3 flex flex-col items-center gap-2 z-20">
              <button
                onClick={togglePlay}
                className="h-9 w-9 rounded-full bg-black/70 text-white hover:bg-black/60 shadow"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <span className="grid h-full w-full place-items-center">❚❚</span>
                ) : (
                  <span className="grid h-full w-full place-items-center">▶</span>
                )}
              </button>
              <button
                onClick={next}
                className="h-9 w-9 rounded-full bg-black/70 text-white hover:bg-black/60 shadow"
                aria-label="Siguiente"
              >
                <span className="grid h-full w-full place-items-center">→</span>
              </button>
              <button
                onClick={prev}
                className="h-9 w-9 rounded-full bg-black/70 text-white hover:bg-black/60 shadow"
                aria-label="Anterior"
              >
                <span className="grid h-full w-full place-items-center">←</span>
              </button>
            </div>

            {/* Barra de progreso */}
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-white/10 z-10">
              <div
                ref={progressRef}
                className="h-full bg-accent-500 transition-[width] duration-100 w-(--progress-width)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
