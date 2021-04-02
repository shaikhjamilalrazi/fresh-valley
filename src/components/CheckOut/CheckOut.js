import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CheckOut = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `https://rhubarb-pudding-99273.herokuapp.com/product/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    console.log(product);

    return (
        <div className="container">
            <div className="row mt-5">
                <h1 className="ms-3">Checkout</h1>
                <div className="col-lg-10 mx-auto">
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col" className="text-center">
                                    Quantity
                                </th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.product}</td>
                                <td className="text-center">1</td>
                                <td>${product.price}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Total</td>
                                <td>${product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        type="button"
                        className="btn btn-danger btn-lg mt-3 float-end"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
