import {defineField, defineType} from 'sanity'

/* Internal link/CTA. href is a route path ("/kontakt", "/ydelser/havearbejde");
   routes are code, so this stays a plain string — same in both locales. */
export const ctaLink = defineType({
  name: 'ctaLink',
  title: 'Ссылка / CTA',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Текст', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'href', title: 'Путь', type: 'string', validation: (r) => r.required()}),
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'},
  },
})
