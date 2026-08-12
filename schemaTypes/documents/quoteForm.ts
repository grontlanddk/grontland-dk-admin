import {defineField, defineType} from 'sanity'

/* Singleton — copy for the site-wide quote modal + home QuoteCta band.
   Submission handling (leads + email) is a planned feature, not implemented;
   this document only carries the labels. */
export const quoteForm = defineType({
  name: 'quoteForm',
  title: 'Форма заявки',
  type: 'document',
  fields: [
    defineField({name: 'h2', title: 'Заголовок', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'sub', title: 'Подзаголовок', type: 'text', validation: (r) => r.required()}),
    defineField({name: 'nameLabel', title: 'Поле: имя', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'phoneLabel', title: 'Поле: телефон', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'emailLabel', title: 'Поле: e-mail', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'whoLabel', title: 'Вопрос об аудитории', type: 'string'}),
    defineField({
      name: 'whoOptions',
      title: 'Варианты аудитории',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.max(2),
    }),
    defineField({name: 'taskLabel', title: 'Вопрос о типе работ', type: 'string'}),
    defineField({name: 'taskPlaceholder', title: 'Плейсхолдер типа работ', type: 'string'}),
    defineField({
      name: 'taskOptions',
      title: 'Варианты типа работ',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'messageLabel', title: 'Поле: сообщение', type: 'string'}),
    defineField({name: 'uploadLabel', title: 'Поле: загрузка', type: 'string'}),
    defineField({name: 'uploadHint', title: 'Подсказка к загрузке', type: 'string'}),
    defineField({name: 'button', title: 'Кнопка отправки', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'micro', title: 'Микротекст под кнопкой', type: 'string'}),
    defineField({name: 'image', title: 'Фото полосы (QuoteCta на главной)', type: 'imageWithAlt'}),
    defineField({
      name: 'reassurance',
      title: 'Строки доверия (QuoteCta на главной)',
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
      validation: (r) => r.max(3),
    }),
  ],
  preview: {prepare: () => ({title: 'Форма заявки'})},
})
