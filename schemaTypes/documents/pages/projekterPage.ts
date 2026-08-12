import {defineField, defineType} from 'sanity'

/* Singleton — /projekter listing. The project cards derive from project
   documents; filter labels stay in code (tied to the category enum). */
export const projekterPage = defineType({
  name: 'projekterPage',
  title: 'Проекты (список)',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'h1', title: 'H1', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'sub', title: 'Подзаголовок', type: 'text'}),
    defineField({name: 'emptyFilter', title: 'Сообщение при пустом фильтре', type: 'string'}),
    defineField({name: 'cta', title: 'Закрывающий CTA', type: 'ctaBand'}),
  ],
  preview: {prepare: () => ({title: 'Проекты (список)'})},
})
