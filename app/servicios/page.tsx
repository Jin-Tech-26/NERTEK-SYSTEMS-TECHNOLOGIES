export default function Servicios() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Servicios</h1>
      <p className="text-foreground/80 max-w-prose mb-10">
        Desarrollamos soluciones de software a la medida, integración de sistemas y
        automatización de procesos para modernizar tu operación.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-primary/40 p-5">
          <h2 className="font-medium mb-2">Desarrollo a medida y personalización</h2>
          <p className="text-sm text-foreground/80">Aplicaciones web con implementación de APIs escalables.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-primary/40 p-5">
          <h2 className="font-medium mb-2">Integración de sistemas de información</h2>
          <p className="text-sm text-foreground/80">Conectamos tus plataformas y datos para una operación fluida.</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-primary/40 p-5">
          <h2 className="font-medium mb-2">Analítica y automatización</h2>
          <p className="text-sm text-foreground/80">Dashboards, BI y flujos automáticos para tomar decisiones inteligentes.</p>
        </div>
      </div>
    </section>
  );
}
