import {defineField, defineType} from 'sanity'

/* Singleton — /om-os. The process section renders from homePage.process
   (shared section, one source), so it has no field here. */
export const omOsPage = defineType({
  name: 'omOsPage',
  title: 'О нас',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'hero', title: 'Hero', type: 'heroSection', validation: (r) => r.required()}),
    defineField({
      name: 'intro',
      title: '«Кто мы» (фото + факты)',
      type: 'object',
      fields: [
        defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'text', title: 'Текст', type: 'text', validation: (r) => r.required()}),
        defineField({
          name: 'image',
          title: 'Фото (левый bleed)',
          type: 'imageWithAlt',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'facts',
          title: 'Чипы фактов (на фото)',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'fact',
              fields: [
                defineField({name: 'label', title: 'Подпись', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'value', title: 'Значение', type: 'string', validation: (r) => r.required()}),
              ],
              preview: {select: {title: 'label', subtitle: 'value'}},
            },
          ],
          validation: (r) => r.max(4),
        }),
      ],
    }),
    defineField({name: 'values', title: 'Ценности', type: 'cardGrid'}),
    defineField({
      name: 'team',
      title: 'Команда',
      type: 'object',
      fields: [
        defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'intro', title: 'Интро', type: 'text'}),
        defineField({
          name: 'members',
          title: 'Участники',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'member',
              fields: [
                defineField({name: 'name', title: 'Имя', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'role', title: 'Роль', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'note', title: 'Заметка (напр. опыт)', type: 'string'}),
                defineField({name: 'image', title: 'Фото', type: 'imageWithAlt'}),
                defineField({
                  name: 'trades',
                  title: 'Зоны ответственности',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({name: 'link', title: 'Ссылка на услугу', type: 'ctaLink'}),
              ],
              preview: {select: {title: 'name', subtitle: 'role', media: 'image'}},
            },
          ],
        }),
      ],
    }),
    defineField({name: 'onePlan', title: 'Полоса «Несколько специальностей — один план»', type: 'ctaBand'}),
    defineField({
      name: 'galleryTeaser',
      title: 'Тизер галереи (фото из категорий)',
      type: 'teaserSection',
    }),
    defineField({name: 'cta', title: 'Закрывающий CTA', type: 'ctaBand'}),
  ],
  preview: {prepare: () => ({title: 'О нас'})},
})
