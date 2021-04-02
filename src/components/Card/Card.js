import React from "react";
import { useHistory } from "react-router";
import "./Card.css";

const Card = ({ products }) => {
    const { _id, imageURL, product, price, weight } = products;

    const history = useHistory();

    const checkOut = (id) => {
        const url = `/CheckOut/${id}`;
        history.push(url);
    };

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
                    <button
                        type="button"
                        onClick={() => checkOut(_id)}
                        className="btn btn-danger card-btn"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
