function ContactsPage() {
  return (
    <main className="container page-content">
      <div className="content-card">
        <div className="contacts-grid">
          <div>
            <h3>Наш адрес</h3>
            <p>г. Москва, ул. Примерная, д. 1</p>
            <p>Пн–Пт: 9:00 – 22:00</p>
            <p>Сб-Вс: 9:00 – 21:00</p>
          </div>
          <div>
            <h3>Связаться с нами</h3>
            <p className="contacts-data">+7 (123) 456-78-90</p>
            <p className="contacts-data">info@tyaplyap.ru</p>
            <p className="contacts-data">Telegram: @tyaplyap_store</p>
          </div>
        </div>
        <h3 style={{ marginTop: '1.5rem' }}>Написать нам</h3>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.') }}>
          <input className="input-field" type="text"  placeholder="Ваше имя"           required />
          <input className="input-field" type="email" placeholder="Email"               required />
          <textarea className="input-field" rows={4}  placeholder="Ваше сообщение…"    required />
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </div>
    </main>
  )
}

export default ContactsPage
