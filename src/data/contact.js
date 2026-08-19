export const WHATSAPP_NUMBER = '918105931021'

export function getWhatsAppUrl(message = '') {
  const query = message ? `&text=${encodeURIComponent(message)}` : ''
  return `whatsapp://send?phone=${WHATSAPP_NUMBER}${query}`
}