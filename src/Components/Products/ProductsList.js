import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import './Products.css'


function ProductsList() {
    const [products, setproducts] = useState([]);
    const api_url = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch(api_url).then((respon) => respon.json()).then((data) => setproducts(data))
    }, [])
    return (
        <>
            <h2 className="text-center p-2"> Products</h2>
            <div className="container">
                <div className="Cards">
                    {products.map((product) => {
                        return (
                            <div className="" Key={product.id}>
                                {product.id <= 25 ? <div className="card-parent">
                                    <div class="card">
                                        <img src={product.image} alt={product.title} />
                                        <div class="card__content">
                                            <h5 className="card-title">{product.title}</h5>
                                            <Link to={`/product/${product.id}`} className="btn-12">Ditalis</Link>
                                        </div>
                                    </div>
                                </div > : null}
                            </div>
                        )
                    })}
                    <Link className="AllProduct" to="AllProducts">more products</Link>
                </div>

            </div >

        </>
    )
}

export default ProductsList;