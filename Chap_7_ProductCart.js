function Chap_7_ProductCart(Props) {
    return (
        <>
            {Props.Product - List1.map((Product, image) => (<div>
                <img src={Product.image} width = "200px"></img>
                <h2>{Product.name}</h2>
                <p>Price : {Product.price}</p>
                <p>Ratting : { Product.ratting}</p>
            </div>))}
        </>
    )
}