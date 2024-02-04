
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar";
import Silder from "../Silder/Silder";
import './Products.css'
function AllProducts() {
    const [products, setproducts] = useState([]);
    const api_url = "https://api.escuelajs.co/api/v1/products";

    useEffect(() => {
        fetch(api_url).then((respon) => respon.json()).then((data) => setproducts(data))
    }, [])

    return (
        <>
            <NavBar />
            <Silder />
            <h2 className="text-center p-2"> All Products</h2>
            <div className="container">
                <div className="Cards">
                    {products.map((product) => {
                        return (
                            <div className="" Key={product.id}>
                                <div className="card-parent">
                                    <div class="card">
                                        <img src={product.images} alt={product.title} />
                                        <div class="card__content">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <Link to={`/product/${product.id}`} className="btn-12">Ditalis</Link>
                                        </div>
                                    </div>
                                </div >
                            </div>
                        )
                    })}
                </div>
            </div>
        </ >

    )
}

export default AllProducts;