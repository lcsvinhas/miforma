export default function Products() {
  return (
    <section className="py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Produtos
        </h1>
        <p className="mt-2 text-slate-600">
          Catálogo de impressões 3D e bonecos amigurumi.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-dashed border-slate-300 bg-slate-50"
          />
        ))}
      </div>
    </section>
  )
}
