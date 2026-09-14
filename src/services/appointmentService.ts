import { z } from 'zod';

export const appointmentSchema = z.object({
  guardianName: z.string().min(2, 'Enter parent or guardian name'),
  childName: z.string().min(2, 'Enter child name'),
  childAge: z.string().min(1, 'Enter child age'),
  phone: z.string().regex(/^(\+91[-\s]?)?[6-9]\d{9}$/, 'Enter a valid Indian mobile number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  doctor: z.string().optional(),
  speciality: z.string().min(1, 'Choose a speciality'),
  preferredDate: z.string().min(1, 'Choose a preferred date'),
  preferredTime: z.string().min(1, 'Choose a preferred time'),
  reason: z.string().min(3, 'Tell us the reason for visit'),
  message: z.string().max(600, 'Keep the message under 600 characters').optional(),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export interface AppointmentResult {
  referenceId: string;
  status: 'received';
}

export async function submitAppointment(data: AppointmentInput): Promise<AppointmentResult> {
  const endpoint = process.env.NEXT_PUBLIC_APPOINTMENT_API_URL;
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { referenceId: `KUL-${Date.now().toString().slice(-6)}`, status: 'received' };
  }
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Appointment request failed');
  return (await response.json()) as AppointmentResult;
}
