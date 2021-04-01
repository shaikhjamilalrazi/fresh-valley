import React from "react";
import "./Card.css";

const Card = ({ products }) => {
    const { imageURL, product, price, weight } = products;

    return (
        <div className="box-item mx-auto shadow mb-5">
            <div className="box-img">
                <img src={imageURL} alt="" />
            </div>
            <div className="box-name">
                <h4>
                    {product} {weight ? "-" + weight : ""}
                </h4>
            </div>
            <div className="box-name d-flex justify-content-between">
                <div className="price ms-3">
                    <h2>${price}</h2>
                </div>
                <div className="select-product">
                    <button type="button" className="btn btn-danger card-btn">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
