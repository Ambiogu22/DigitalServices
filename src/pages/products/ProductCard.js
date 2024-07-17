const ProductCard = (props) => {
    return(
        <div className="flex flex-col items-start gap-4 py-6">
            <img src={props.image} alt={props.alt} className="w-72 rounded-lg"/>
            <div className="flex flex-col items-start gap-2">
                <h2 className="text-xl font-semibold">{props.title}</h2>
                <p className="text-sm">{props.description}</p>
            </div>
        </div>
    )
}

export default ProductCard;