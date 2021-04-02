import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { userContext } from "../../App";

const CheckOut = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const date = new Date();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();

    const redirect = () => {
        const url = `/CheckOut`;
        history.push(url);
    };

    useEffect(() => {
        const url = `https://rhubarb-pudding-99273.herokuapp.com/product/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const submitCheckOut = () => {
        const orderDetail = { ...loggedInUser, ...product, date };

        fetch("https://rhubarb-pudding-99273.herokuapp.com/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(orderDetail),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    redirect();
                    setProduct([]);
                }
            });
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <h1 className="ms-3">Checkout</h1>
                <div className="col-lg-10 mx-auto">
                    {!product.product ? (
                        <h1 className="text-center">Order Completed</h1>
                    ) : (
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
                    )}
                    {product.product && (
                        <button
                            type="button"
                            onClick={submitCheckOut}
                            className="btn btn-danger btn-lg mt-3 float-end"
                        >
                            Checkout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
