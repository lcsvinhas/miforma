import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium text-slate-500">Erro 404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
        Página não encontrada
      </h1>
      <p className="mt-3 text-slate-600">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-slate-900 px-5 py-2.5 font-medium text-white transition hover:bg-slate-700"
      >
        Voltar para o início
      </Link>
    </section>
  )
}
