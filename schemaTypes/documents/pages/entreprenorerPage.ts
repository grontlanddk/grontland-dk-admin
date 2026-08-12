import {defineField, defineType} from 'sanity'

/* Singleton — /entreprenorer (B2B landing). No testimonials by design;
   the referenced case carries the proof. Trade links derive from the
   referenced service documents. */
export const entreprenorerPage = defineType({
  name: 'entreprenorerPage',
  title: 'Подрядчики',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'hero', title: 'Hero', type: 'heroSection', validation: (r) => r.required()}),
    defineField({name: 'scenarios', title: 'Форматы сотрудничества', type: 'cardGrid'}),
    defineField({name: 'expectations', title: 'Ожидания', type: 'cardGrid'}),
    defineField({name: 'why', title: 'Почему один партнёр (интро + ссылка)', type: 'cardGrid'}),
    defineField({name: 'model', title: 'Модель сотрудничества', type: 'stepsSection'}),
    defineField({
      name: 'caseHighlight',
      title: 'Выделенный кейс',
      type: 'object',
      fields: [
        defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'text', title: 'Текст', type: 'text', validation: (r) => r.required()}),
        defineField({
          name: 'project',
          title: 'Проект',
          type: 'reference',
          to: [{type: 'project'}],
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'ctas',
          title: 'CTA',
          type: 'array',
          of: [{type: 'ctaLink'}],
          validation: (r) => r.max(2),
        }),
      ],
    }),
    defineField({
      name: 'trades',
      title: 'Покрываемые направления',
      type: 'object',
      fields: [
        defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
        defineField({
          name: 'services',
          title: 'Услуги (ссылки берутся из них)',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'service'}]}],
        }),
      ],
    }),
    defineField({name: 'cta', title: 'Закрывающий CTA', type: 'ctaBand'}),
  ],
  preview: {prepare: () => ({title: 'Подрядчики'})},
})
