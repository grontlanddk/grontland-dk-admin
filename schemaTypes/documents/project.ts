import {defineField, defineType} from 'sanity'

/* Project case — mirrors Frontend constants/projects.ts `Project`.
   Services on the card become references to service documents. */
export const project = defineType({
  name: 'project',
  title: 'Проект',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Название', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      title: 'Слаг',
      type: 'slug',
      options: {source: 'title'},
      validation: (r) => r.required(),
    }),
    defineField({name: 'location', title: 'Локация', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'objectType',
      title: 'Тип объекта (напр. privat bolig)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Аудитория',
      type: 'string',
      options: {
        list: [
          {title: 'Частные', value: 'private'},
          {title: 'B2B', value: 'b2b'},
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'primaryService',
      title: 'Основная услуга',
      type: 'reference',
      to: [{type: 'service'}],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'serviceLabel',
      title: 'Чип на карточке (напр. «Havearbejde / terrasse»; иначе название услуги)',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Теги услуг',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({
      name: 'cardDesc',
      title: 'Описание карточки',
      type: 'text',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cardImage',
      title: 'Фото карточки',
      type: 'imageWithAlt',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero-фото',
      type: 'imageWithAlt',
      validation: (r) => r.required(),
    }),
    defineField({name: 'intro', title: 'Интро', type: 'text', validation: (r) => r.required()}),
    defineField({name: 'task', title: 'Задача', type: 'text', validation: (r) => r.required()}),
    defineField({
      name: 'work',
      title: 'Выполненные работы (пункты)',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.min(2),
    }),
    defineField({
      name: 'focus',
      title: 'Акценты (пункты)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'result', title: 'Результат', type: 'text', validation: (r) => r.required()}),
    defineField({
      name: 'facts',
      title: 'Факты',
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
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея проекта',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'projectPhoto',
          fields: [
            defineField({
              name: 'image',
              title: 'Фото',
              type: 'imageWithAlt',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'kind',
              title: 'Тип',
              type: 'string',
              options: {
                list: [
                  {title: 'Процесс', value: 'process'},
                  {title: 'Результат', value: 'result'},
                  {title: 'До', value: 'before'},
                  {title: 'После', value: 'after'},
                ],
              },
              validation: (r) => r.required(),
            }),
          ],
          preview: {select: {title: 'image.alt', subtitle: 'kind'}},
        },
      ],
    }),
    defineField({
      name: 'related',
      title: 'Похожие проекты',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
  ],
  preview: {select: {title: 'title', subtitle: 'location', media: 'cardImage'}},
})
