import {defineField, defineType} from 'sanity'

/* Titled card list — one type for every "cards with title + text" section:
   service scope, om values, b2b ways/expectations/why, private benefits and
   popular tasks, kontakt/home audience cards (those use image + links), and
   home one-team (uses backgroundImage). Rendered by FeatureGrid or its
   styled per-page variants. */
export const cardGrid = defineType({
  name: 'cardGrid',
  title: 'Сетка карточек',
  type: 'object',
  fields: [
    defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'intro', title: 'Интро', type: 'text'}),
    defineField({
      name: 'items',
      title: 'Карточки',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          fields: [
            defineField({name: 'title', title: 'Название', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'desc', title: 'Текст', type: 'text', validation: (r) => r.required()}),
            defineField({
              name: 'image',
              title: 'Фото (для карточек с изображениями)',
              type: 'imageWithAlt',
            }),
            defineField({
              name: 'links',
              title: 'Ссылки (напр. услуга + пример)',
              type: 'array',
              of: [{type: 'ctaLink'}],
              validation: (r) => r.max(2),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'desc', media: 'image'}},
        },
      ],
      validation: (r) => r.min(2),
    }),
    defineField({
      name: 'links',
      title: 'Ссылки секции (под сеткой)',
      type: 'array',
      of: [{type: 'ctaLink'}],
      validation: (r) => r.max(2),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Фон (full-bleed полоса)',
      type: 'imageWithAlt',
    }),
  ],
  preview: {select: {title: 'h2'}},
})
