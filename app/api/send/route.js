import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// console.log(resend);
// console.log(fromEmail);

export async function POST(req, res) {
    const { email, objet, message } = await req.json();
    console.log(email, objet, message);
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: email,
            objet: objet,
            react: (
                <>
                    <h1>{objet}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            )
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
