import images from './images';

const wines = [
  {
    title: 'Апельсиновый фреш',
    price: '9 ₾',
    tags: '0.3 L',
  },
  {
    title: 'Грейпфрутовый фреш',
    price: '9 ₾',
    tags: '0.3 L',
  },
  {
    title: 'Лемонад киви-мята',
    price: '7 ₾',
    tags: '0.3 L',
  },
  {
    title: 'Комбуча в ассортименте',
    price: '8 ₾',
    tags: '0.3 L',
  },
  {
    title: 'Вода',
    price: '1 ₾',
    tags: '0.5 L',
  },
];

const cocktails = [
  {
    title: 'Чай (куркума, имбирь, лемонграсс)',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Чай (ромашка и липа)',
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Гречишный чай',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Американо',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Капучино',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
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
