import {defineField, defineType} from 'sanity'

/* Numbered step flow — home process, service process, b2b collaboration
   model, kontakt follow-up. Rendered by NumberedSteps; backgroundImage
   switches it to the full-bleed photo treatment. */
export const stepsSection = defineType({
  name: 'stepsSection',
  title: 'Шаги',
  type: 'object',
  fields: [
    defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'intro', title: 'Интро', type: 'text'}),
    defineField({
      name: 'steps',
      title: 'Шаги',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          fields: [
            defineField({name: 'title', title: 'Название', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'desc', title: 'Текст', type: 'text', validation: (r) => r.required()}),
          ],
          preview: {select: {title: 'title', subtitle: 'desc'}},
        },
      ],
      validation: (r) => r.min(3).max(5),
    }),
    defineField({name: 'cta', title: 'CTA под шагами', type: 'ctaLink'}),
    defineField({
      name: 'backgroundImage',
      title: 'Фон (full-bleed фото)',
      type: 'imageWithAlt',
    }),
  ],
  preview: {select: {title: 'h2'}},
})
