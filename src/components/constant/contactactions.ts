// "use server"

// import { contactFormSchema } from "@/lib/validations/contact"
// import type { ContactFormValues } from "@/lib/validations/contact"

// export async function sendContactEmail(formData: FormData): Promise<{ success: boolean }> {
//   // Convert FormData to object
//   const rawData = Object.fromEntries(formData.entries())

//   // Validate with Zod
//   const validationResult = contactFormSchema.safeParse(rawData)

//   if (!validationResult.success) {
//     console.error("Validation failed", validationResult.error)
//     throw new Error("Invalid form data")
//   }

//   const { firstName, lastName, email, phone, subject, message, to } = validationResult.data as ContactFormValues

//   // In a real application, you would use an email service like SendGrid, Mailgun, etc.
//   // For demonstration purposes, we'll just log the data and simulate a delay
//   console.log({
//     to,
//     from: email,
//     subject: `Contact Form: ${subject}`,
//     body: `
//       Name: ${firstName} ${lastName}
//       Email: ${email}
//       Phone: ${phone || "Not provided"}
      
//       Message:
//       ${message}
//     `,
//   })

//   // Simulate network delay
//   await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))

//   // In a real implementation, you would return success/error based on the email service response
//   return { success: true }
// }
