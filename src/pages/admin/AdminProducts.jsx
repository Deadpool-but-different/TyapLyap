import { useRef, useState } from 'react'
import useStore from '../../store/useStore'
import { formatPrice } from '../../utils/formatters'
import { CATEGORY_NAMES } from '../../assets/products'

function AdminProducts() {
  const products           = useStore(s => s.products)
  const updateProductStock = useStore(s => s.updateProductStock)
  const updateProductImage = useStore(s => s.updateProductImage)

  const [editId,  setEditId]  = useState(null)
  const [editVal, setEditVal] = useState('')
  const [urlId,   setUrlId]   = useState(null)
  const [urlVal,  setUrlVal]  = useState('')
  const fileRefs = useRef({})

  const startEdit = (p) => { setEditId(p.id); setEditVal(String(p.stock)) }
  const saveEdit  = (id) => {
    const val = parseInt(editVal, 10)
    if (!isNaN(val) && val >= 0) updateProductStock(id, val)
    setEditId(null)
  }

  const handleFileChange = (id, e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => updateProductImage(id, ev.target.result)
    reader.readAsDataURL(file)
  }

  const saveUrl = (id) => {
    const val = urlVal.trim()
    if (val) updateProductImage(id, val)
    setUrlId(null); setUrlVal('')
  }

  return (
    <div>
      <h2> Все товары ({products.length})</h2>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th><th>Название</th><th>Категория</th>
              <th>Цена</th><th>Склад</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>

                <td>{p.name}</td>
                <td>{CATEGORY_NAMES[p.category]}</td>
                <td>{formatPrice(p.price)}</td>
                <td>
                  {editId === p.id ? (
                    <input className="input-field input-inline" type="number" min="0" value={editVal}
                      onChange={e => setEditVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && saveEdit(p.id)} autoFocus />
                  ) : (
                    <span className={p.stock === 0 ? 'text-danger' : p.stock < 10 ? 'text-warn' : ''}>{p.stock}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProducts