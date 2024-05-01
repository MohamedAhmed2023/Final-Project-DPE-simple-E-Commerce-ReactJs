import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar"
import "./ProductDilt.css"

function ProductDit() {
    const api_url = "https://fakestoreapi.com/products"
    const [product, setproduct] = useState({});
    const prams = useParams({});

    fetch(`${api_url}/${prams.productId}`)
        .then((res) => res.json())
        .then((product) => setproduct(product))

    console.log(prams);
    return (
        <>
            <NavBar />
            <div className="ProductDit">
                <div className="cardDit" >
                    <div className="img-Dit">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="card-content">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <span>{`Price ${product.price}$`}</span>
                        <div className="cards-size">
                            <>
                                <h6>size:</h6>
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <Link href="#">XS</Link>
                                    <Link href="#">S</Link>
                                    <Link href="#">M</Link>
                                    <Link href="#">L</Link>
                                </div>
                            </>
                        </div>
                        <button className="btn-12">Add to cart</button>
                        {/* <div className="img-group">
                            <img src={product.images[1]} alt={product.title} />
                            <img src={product.images[2]} alt={product.title} />
                        </div> */}
                    </div>
                </div >
            </div >
        </>
    )
}

export default ProductDit;  