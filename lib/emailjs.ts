import emailjs from "@emailjs/browser"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

interface EmailParams {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailParams): Promise<boolean> {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      PUBLIC_KEY
    )
    return result.status === 200
  } catch {
    return false
  }
}
