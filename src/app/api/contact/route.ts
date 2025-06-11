import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/sendMail';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Brak wymaganych pól.' }, { status: 400 });
    }

    // Wysyłka maila do właściciela strony
    await sendMail({
      to: process.env.CONTACT_RECEIVER || 'biuro@obsydian.dev',
      subject: `Nowa wiadomość z formularza od ${name}`,
      html: `<p><b>Imię i nazwisko:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Wiadomość:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Błąd serwera.' }, { status: 500 });
  }
}
