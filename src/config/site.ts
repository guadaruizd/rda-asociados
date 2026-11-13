/**
 * Datos de contacto y ubicación — editar aquí antes de publicar.
 * Dejar vacíos o con placeholders hasta tener los datos reales.
 */
export const site = {
  name: 'RDA & Asociados',
  legalName: 'Ruiz Díaz Ayala & Asoc. | Abogados',
  tagline:
    'Soluciones a la libertad y la justicia\nDefensa penal y asesoría jurídica',
  description:
    'Servicio de asesoría y consultoría jurídica en materia penal y otros fueros.',
  email: 'jm_ruizdiaz@hotmail.com',
  /** Celular corporativo. Internacional, sin signos: 595 + número sin el 0. */
  whatsappNumber: '595981986716',
  whatsappDisplay: '0981 986 716',
  address: {
    lines: ['Alejo García 1611', 'Asunción, Paraguay'],
    /** Listing the firm shared. Opens Google Maps. */
    mapsLink: 'https://maps.app.goo.gl/nvBe9CyTzdFKmzJB7',
    /** Satellite preview of the same pin. Must stay inside an iframe. */
    embedUrl:
      'https://maps.google.com/maps?q=-25.2881125,-57.6583907&hl=es&z=18&t=k&output=embed',
  },
  /** Retrato y biografía provisionales — reemplazar antes de publicar. */
  lawyer: {
    name: 'Juan María Ruiz Díaz Ayala',
    role: 'Socio principal',
    portrait: '/abogado-placeholder.jpg',
    portraitAlt: 'Retrato provisional de Juan María Ruiz Díaz Ayala',
    bio: 'Juan María Ruiz Díaz Ayala es el socio principal de RDA & Asociados, estudio de defensa penal y asesoría jurídica en Asunción. Acompaña a personas y familias desde las primeras actuaciones hasta el juicio oral y público, incluidas la excarcelación, las audiencias y la consulta en otros fueros cuando el caso lo requiere. Su trabajo se orienta a explicar cada etapa con claridad y a sostener una defensa técnica, seria y respetuosa de las garantías del debido proceso.',
  },
  services: [
    {
      title: 'Defensa Penal',
      text: 'Representación y defensa técnica en todas las etapas del proceso penal paraguayo.',
    },
    {
      title: 'Excarcelación',
      text: 'Gestión de libertades provisionales y medidas cautelares según la normativa vigente.',
    },
    {
      title: 'Audiencias',
      text: 'Preparación y participación en audiencias preliminares, intermedias y de juicio.',
    },
    {
      title: 'Juicio Oral y Público',
      text: 'Defensa en juicio oral y público ante el Tribunal de Sentencia.',
    },
    {
      title: 'Asesoría Legal en General',
      text: 'Consultoría jurídica en materia penal y otros fueros, según la necesidad del caso.',
    },
  ],
} as const

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(
    message ??
      `Hola, solicito asesoramiento con ${site.name} sobre un asunto jurídico.`,
  )
  return `https://wa.me/${site.whatsappNumber}?text=${text}`
}

export function mailtoUrl(subject = `Asesoramiento — ${site.name}`): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
}

export function mapsUrl(): string {
  return site.address.mapsLink
}
