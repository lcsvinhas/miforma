import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Início', end: true },
  { to: '/produtos', label: 'Produtos' },
  { to: '/calculadora', label: 'Calculadora' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          MIFORMA
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap gap-1">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
