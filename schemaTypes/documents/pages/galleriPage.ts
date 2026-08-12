import {defineField, defineType} from 'sanity'

/* Singleton — /galleri. The per-service sections derive from
   galleryCategory documents (title, description, cta, photos, order);
   only hero + seo text + CTA live here. */
export const galleriPage = defineType({
  name: 'galleriPage',
  title: 'Галерея',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'hero', title: 'Hero', type: 'heroSection', validation: (r) => r.required()}),
    defineField({name: 'seoText', title: 'SEO-текст', type: 'seoTextSection'}),
    defineField({name: 'cta', title: 'Закрывающий CTA', type: 'ctaBand'}),
  ],
  preview: {prepare: () => ({title: 'Галерея'})},
})
