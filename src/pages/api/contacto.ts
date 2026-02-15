/*

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { nombre, institucion, email, servicio, mensaje } = await request.json();

    if (!nombre || !email || !servicio) {
      return new Response(
        JSON.stringify({ error: "Campos obligatorios faltantes" }),
        { status: 400 }
      );
    }

    // 📩 CORREO PARA TI
    await resend.emails.send({
      from: 'RobotiCorp <onboarding@resend.dev>',
      to: 'roboticorp.dev@gmail.com',
      subject: `Nuevo contacto - ${servicio}`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Institución:</strong> ${institucion || "No especificada"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje || "Sin mensaje adicional"}</p>
      `
    });

    // 🤖 AUTO-RESPUESTA AL CLIENTE
    await resend.emails.send({
      from: 'RobotiCorp <onboarding@resend.dev>',
      to: email,
      subject: "🤖 Hemos recibido tu mensaje",
      html: `
        <h2>¡Gracias por contactar a RobotCorp!</h2>

        <p>Hola <strong>${nombre}</strong>,</p>

        <p>Tu solicitud sobre <strong>${servicio}</strong> ha sido recibida correctamente.</p>

        <p>Nuestro equipo revisará la información y te responderemos en el menor tiempo posible.</p>

        <hr>

        <p><strong>Resumen de tu mensaje:</strong></p>
        <p>${mensaje || "Sin mensaje adicional"}</p>

        <br>

        <p>🚀 RobotCorp<br>
        Soluciones tecnológicas e innovación digital</p>
      `
    });

    return new Response(
      JSON.stringify({ message: "Correos enviados correctamente" }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ error: "Error enviando correo" }),
      { status: 500 }
    );
  }
};
*/