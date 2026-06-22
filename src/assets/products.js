/** @type {import('../types').Product[]} */
export const PRODUCTS = [
  // ── Электроинструменты ──────────────────────────────────────────────
  { id: 1,  name: 'Строительный фен 2000W GOODKING',               category: 'electro',  price: 1974, imageUrl: '/product_id1.jpeg',  stock: 10 },
  { id: 2,  name: 'Аккумуляторная ударная дрель-шуруповерт щет.',  category: 'electro',  price: 3136, imageUrl: '/product_id2.jpeg',  stock: 14 },
  { id: 3,  name: 'Аккумуляторная ударная дрель-шуруповерт бесщ.', category: 'electro',  price: 3502, imageUrl: '/product_id3.jpeg',  stock: 19 },
  { id: 4,  name: 'Аккумуляторная ударная дрель-шуруповерт бесщ.', category: 'electro',  price: 3009, imageUrl: '/product_id4.jpeg',  stock: 54 },
  { id: 5,  name: 'Аккумуляторный шуруповерт щеточный',            category: 'electro',  price: 2345, imageUrl: '/product_id5.jpeg',  stock: 64 },
  { id: 6,  name: 'Гайковерт пневматический ударный',              category: 'electro',  price: 3690, imageUrl: '/product_id6.jpeg',  stock: 24 },
  { id: 7,  name: 'Аккумуляторная цепная пила бесщеточная',        category: 'electro',  price: 6550, imageUrl: '/product_id7.jpeg',  stock: 81 },

  // ── Авто набор ──────────────────────────────────────────────
  { id: 8,  name: 'НАБОР РУЧНЫХ ИНСТРУМЕНТОВ 147 ПРЕДМЕТОВ',       category: 'auto',     price: 9215, imageUrl: '/product_id8.jpeg',  stock: 47 },
  { id: 9,  name: 'НАБОР РУЧНЫХ ИНСТРУМЕНТОВ 132 ПРЕДМЕТА',        category: 'auto',     price: 9060, imageUrl: '/product_id9.jpeg',  stock: 43 },
  { id: 10, name: 'НАБОР РУЧНЫХ ИНСТРУМЕНТОВ 131 ПРЕДМЕТА',        category: 'auto',     price: 6892, imageUrl: '/product_id10.jpeg', stock: 62 },
  { id: 11, name: 'НАБОР РУЧНЫХ ИНСТРУМЕНТОВ 129 ПРЕДМЕТА',        category: 'auto',     price: 8454, imageUrl: '/product_id11.jpeg', stock: 64 },
  { id: 12, name: 'НАБОР РУЧНЫХ ИНСТРУМЕНТОВ 95 ПРЕДМЕТА',         category: 'auto',     price: 7200, imageUrl: '/product_id12.jpeg', stock: 64 },
  { id: 13, name: 'НАБОР РУЧНЫХ ИНСТРУМЕНТОВ 86 ПРЕДМЕТА',         category: 'auto',     price: 6707, imageUrl: '/product_id13.jpeg', stock: 60 },
  { id: 14, name: 'НАБОР РУЧНЫХ ИНСТРУМЕНТОВ 58 ПРЕДМЕТА',         category: 'auto',     price: 3215, imageUrl: '/product_id14.jpeg', stock: 73 },

  // ── Бытовые ────────────────────────────────────────────
  { id: 15, name: 'Стяжной ремень для крепления груза',            category: 'domestic', price:  813, imageUrl: '/product_id15.jpeg', stock: 91 },
  { id: 16, name: 'Горелка газовая кровельная трехступенчатая',    category: 'domestic', price: 1205, imageUrl: '/product_id16.jpeg', stock: 88 },
  { id: 17, name: 'Клещи переставные',                             category: 'domestic', price:  317, imageUrl: '/product_id17.jpeg', stock: 59 },
  { id: 18, name: 'Ножницы по металлу левый срез',                 category: 'domestic', price:  335, imageUrl: '/product_id18.jpeg', stock: 65 },
  { id: 19, name: 'Ножницы по металлу правый срез',                category: 'domestic', price:  335, imageUrl: '/product_id19.jpeg', stock: 78 },
  { id: 20, name: 'Ножницы по металлу прямой срез',                category: 'domestic', price:  336, imageUrl: '/product_id20.jpeg', stock: 38 },
  { id: 21, name: 'Пассатижи удлиненные',                          category: 'domestic', price:  250, imageUrl: '/product_id21.jpeg', stock: 88 },
  { id: 22, name: 'Пассатижи комбинированные',                     category: 'domestic', price:  280, imageUrl: '/product_id22.jpeg', stock: 23 },
  { id: 23, name: 'Быстрозажимная струбцина зажимная',             category: 'domestic', price:  227, imageUrl: '/product_id23.jpeg', stock: 66 },
  { id: 24, name: 'Струбцина зажимная F-образная',                 category: 'domestic', price:  330, imageUrl: '/product_id24.jpeg', stock: 65 },
  { id: 25, name: 'Струбцина зажимная G-образная',                 category: 'domestic', price:  207, imageUrl: '/product_id25.jpeg', stock: 36 },
  { id: 26, name: 'Ключ комбинированный трещоточный',              category: 'domestic', price:  154, imageUrl: '/product_id26.jpeg', stock: 83 },
  { id: 27, name: 'Трубный ключ',                                  category: 'domestic', price:  377, imageUrl: '/product_id27.jpeg', stock: 47 },

  // ── Специальные ────────────────────────────────────────────
  { id: 28, name: 'Диск алмазный отрезной, сплошной',              category: 'special',  price:  156, imageUrl: '/product_id28.jpeg', stock: 58 },
  { id: 29, name: 'Диск алмазный по бетону',                       category: 'special',  price:  291, imageUrl: '/product_id29.jpeg', stock: 11 },
  { id: 30, name: 'Диск алмазный по бетону',                       category: 'special',  price:  278, imageUrl: '/product_id30.jpeg', stock: 67 },
  { id: 31, name: 'Диск алмазный по бетону',                       category: 'special',  price:  321, imageUrl: '/product_id31.jpeg', stock: 52 },
  { id: 32, name: 'Диск алмазный для керамики',                    category: 'special',  price:  464, imageUrl: '/product_id32.jpeg', stock: 35 },
  { id: 33, name: 'Пильный диск для дерева',                       category: 'special',  price:  250, imageUrl: '/product_id33.jpeg', stock: 77 },
  { id: 34, name: 'Диск алмазный по граниту',                      category: 'special',  price:  483, imageUrl: '/product_id34.jpeg', stock: 16 },
  { id: 35, name: 'Диск алмазный по керамограниту',                category: 'special',  price:  172, imageUrl: '/product_id35.jpeg', stock: 66 },
  { id: 36, name: 'Диск отрезной по металлу',                      category: 'special',  price:  155, imageUrl: '/product_id36.jpeg', stock: 88 },
  { id: 37, name: 'Диск алмазный по плитке',                       category: 'special',  price:  378, imageUrl: '/product_id37.jpeg', stock: 83 },
  { id: 38, name: 'Диск алмазный турбированный',                   category: 'special',  price:  156, imageUrl: '/product_id38.jpeg', stock: 72 },
  { id: 39, name: 'Чашка алмазная турбо',                          category: 'special',  price:  423, imageUrl: '/product_id39.jpeg', stock: 65 },
  { id: 40, name: 'Подкатной домкрат пневматический балонный',     category: 'special',  price: 7275, imageUrl: '/product_id40.jpeg', stock: 40 },
  { id: 41, name: 'Диск зачистной синтетический',                  category: 'special',  price:  241, imageUrl: '/product_id41.jpeg', stock: 92 },
  { id: 42, name: 'Автоматическая катушка со шлангом 10 м',        category: 'special',  price: 3937, imageUrl: '/product_id42.jpeg', stock: 35 },
  { id: 43, name: 'Ключ баллонный телескопический',                category: 'special',  price:  675, imageUrl: '/product_id43.jpeg', stock: 30 },
  { id: 44, name: 'Ключ динамометрический',                        category: 'special',  price: 4982, imageUrl: '/product_id44.jpeg', stock: 87 },
  { id: 45, name: 'Лежак ремонтный подкатной',                     category: 'special',  price: 2909, imageUrl: '/product_id45.jpeg', stock: 36 },

  // ── Хранение и тары ────────────────────────────────────────────
  { id: 46, name: 'Тележка инструментальная (пустая)',             category: 'storage',  price:19155, imageUrl: '/product_id46.jpeg', stock: 60 },
  { id: 47, name: 'Канистра экспедиционная',                       category: 'storage',  price:  948, imageUrl: '/product_id47.jpeg', stock: 90 },
  { id: 48, name: 'Поддон-канистра для сбора масла',               category: 'storage',  price:  517, imageUrl: '/product_id48.jpeg', stock: 40 },
  { id: 49, name: 'Поддон для слива масла',                        category: 'storage',  price:  559, imageUrl: '/product_id49.jpeg', stock: 37 },

  // ── Садовые ────────────────────────────────────────────
  { id: 50, name: 'Опрыскиватель помповый 2 литра',                category: 'garden',   price:  231, imageUrl: '/product_id50.jpeg', stock: 70 },
  { id: 51, name: 'Опрыскиватель помповый 3 литра',                category: 'garden',   price:  592, imageUrl: '/product_id51.jpeg', stock: 12 },
  { id: 52, name: 'Опрыскиватель помповый 8 литров',               category: 'garden',   price:  842, imageUrl: '/product_id52.jpeg', stock: 57 },
]



/** @type {Record<import('../types').ProductCategory, string>} */
export const CATEGORY_NAMES = {
  electro:     'Электроинструменты',
  auto:        'Авто набор',
  domestic:    'Бытовые',
  special:     'Специальные',
  storage:     'Хранение и тары',
  garden:      'Садовые',
}

export const ITEMS_PER_PAGE = 8
