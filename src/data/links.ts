import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'reference',
    title: 'REFERENCE',
    links: [
      {
        id: 'wikipedia',
        title: 'Wikipedia',
        url: 'https://wikipedia.org',
        logo: 'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png'
      },
      {
        id: 'google-translate',
        title: 'Google Translate',
        url: 'https://translate.google.com',
        logo: 'https://www.gstatic.com/images/branding/product/2x/translate_24dp.png'
      },
      {
        id: 'dictionary',
        title: 'Dictionary',
        url: 'https://dictionary.com',
        logo: 'https://www.dictionary.com/favicon.ico'
      }
    ]
  },
  {
    id: 'download',
    title: 'DOWNLOAD',
    links: [
      {
        id: 'softpedia',
        title: 'Softpedia',
        url: 'https://www.softpedia.com',
        logo: 'https://www.softpedia.com/favicon.ico'
      },
      {
        id: 'dropbox',
        title: 'Dropbox',
        url: 'https://www.dropbox.com',
        logo: 'https://www.dropbox.com/static/images/favicon.ico'
      }
    ]
  }
];