export const WHATSAPP_NUMBER = '918105931021'

export function getWhatsAppUrl(message = '') {
  const query = message ? `&text=${encodeURIComponent(message)}` : ''
  return `whatsapp://send?phone=${WHATSAPP_NUMBER}${query}`
}

export async function shareOrderWithImages(message, imageUrls = []) {
  const validUrls = imageUrls.filter(Boolean)
  const messageWithImages = validUrls.length
    ? `${message}\n\nCake Images:\n${validUrls.join('\n')}`
    : message

  if (navigator.share && navigator.canShare && validUrls.length) {
    try {
      const files = await Promise.all(validUrls.map(async (url, index) => {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Image unavailable')
        const blob = await response.blob()
        const extension = blob.type.split('/')[1] || 'jpg'
        return new File([blob], `cake-${index + 1}.${extension}`, { type: blob.type || 'image/jpeg' })
      }))

      if (files.length && navigator.canShare({ files })) {
        await navigator.share({ title: 'Cake order', text: messageWithImages, files })
        return true
      }
    } catch (error) {
      if (error.name === 'AbortError') return true
    }
  }

  // WhatsApp Web cannot receive file attachments through a URL, so preserve image links in the message.
  window.open(getWhatsAppUrl(messageWithImages), '_blank')
  return false
}