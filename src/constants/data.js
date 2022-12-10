import images from './images';

const wines = [
  {
    title: 'Апельсиновый фреш',
    price: '9 ₾',
    tags: '0.3 л',
  },
  {
    title: 'Грейпфрутовый фреш',
    price: '9 ₾',
    tags: '0.3 л',
  },
  {
    title: 'Лемонад киви-мята',
    price: '7 ₾',
    tags: '0.3 л',
  },
  {
    title: 'Комбуча в ассортименте',
    price: '8 ₾',
    tags: '0.3 л',
  },
  {
    title: 'Вода',
    price: '1 ₾',
    tags: '0.5 л',
  },
];

const cocktails = [
  {
    title: 'Чай (куркума, имбирь, лемонграсс)',
    price: '3 ₾',
    tags: '250 мл',
  },
  {
    title: 'Чай (ромашка и липа)',
    price: '3 ₾',
    tags: '250 мл',
  },
  {
    title: 'Гречишный чай',
    price: '3 ₾',
    tags: '250 мл',
  },
  {
    title: 'Американо',
    price: '3 ₾',
    tags: '250 мл',
  },
  {
    title: 'Капучино',
    price: '7 ₾',
    tags: 'На растительном молоке | 250 мл',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
