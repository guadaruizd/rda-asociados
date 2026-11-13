/**
 * Datos de contacto y ubicación — editar aquí antes de publicar.
 * Dejar vacíos o con placeholders hasta tener los datos reales.
 */
export const site = {
  name: 'RDA & Asociados',
  legalName: 'Ruiz Díaz Ayala & Asoc. | Abogados',
  tagline: 'Defensa penal y asesoría jurídica en Asunción',
  description:
    'Servicio de asesoría y consultoría jurídica en materia penal y otros fueros.',
  email: 'consulta@rdaasociados.com.py',
  /** Número internacional sin signos: código país + número (Paraguay: 595…) */
  whatsappNumber: '595981000000',
  whatsappDisplay: '+595 981 000 000',
  address: {
    lines: ['Alejo García 1611', 'Asunción, Paraguay'],
    /** Listing the firm shared. Opens Google Maps. */
    mapsLink: 'https://maps.app.goo.gl/nvBe9CyTzdFKmzJB7',
    /** Resolved embed for the same pin. Must stay inside an iframe. */
    embedUrl:
      'https://www.google.com/maps/embed?origin=mfe&pb=!1m12!1m8!1m3!1d7214.957398763042!2d-57.6583907!3d-25.2881125!3m2!1i1024!2i768!4f13.1!2m1!1sRuiz+D%C3%ADaz+Ayala+%26+Asoc.+%7C+Abogados!6i16!3m1!1ses!5m1!1ses',
  },
  /** Retrato y biografía provisionales — reemplazar antes de publicar. */
  lawyer: {
    name: 'Abogado titular',
    role: 'Socio principal',
    portrait: '/abogado-placeholder.jpg',
    portraitAlt: 'Retrato provisional del abogado titular',
    bio: 'Espacio reservado para una biografía breve: formación, trayectoria en defensa penal y la manera de acompañar a cada cliente.',
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
      `Hola, deseo consultar con ${site.name} sobre un asunto jurídico.`,
  )
  return `https://wa.me/${site.whatsappNumber}?text=${text}`
}

export function mailtoUrl(): string {
  const subject = encodeURIComponent(`Consulta — ${site.name}`)
  return `mailto:${site.email}?subject=${subject}`
}

export function mapsUrl(): string {
  return site.address.mapsLink
}
