import { Link } from 'react-router-dom'

type ShowcaseCard = {
  label: string
  tone: string
  position: string
  featured?: boolean
}

const SHOWCASE_CARDS: ShowcaseCard[] = [
  {
    label: 'Personagens',
    tone: 'bg-orange-500 text-white',
    position: 'md:col-start-1 md:row-start-1',
  },
  {
    label: 'Amigurumis',
    tone: 'bg-emerald-800 text-white',
    position: 'md:col-start-2 md:row-span-2',
  },
  {
    label: 'Em destaque',
    tone: 'bg-amber-400 text-slate-900',
    position: 'md:col-start-3 md:row-span-2',
    featured: true,
  },
  {
    label: 'Sob medida',
    tone: 'bg-slate-300 text-slate-900',
    position: 'md:col-start-4 md:row-span-2',
  },
  {
    label: 'Mascotes',
    tone: 'bg-emerald-300 text-slate-900',
    position: 'md:col-start-5 md:row-start-1',
  },
  {
    label: 'Brindes',
    tone: 'bg-yellow-500 text-slate-900',
    position: 'md:col-start-1 md:row-start-2',
  },
  {
    label: 'Encomendas',
    tone: 'bg-emerald-600 text-white',
    position: 'col-span-2 md:col-span-1 md:col-start-5 md:row-start-2',
  },
]

const AVATAR_TONES = ['bg-orange-500', 'bg-emerald-600', 'bg-amber-400']

export default function Home() {
  return (
    <div className="space-y-12 py-8 md:space-y-16 md:py-12">
      <section className="relative">
        <div className="flex items-center justify-between gap-6">
          <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-medium tracking-wider text-slate-700 md:flex">
            VEJA →
          </div>
          <h1 className="mx-auto max-w-2xl text-center text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
            Dê forma ao que você{' '}
            <span className="font-serif font-light italic">imagina</span>
          </h1>
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <div className="flex -space-x-3">
              {AVATAR_TONES.map((tone, i) => (
                <div
                  key={i}
                  className={`h-10 w-10 rounded-full border-2 border-white ${tone}`}
                />
              ))}
            </div>
            <div className="text-xs leading-tight">
              <p className="font-semibold text-slate-900">+50 clientes</p>
              <p className="text-slate-500">felizes</p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-base text-slate-600 md:text-lg">
          Bonecos únicos em impressão 3D e amigurumi, feitos sob medida.
        </p>
      </section>

      <section
        aria-label="Vitrine de coleções"
        className="grid grid-cols-2 gap-4 md:h-120 md:grid-cols-5 md:grid-rows-2 md:gap-5"
      >
        {SHOWCASE_CARDS.map((card) => (
          <article
            key={card.label}
            className={`relative aspect-square overflow-hidden rounded-3xl md:aspect-auto md:h-full ${card.tone} ${card.position}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-black/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <span className="absolute bottom-4 left-5 text-sm font-medium opacity-90">
              {card.label}
            </span>
            {card.featured && (
              <Link
                to="/produtos"
                className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-slate-700"
              >
                Ver produtos →
              </Link>
            )}
          </article>
        ))}
      </section>

      <section className="grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-2 md:gap-12 md:pt-12">
        <figure className="max-w-md">
          <p className="font-serif text-4xl leading-none text-slate-300">“</p>
          <blockquote className="mt-1 text-sm text-slate-600">
            Adorei o detalhamento do meu boneco. Ficou idêntico ao desenho que
            enviei.
          </blockquote>
          <figcaption className="mt-3 font-serif italic text-amber-700">
            — Bia M.
          </figcaption>
        </figure>
        <div className="md:text-right">
          <div className="flex items-baseline gap-3 md:justify-end">
            <p className="text-4xl font-bold text-slate-900">01</p>
            <p className="text-sm text-slate-500">Coleção</p>
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Conheça os bonecos personalizados da MIFORMA
          </h2>
          <Link
            to="/produtos"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
          >
            Explorar coleção →
          </Link>
        </div>
      </section>
    </div>
  )
}
