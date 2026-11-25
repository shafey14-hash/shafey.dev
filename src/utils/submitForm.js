import { PERSONAL } from '../config'

/**
 * Submits a form payload to the configured FormSubmit AJAX endpoint.
 * Never fabricates success — returns { ok: false, error } on failure so the UI
 * can show an accurate error message and a mailto fallback.
 */
export async function submitForm(payload) {
  try {
    const res = await fetch(PERSONAL.formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => null)

    if (!res.ok || !data || (data.success !== true && data.success !== 'true')) {
      return {
        ok: false,
        error:
          (data && data.message) ||
          'Unable to submit the form right now. Please use the direct email button below.',
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      error:
        'Network error while sending your message. Please use the direct email or WhatsApp option below.',
    }
  }
}

/**
 * Builds a pre-filled mailto: URL as a reliable fallback.
 */
export function buildMailtoUrl(subject, lines) {
  const body = lines.filter(Boolean).join('\n')
  return `mailto:${PERSONAL.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
