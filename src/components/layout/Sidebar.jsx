import { CATEGORY_NAMES } from '../../assets/products'

const ALL_CATS = [
  { key: 'all',          label: 'Все пакеты'               },
  { key: 'electro',      label: CATEGORY_NAMES.electro     },
  { key: 'auto',         label: CATEGORY_NAMES.auto        },
  { key: 'domestic',     label: CATEGORY_NAMES.domestic    },
  { key: 'special',      label: CATEGORY_NAMES.special     },
  { key: 'storage',      label: CATEGORY_NAMES.storage     },
  { key: 'garden',       label: CATEGORY_NAMES.garden      },
]

/**
 * Боковая панель фильтрации каталога
 * @param {{ active: string, onSelect: (cat: string) => void }} props
 */
function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Партнеры</h3>
      <ul className="category-list">
        {ALL_CATS.map(({ key, label }) => (
          <li key={key}>
            <button
              className={`category-btn${active === key ? ' active' : ''}`}
              onClick={() => onSelect(key)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
