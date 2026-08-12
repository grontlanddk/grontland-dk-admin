import {defineField, defineType} from 'sanity'

/* Closing CTA band on every inner page. Rendered by CtaBand; the phone
   button comes from siteSettings, not from here. */
export const ctaBand = defineType({
  name: 'ctaBand',
  title: 'CTA-полоса',
  type: 'object',
  fields: [
    defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'text', title: 'Текст', type: 'text', validation: (r) => r.required()}),
    defineField({
      name: 'primary',
      title: 'Основной CTA',
      type: 'ctaLink',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'crosslinks',
      title: 'Кросс-ссылки',
      type: 'array',
      of: [{type: 'ctaLink'}],
      validation: (r) => r.max(3),
    }),
    defineField({name: 'image', title: 'Фото (правый bleed)', type: 'imageWithAlt'}),
  ],
  preview: {select: {title: 'h2'}},
})
