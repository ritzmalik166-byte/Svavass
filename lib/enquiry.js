// Shared by the form (instant feedback) and the API route (authoritative check).
export const enquiryOptions = ['Myself', 'A parent or relative', 'Someone else'];

export function validateEnquiry(data) {
  const errors = {};
  const name = String(data.name ?? '').trim();
  const phone = String(data.phone ?? '').trim();
  const email = String(data.email ?? '').trim();
  const visitDate = String(data.visitDate ?? '').trim();

  if (name.length < 2) errors.name = 'Please enter your full name.';
  if (phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a phone number with at least 10 digits.';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Please check your email address.';
  if (!enquiryOptions.includes(data.enquiringFor)) errors.enquiringFor = 'Please tell us who you are enquiring for.';
  if (visitDate && Number.isNaN(Date.parse(visitDate))) errors.visitDate = 'Please choose a valid date.';
  if (String(data.message ?? '').length > 1500) errors.message = 'Please keep your message under 1,500 characters.';
  if (data.consent !== true && data.consent !== 'on') errors.consent = 'Please agree so that we may contact you.';

  return errors;
}
