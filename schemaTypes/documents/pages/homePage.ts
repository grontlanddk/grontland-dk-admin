import {defineField, defineType} from 'sanity'

/* Singleton — the home page. Section order is fixed in the frontend route:
   hero → services teaser → audiences → one-team → process → projects teaser
   → gallery teaser → about → seo text → faq. Service teaser cards derive
   from service documents (cardDesc/heroImage); gallery from galleryCategory. */
export const homePage = defineType({
  name: 'homePage',
  title: 'Главная',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'h1', title: 'H1', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'sub', title: 'Подзаголовок', type: 'text', validation: (r) => r.required()}),
        defineField({
          name: 'ctas',
          title: 'CTA (первый = основной)',
          type: 'array',
          of: [{type: 'ctaLink'}],
          validation: (r) => r.max(2),
        }),
        defineField({
          name: 'image',
          title: 'Основное фото (правая панель)',
          type: 'imageWithAlt',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'slider',
          title: 'Слайдер фото (слева внизу, 3)',
          type: 'array',
          of: [{type: 'imageWithAlt'}],
          validation: (r) => r.max(3),
        }),
        defineField({
          name: 'overlayCards',
          title: 'Оверлей-карточки проектов (макс. 2)',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'overlayCard',
              fields: [
                defineField({name: 'label', title: 'Подпись', type: 'string'}),
                defineField({
                  name: 'image',
                  title: 'Фото',
                  type: 'imageWithAlt',
                  validation: (r) => r.required(),
                }),
                defineField({
                  name: 'caption',
                  title: 'Подпись к фото',
                  type: 'text',
                  validation: (r) => r.required(),
                }),
              ],
              preview: {select: {title: 'caption', media: 'image'}},
            },
          ],
          validation: (r) => r.max(2),
        }),
      ],
    }),
    defineField({
      name: 'servicesTeaser',
      title: 'Тизер услуг (карточки из документов услуг)',
      type: 'teaserSection',
    }),
    defineField({
      name: 'audiences',
      title: 'Аудитории (частные / подрядчики)',
      type: 'cardGrid',
    }),
    defineField({
      name: 'oneTeam',
      title: 'Одна команда (фото-полоса — backgroundImage)',
      type: 'cardGrid',
    }),
    defineField({
      name: 'process',
      title: 'Процесс (также на /om-os)',
      type: 'stepsSection',
      validation: (r) => r.required(),
    }),
    defineField({name: 'projectsTeaser', title: 'Тизер проектов', type: 'teaserSection'}),
    defineField({
      name: 'galleryTeaser',
      title: 'Тизер галереи (фото из категорий)',
      type: 'teaserSection',
    }),
    defineField({
      name: 'about',
      title: 'Секция «О нас»',
      type: 'object',
      fields: [
        defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'text', title: 'Текст', type: 'text', validation: (r) => r.required()}),
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
        defineField({name: 'teamH3', title: 'Подзаголовок команды', type: 'string'}),
        defineField({name: 'teamText', title: 'Текст о команде', type: 'text'}),
        defineField({
          name: 'trades',
          title: 'Теги направлений',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({name: 'cta', title: 'CTA', type: 'ctaLink'}),
        defineField({name: 'image', title: 'Фото', type: 'imageWithAlt'}),
      ],
    }),
    defineField({name: 'seoText', title: 'SEO-текст', type: 'seoTextSection'}),
    defineField({name: 'faq', title: 'FAQ', type: 'faqSection'}),
  ],
  preview: {prepare: () => ({title: 'Главная'})},
})
