// Built a react app theat display a list of product using Pros
// Create a Product Cart Component to show the product details like title , price , ratting , image
// Use A product list component to store a product data can display the multiple cart component using Map method
import Loli from './Lolipop'
import Cart from './Chap_7_ProductCart'
function Chap_7_ProductList(){
    const products = [
        {
            name: "Caremal-Lolipop",
            price: "100000",
            ratting: "5.5",
            img : Loli
        },
        {
            name: "Strawberry-Lolipop",
            price: "1009999",
            ratting: "5.5",
            img : Loli
        },
        {
            name: "Chocolate-Lolipop",
            price: "100000",
            ratting: "5.5",
            img : Loli
        }
    ]
    return (
        <div>
            <h1>Our Products : </h1>
            <Cart Product-list={products}></Cart>
        </div>
    )
}
export default Chap_7_ProductList
