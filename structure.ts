import type {StructureResolver} from 'sanity/structure'

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem().title(title).id(type).child(S.document().schemaType(type).documentId(type))

/* Desk: settings + page singletons pinned (documentId = type name),
   collections below. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Контент')
    .items([
      singleton(S, 'siteSettings', 'Настройки сайта'),
      singleton(S, 'quoteForm', 'Форма заявки'),
      S.divider(),
      singleton(S, 'homePage', 'Главная'),
      singleton(S, 'ydelserIndexPage', 'Услуги (индекс)'),
      singleton(S, 'privatePage', 'Частные клиенты'),
      singleton(S, 'entreprenorerPage', 'Подрядчики'),
      singleton(S, 'projekterPage', 'Проекты (список)'),
      singleton(S, 'galleriPage', 'Галерея'),
      singleton(S, 'omOsPage', 'О нас'),
      singleton(S, 'kontaktPage', 'Контакты'),
      S.divider(),
      S.documentTypeListItem('service').title('Услуги'),
      S.documentTypeListItem('project').title('Проекты'),
      S.documentTypeListItem('galleryCategory').title('Категории галереи'),
    ])
