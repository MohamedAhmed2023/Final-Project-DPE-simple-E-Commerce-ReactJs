import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar"
import "./ProductDilt.css"

function ProductDit() {
    const api_url = "https://api.escuelajs.co/api/v1/products"
    const [product, setproduct] = useState({});
    const prams = useParams();
    useEffect(() => {
        fetch(`${api_url}/${prams.productId}`)
            .then((res) => res.json())
            .then((product) => setproduct(product))
    }, [])
    console.log(prams);
    return (
        <>
            <NavBar />
            <div className="ProductDit">
                <div className="cardDit" >
                    <div className="img-Dit">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <div className="card-content">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <span>{`Price ${product.price}$`}</span>
                        <div className="cards-size">
                            <>
                                <h6>size:</h6>
                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <a href="#">XS</a>
                                    <a href="#">S</a>
                                    <a href="#">M</a>
                                    <a href="#">L</a>
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