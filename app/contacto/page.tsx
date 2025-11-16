"use client";

import { FormEvent, useState } from "react";

export default function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("No se pudo enviar el mensaje. Intenta de nuevo más tarde.");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Contacto</h1>
      <p className="text-foreground/80 max-w-prose mb-2">Envíanos un mensaje para cualquier tipo de consulta o planeamiento y te responderemos a la brevedad.</p>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg">
        <input
          className="rounded-md border border-white/15 bg-primary/40 px-3 py-2 outline-none"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="rounded-md border border-white/15 bg-primary/40 px-3 py-2 outline-none"
          placeholder="Correo"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="rounded-md border border-white/15 bg-primary/40 px-3 py-2 outline-none"
          placeholder="Mensaje"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-accent-500 px-4 py-2 text-sm font-medium text-white hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>
        {status === "success" && (
          <p className="text-green-400 text-sm">Tu mensaje se envió correctamente.</p>
        )}
        {status === "error" && error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
      </form>
    </section>
  );
}
