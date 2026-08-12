import {defineField, defineType} from 'sanity'

/* Photo pool per service category — powers the /galleri sections, the home
   gallery filter and every gallery strip (strips REFERENCE a category, so
   photos are stored exactly once). `key` must match the frontend's
   GalleryServiceId taxonomy. */
const CATEGORY_KEYS = [
  'havearbejde',
  'belaegning',
  'murerarbejde',
  'malerservice',
  'tomrerarbejde',
  'totalentreprise',
  'demonteringsarbejde',
]

export const galleryCategory = defineType({
  name: 'galleryCategory',
  title: 'Категория галереи',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Ключ категории (таксономия фронтенда)',
      type: 'string',
      options: {list: CATEGORY_KEYS},
      validation: (r) => r.required(),
    }),
    defineField({name: 'title', title: 'Название', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'description', title: 'Описание секции (/galleri)', type: 'text'}),
    defineField({name: 'cta', title: 'CTA страницы услуги (кнопка в /galleri)', type: 'ctaLink'}),
    defineField({
      name: 'photos',
      title: 'Фото',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (r) => r.min(1),
    }),
    defineField({name: 'order', title: 'Порядок сортировки', type: 'number'}),
  ],
  orderings: [{title: 'Порядок сортировки', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'key'}},
})
