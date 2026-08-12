import {defineField, defineType} from 'sanity'

/* Singleton — /private (audience landing for homeowners). Popular-task
   cards use cardGrid items with image + two links (service + example). */
export const privatePage = defineType({
  name: 'privatePage',
  title: 'Частные клиенты',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'hero', title: 'Hero', type: 'heroSection', validation: (r) => r.required()}),
    defineField({name: 'benefits', title: 'Преимущества', type: 'cardGrid'}),
    defineField({
      name: 'types',
      title: 'Популярные задачи (фото + ссылки на карточке)',
      type: 'cardGrid',
    }),
    defineField({name: 'projects', title: 'Избранные проекты', type: 'teaserSection'}),
    defineField({name: 'faq', title: 'FAQ', type: 'faqSection'}),
    defineField({name: 'cta', title: 'Закрывающий CTA', type: 'ctaBand'}),
  ],
  preview: {prepare: () => ({title: 'Частные клиенты'})},
})
