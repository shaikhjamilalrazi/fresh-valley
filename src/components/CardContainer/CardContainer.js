import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("https://rhubarb-pudding-99273.herokuapp.com/allProducts")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    }, []);

    console.log(allProducts);

    return (
        <div className="container">
            <div className="row">
                <div className="card-content">
                    {allProducts?.map((products) => (
                        <Card key={products._id} products={products} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
