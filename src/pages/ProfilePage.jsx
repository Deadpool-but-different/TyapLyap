import { useState } from 'react'
import useStore from '../store/useStore'
import { formatPrice, orderStatusColor } from '../utils/formatters'

function ProfilePage() {
  const orders   = useStore(s => s.orders)
  const products = useStore(s => s.products)
  const favorites= useStore(s => s.favorites)
  const cart     = useStore(s => s.cart)

  const [openOrder, setOpenOrder] = useState(null)

  const favProducts  = products.filter(p => favorites.includes(p.id))
  const cartProducts = cart.map(i => ({ ...i, product: products.find(x => x.id === i.id) })).filter(i => i.product)
  const totalSpent   = orders.reduce((s, o) => s + (o.total || 0), 0)
  const cartTotal    = cartProducts.reduce((s, i) => s + i.product.price * i.quantity, 0)

  return (
    <main className="container page-content">

      {/* Hero banner */}
      <div className="profile-hero">
        <div className="profile-avatar"><img src="/avatar.svg" /></div>
        <div className="profile-hero-info">
          <h1 className="profile-name">Личный кабинет</h1>
          <p className="profile-meta">Добро пожаловать</p>
        </div>
        <div className="profile-hero-badge">
          <span className="profile-role-badge">Покупатель</span>
        </div>
      </div>

      {/* Stat cards */}
      <div className="profile-stats">
        <div className="pstat-card pstat-purple">
          <span className="pstat-icon">📦</span>
          <span className="pstat-value">{orders.length}</span>
          <span className="pstat-label">Пакетов</span>
        </div>
        <div className="pstat-card pstat-pink">
          <span className="pstat-icon">❤️</span>
          <span className="pstat-value">{favProducts.length}</span>
          <span className="pstat-label">Избранное</span>
        </div>
        <div className="pstat-card pstat-blue">
          <span className="pstat-icon">🛒</span>
          <span className="pstat-value">{cart.reduce((s, i) => s + i.quantity, 0)}</span>
          <span className="pstat-label">В корзине</span>
        </div>
        <div className="pstat-card pstat-green">
          <span className="pstat-icon">💰</span>
          <span className="pstat-value">{orders.length ? formatPrice(totalSpent) : '\u2014'}</span>
          <span className="pstat-label">Потрачено</span>
        </div>
      </div>

      {/* Orders */}
      <section className="profile-section">
        <div className="section-header">
          <h2 className="section-title">История заказов</h2>
          <span className="section-count">{orders.length}</span>
        </div>

        {orders.length === 0 ? (
          <div className="profile-empty">
            <p>Заказов пока нет. Самое время что-нибудь купить!</p>
          </div>
        ) : (
          <div className="order-cards">
            {orders.map(o => (
              <div key={o.id} className={`order-card${openOrder === o.id ? ' order-card--open' : ''}`}>
                <button
                  className="order-card-header"
                  onClick={() => setOpenOrder(openOrder === o.id ? null : o.id)}
                >
                  <div className="order-card-id">#{String(o.id).slice(-6)}</div>
                  <div className="order-card-date">{o.date}</div>
                  <span
                    className="status-badge"
                    style={{ background: orderStatusColor(o.status) }}
                  >{o.status}</span>
                  <div className="order-card-total">{formatPrice(o.total)}</div>
                </button>

                {openOrder === o.id && (
                  <div className="order-card-body">
                    <table className="order-items-table">
                      <thead>
                        <tr><th>Пакет</th><th>Цена</th><th>Кол-во</th><th>Сумма</th></tr>
                      </thead>
                      <tbody>
                        {o.items.map(item => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{formatPrice(item.price)}</td>
                            <td>{item.quantity}</td>
                            <td className="order-item-sum">{formatPrice(item.sum)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={3} className="order-foot-label">Итого</td>
                          <td className="order-foot-total">{formatPrice(o.total)}</td>
                        </tr>
                      </tfoot>
                    </table>
                    {o.customer?.name && (
                      <div className="order-customer">
                        <span>{o.customer.name}</span>
                        <span>{o.customer.phone}</span>
                        <span>{o.customer.address}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Favourites */}
      <section className="profile-section">
        <div className="section-header">
          <h2 className="section-title">Избранное</h2>
          <span className="section-count">{favProducts.length}</span>
        </div>
        {favProducts.length === 0 ? (
          <div className="profile-empty">
            <p>Добавьте товары в избранное и они появятся здесь.</p>
          </div>
        ) : (
          <div className="fav-grid">
            {favProducts.map(p => (
              <div key={p.id} className="fav-card">
                <div className="fav-card-img">{p.image}</div>
                <div className="fav-card-info">
                  <div className="fav-card-name">{p.name}</div>
                  <div className="fav-card-price">{formatPrice(p.price)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cart preview */}
      <section className="profile-section">
        <div className="section-header">
          <h2 className="section-title">Ваша текущая корзина</h2>
          <span className="section-count">{cartProducts.length}</span>
        </div>
        {cartProducts.length === 0 ? (
          <div className="profile-empty">
            <p>Корзина пуста.</p>
          </div>
        ) : (
          <div className="cart-preview">
            {cartProducts.map(i => (
              <div key={i.id} className="cart-preview-item">
                <span className="cart-preview-img">{i.product.image}</span>
                <span className="cart-preview-name">{i.product.name}</span>
                <span className="cart-preview-qty">x {i.quantity}</span>
                <span className="cart-preview-sum">{formatPrice(i.product.price * i.quantity)}</span>
              </div>
            ))}
            <div className="cart-preview-footer">
              <span>Итого в корзине:</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>
          </div>
        )}
      </section>

    </main>
  )
}

export default ProfilePage