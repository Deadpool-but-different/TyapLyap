function AboutPage() {
  return (
    <main className="container page-content">
      <div className="content-card">
        <h2>Партнёры ТяпЛяп зарабатывают больше. Вот почему</h2>
        <p>6 причин выбрать нас как оптового поставщика инструментов уже сегодня</p>
        <ul>
          <li>— Работаем напрямую с производством в Китае — без посредников и переплат</li>
          <li>— Более 500 SKU всегда в наличии на складе в Москве — нет ожидания поставки</li>
          <li>— Оперативно собираем заказ на собственном складе и делаем отправление</li>
          <li>— Многоуровневый контроль качества на производстве. Гарантия на весь ассортимент</li>
          <li>— Дополнительные скидки при увеличении объёмов — до 20% при заказах от 1 млн ₽</li>
          <li>— Ваш личный менеджер на связи. Помощь с маркетингом и развитием</li>
        </ul>
        <div className="stats-grid" style={{ marginTop: '1.5rem' }}>
          <div className="stat-card"><span className="stat-value">На 30%</span><span className="stat-label">Дешевле</span></div>
          <div className="stat-card"><span className="stat-value">2 000 м²</span><span className="stat-label">Склад в Москве</span></div>
          <div className="stat-card"><span className="stat-value">48 часов</span><span className="stat-label">Оперативная отгрузка</span></div>
          <div className="stat-card"><span className="stat-value">{'< 1%'}</span><span className="stat-label">Минимум возвратов</span></div>
          <div className="stat-card"><span className="stat-value">от 35%</span><span className="stat-label">Начальная маржа</span></div>
          <div className="stat-card"><span className="stat-value">24/7</span><span className="stat-label">Персональный менеджер</span></div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
