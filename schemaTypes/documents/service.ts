import {defineField, defineType} from 'sanity'

/* Service page — mirrors Frontend/Preview service content.
   Fixed section order lives in the frontend route; editors fill the fields.
   No public price list (removed Aug 2026 — forespørgsel CTAs). */
export const service = defineType({
  name: 'service',
  title: 'Услуга',
  type: 'document',
  fields: [
    defineField({
      name: 'nav',
      title: 'Название (навигация / футер)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {source: 'nav'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'order', title: 'Порядок в меню', type: 'number'}),
    defineField({
      name: 'cardDesc',
      title: 'Описание карточки (тизер на главной + /ydelser; иначе подзаголовок hero)',
      type: 'text',
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'hero', title: 'Hero', type: 'heroSection', validation: (r) => r.required()}),
    defineField({
      name: 'scope',
      title: 'Объём работ («Hvad laver vi»)',
      type: 'cardGrid',
      validation: (r) => r.required(),
    }),
    defineField({name: 'process', title: 'Процесс', type: 'stepsSection', validation: (r) => r.required()}),
    defineField({name: 'ctaImage', title: 'Фото закрывающего CTA', type: 'imageWithAlt'}),
    defineField({
      name: 'cases',
      title: 'Кейсы (1–2 проекта)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      validation: (r) => r.max(2),
    }),
    defineField({
      name: 'galleryCategory',
      title: 'Категория галереи (лента фото)',
      type: 'reference',
      to: [{type: 'galleryCategory'}],
      validation: (r) => r.required(),
    }),
    defineField({name: 'faq', title: 'FAQ', type: 'faqSection', validation: (r) => r.required()}),
    defineField({
      name: 'seoText',
      title: 'SEO-текст',
      type: 'seoTextSection',
      validation: (r) => r.required(),
    }),
  ],
  orderings: [{title: 'Порядок в меню', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'nav', subtitle: 'slug.current'}},
})
