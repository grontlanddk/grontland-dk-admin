import {defineField, defineType} from 'sanity'

export const seoMeta = defineType({
  name: 'seoMeta',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title (≤60 символов)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Meta description (140–160 символов, заканчивается CTA)',
      type: 'text',
      validation: (r) => r.required(),
    }),
  ],
})
