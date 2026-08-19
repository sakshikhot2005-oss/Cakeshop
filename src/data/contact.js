export const WHATSAPP_NUMBER = '917259910059'

export function getWhatsAppUrl(message = '') {
  const query = message ? `&text=${encodeURIComponent(message)}` : ''
  return `whatsapp://send?phone=${WHATSAPP_NUMBER}${query}`
}