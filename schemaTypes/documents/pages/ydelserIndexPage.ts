import {defineField, defineType} from 'sanity'

/* Singleton — /ydelser hub. The card grid derives from service documents
   (nav, cardDesc, heroImage, order); only hero + CTA live here. */
export const ydelserIndexPage = defineType({
  name: 'ydelserIndexPage',
  title: 'Услуги (индекс)',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'hero', title: 'Hero', type: 'heroSection', validation: (r) => r.required()}),
    defineField({name: 'cta', title: 'Закрывающий CTA', type: 'ctaBand'}),
  ],
  preview: {prepare: () => ({title: 'Услуги (индекс)'})},
})
