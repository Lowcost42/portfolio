import { NextResponse } from 'next/server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const forEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { body } = await req.json();
    const { email, objet, message } = res;
    try {
        const data = await resend.emails.send({
            from: forEmail,
            to: ['dede.tfca@gmail.com', email],
            subject: objet,
            react:
                <>
                    <h1>{objet}</h1>
                    <p>Merci de m'avoir contacté !</p>
                    <p>Nouveau message envoyé:</p>
                    <p>{message}</p>
                </>
        });
        return NextResponse.json(data);
    }
    catch (error) {
        return NextResponse.json({ error });
    }
}