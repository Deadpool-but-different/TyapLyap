import { useState, useEffect, useRef } from 'react'
import useStore from '../../store/useStore'

function AuthModal({ open, onClose }) {
  const [tab, setTab]           = useState('login')   // 'login' | 'register'
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [error, setError]       = useState('')
  const [ok, setOk]             = useState('')

  const login    = useStore(s => s.login)
  const register = useStore(s => s.register)

  const firstRef = useRef(null)

  useEffect(() => {
    if (open) {
      setError(''); setOk('')
      setTimeout(() => firstRef.current?.focus(), 50)
    }
  }, [open, tab])

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  if (!open) return null

  function reset() {
    setName(''); setEmail(''); setPassword(''); setConfirm(''); setError(''); setOk('')
  }

  function switchTab(t) { setTab(t); reset() }

  function handleLogin(e) {
    e.preventDefault()
    setError(''); setOk('')
    const err = login(email.trim(), password)
    if (err) { setError(err); return }
    setOk('\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438!')
    setTimeout(() => { reset(); onClose() }, 900)
  }

  function handleRegister(e) {
    e.preventDefault()
    setError(''); setOk('')
    if (!name.trim()) { setError('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f'); return }
    if (password.length < 4) { setError('\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430'); return }
    if (password !== confirm) { setError('\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442'); return }
    const err = register(name.trim(), email.trim(), password)
    if (err) { setError(err); return }
    setOk('\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430!')
    setTimeout(() => { reset(); onClose() }, 900)
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">

        <div className="auth-modal-head">
          <h2 className="auth-title">
            {tab === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
          </h2>
          <button className="auth-close" onClick={onClose} aria-label="Закрыть окно">✕</button>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab${tab === 'login' ? ' auth-tab--active' : ''}`}
            onClick={() => switchTab('login')}
          >Войти</button>
          <button
            className={`auth-tab${tab === 'register' ? ' auth-tab--active' : ''}`}
            onClick={() => switchTab('register')}
          >Зарегистрироваться</button>
        </div>

        {error && <div className="auth-error">⚠ {error}</div>}
        {ok    && <div className="auth-success">✔ {ok}</div>}

        {tab === 'login' && (
          <form className="auth-form" onSubmit={handleLogin}>
            <label className="auth-label">
              <span>Email</span>
              <input
                ref={firstRef}
                className="auth-input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="auth-label">
              <span>Пароль</span>
              <input
                className="auth-input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </label>
            <button className="btn btn-primary auth-submit" type="submit">Войти</button>
            <p className="auth-hint">
              Нет аккаунта?{' '}
              <button type="button" className="auth-link" onClick={() => switchTab('register')}>
                Зарегистрируйтесь
              </button>
            </p>
          </form>
        )}

        {tab === 'register' && (
          <form className="auth-form" onSubmit={handleRegister}>
            <label className="auth-label">
              <span>Имя</span>
              <input
                ref={firstRef}
                className="auth-input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Иван Петров"
                required
              />
            </label>
            <label className="auth-label">
              <span>Email</span>
              <input
                className="auth-input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="auth-label">
              <span>Пароль</span>
              <input
                className="auth-input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="минимум 4 символа"
                required
              />
            </label>
            <label className="auth-label">
              <span>Повторите пароль</span>
              <input
                className="auth-input"
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                placeholder="••••••••"
                required
              />
            </label>
            <button className="btn btn-primary auth-submit" type="submit">Зарегистрироваться</button>
            <p className="auth-hint">
              Уже есть аккаунт?{' '}
              <button type="button" className="auth-link" onClick={() => switchTab('login')}>
                Войти
              </button>
            </p>
          </form>
        )}

      </div>
    </div>
  )
}

export default AuthModal
