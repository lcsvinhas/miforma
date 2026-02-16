import Card from "../../components/card/Card"
import Example from "../../assets/example.jpg"

export default function Produtos() {
  const produtos = [
    { title: "Produto 1", description: "Descrição do produto 1", imageUrl: Example },
    { title: "Produto 2", description: "Descrição do produto 2", imageUrl: Example },
    { title: "Produto 3", description: "Descrição do produto 3", imageUrl: Example },
    { title: "Produto 4", description: "Descrição do produto 4", imageUrl: Example },
    { title: "Produto 5", description: "Descrição do produto 5", imageUrl: Example },
    { title: "Produto 6", description: "Descrição do produto 6", imageUrl: Example },
    { title: "Produto 7", description: "Descrição do produto 7", imageUrl: Example },
    { title: "Produto 8", description: "Descrição do produto 8", imageUrl: Example },
    { title: "Produto 9", description: "Descrição do produto 9", imageUrl: Example },
    { title: "Produto 10", description: "Descrição do produto 10", imageUrl: Example },
    { title: "Produto 11", description: "Descrição do produto 11", imageUrl: Example },
    { title: "Produto 12", description: "Descrição do produto 12", imageUrl: Example },
    { title: "Produto 13", description: "Descrição do produto 13", imageUrl: Example },
    { title: "Produto 14", description: "Descrição do produto 14", imageUrl: Example },
    { title: "Produto 15", description: "Descrição do produto 15", imageUrl: Example },
    { title: "Produto 16", description: "Descrição do produto 16", imageUrl: Example },
    { title: "Produto 17", description: "Descrição do produto 17", imageUrl: Example },
    { title: "Produto 18", description: "Descrição do produto 18", imageUrl: Example },
    { title: "Produto 19", description: "Descrição do produto 19", imageUrl: Example },
    { title: "Produto 20", description: "Descrição do produto 20", imageUrl: Example },
    { title: "Produto 21", description: "Descrição do produto 21", imageUrl: Example },
    { title: "Produto 22", description: "Descrição do produto 22", imageUrl: Example },
    { title: "Produto 23", description: "Descrição do produto 23", imageUrl: Example },
    { title: "Produto 24", description: "Descrição do produto 24", imageUrl: Example },
    { title: "Produto 25", description: "Descrição do produto 25", imageUrl: Example },
    { title: "Produto 26", description: "Descrição do produto 26", imageUrl: Example },
    { title: "Produto 27", description: "Descrição do produto 27", imageUrl: Example },
    { title: "Produto 28", description: "Descrição do produto 28", imageUrl: Example },
    { title: "Produto 29", description: "Descrição do produto 29", imageUrl: Example },
    { title: "Produto 30", description: "Descrição do produto 30", imageUrl: Example },
    { title: "Produto 31", description: "Descrição do produto 31", imageUrl: Example },
    { title: "Produto 32", description: "Descrição do produto 32", imageUrl: Example },
    { title: "Produto 33", description: "Descrição do produto 33", imageUrl: Example },
    { title: "Produto 34", description: "Descrição do produto 34", imageUrl: Example },
    { title: "Produto 35", description: "Descrição do produto 35", imageUrl: Example },
    { title: "Produto 36", description: "Descrição do produto 36", imageUrl: Example },
    { title: "Produto 37", description: "Descrição do produto 37", imageUrl: Example },
    { title: "Produto 38", description: "Descrição do produto 38", imageUrl: Example },
    { title: "Produto 39", description: "Descrição do produto 39", imageUrl: Example },
    { title: "Produto 40", description: "Descrição do produto 40", imageUrl: Example },
    { title: "Produto 41", description: "Descrição do produto 41", imageUrl: Example },
    { title: "Produto 42", description: "Descrição do produto 42", imageUrl: Example },
    { title: "Produto 43", description: "Descrição do produto 43", imageUrl: Example },
    { title: "Produto 44", description: "Descrição do produto 44", imageUrl: Example },
    { title: "Produto 45", description: "Descrição do produto 45", imageUrl: Example },
    { title: "Produto 46", description: "Descrição do produto 46", imageUrl: Example },
    { title: "Produto 47", description: "Descrição do produto 47", imageUrl: Example },
    { title: "Produto 48", description: "Descrição do produto 48", imageUrl: Example },
    { title: "Produto 49", description: "Descrição do produto 49", imageUrl: Example },
    { title: "Produto 50", description: "Descrição do produto 50", imageUrl: Example }
  ]

  return (
    <div className="container-fluid my-4">
      <div className="row g-4">
        {produtos.map((produto) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <Card
              title={produto.title}
              description={produto.description}
              imageUrl={produto.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  )
}