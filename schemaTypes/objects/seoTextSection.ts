import {defineField, defineType} from 'sanity'

/* 120–180 word natural SEO block with 1–2 photos — home, galleri and all
   service pages. Rendered by SeoText / ServiceSeoText. */
export const seoTextSection = defineType({
  name: 'seoTextSection',
  title: 'SEO-текст',
  type: 'object',
  fields: [
    defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'text',
      title: 'Текст (120–180 слов)',
      type: 'text',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'images',
      title: 'Фото (0–2; блок галереи может быть без фото)',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (r) => r.max(2),
    }),
  ],
  preview: {select: {title: 'h2'}},
})
