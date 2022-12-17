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
    imgUrl: images.award01,
    title: 'Сыроедческие конфеты',
    subtitle:
      'Финики, курага, семена подсолнечника, фундук, цедра апельсина, корица, какао',
  },
  {
    imgUrl: images.award02,
    title: 'Шоколадный трайфл',
    subtitle:
      'Кокосовое молоко, агар-агар, финики, миндаль, фундук, банан, кокосовая стружка',
  },
  {
    imgUrl: images.award03,
    title: 'Рисовое пирожное',
    subtitle:
      'Фундук, финики, рисовая мука, растительное молоко, кокосове масло',
  },
];

const awardsENG = [
  {
    imgUrl: images.award01,
    title: 'Raw Food Candies',
    subtitle:
      'Dates, dried apricots, sunflower seeds, hazelnuts, orange peel, cinnamon, cocoa',
  },
  {
    imgUrl: images.award02,
    title: 'Chocolate Trifle',
    subtitle:
      'Coconut milk, agar-agar, dates, almonds, hazelnuts, banana, coconut flakes',
  },
  {
    imgUrl: images.award03,
    title: 'Rice Cake',
    subtitle: 'Hazelnuts, dates, rice flour, vegetable milk, coconut oil',
  },
];

export default { wines, cocktails, awards, awardsENG };
