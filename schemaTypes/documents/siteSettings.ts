import {defineField, defineType} from 'sanity'

/* Singleton — the single source for contact facts that the frontend today
   duplicates in four places (kontakt.ts, FOOTER, jsonld.ts, CtaBand). */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({name: 'phone', title: 'Телефон (отображение)', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'phoneHref', title: 'Телефон (tel: ссылка)', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'email', title: 'E-mail', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'cvr', title: 'CVR', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'area', title: 'Зона обслуживания', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'hours', title: 'Часы работы', type: 'string'}),
    defineField({
      name: 'replyPromise',
      title: 'Обещание ответа (напр. «Vi svarer inden 24 timer»)',
      type: 'string',
    }),
    defineField({name: 'footerBlurb', title: 'Текст в футере', type: 'string'}),
    defineField({name: 'copyright', title: 'Строка copyright', type: 'string'}),
  ],
  preview: {prepare: () => ({title: 'Настройки сайта'})},
})
