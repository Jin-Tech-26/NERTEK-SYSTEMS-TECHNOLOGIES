import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "nerteksystems@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body.name ?? "").toString();
    const email = (body.email ?? "").toString();
    const message = (body.message ?? "").toString();

    if (!email || !message) {
      return NextResponse.json(
        { ok: false, error: "Correo y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? CONTACT_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje desde el sitio web de ${name || "Nertek"}`,
      text: message,
      html: `<p><strong>Nombre:</strong> ${name || "(no especificado)"}</p>
             <p><strong>Correo:</strong> ${email}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando correo de contacto", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje. Intenta más tarde." },
      { status: 500 }
    );
  }
}
