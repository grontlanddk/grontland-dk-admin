import {defineField, defineType} from 'sanity'

/* Singleton — /kontakt. Direct-contact rows derive from siteSettings; the
   form labels derive from the quoteForm singleton. */
export const kontaktPage = defineType({
  name: 'kontaktPage',
  title: 'Контакты',
  type: 'document',
  fields: [
    defineField({name: 'seo', title: 'SEO', type: 'seoMeta', validation: (r) => r.required()}),
    defineField({name: 'hero', title: 'Hero', type: 'heroSection', validation: (r) => r.required()}),
    defineField({name: 'formH2', title: 'Заголовок формы', type: 'string'}),
    defineField({name: 'infoH2', title: 'Заголовок прямого контакта', type: 'string'}),
    defineField({
      name: 'infoNote',
      title: 'Примечание к прямому контакту (напр. суббота по договорённости)',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: '«Что происходит после сообщения?»',
      type: 'stepsSection',
    }),
    defineField({
      name: 'audiences',
      title: 'Карточки аудиторий (фото + ссылка)',
      type: 'cardGrid',
    }),
  ],
  preview: {prepare: () => ({title: 'Контакты'})},
})
