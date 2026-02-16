type CardProps = {
    title: string
    description: string
    imageUrl: string
}

export default function Card({ title, description, imageUrl }: CardProps) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt={title}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}
