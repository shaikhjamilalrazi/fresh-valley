import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import "./Orders.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        const url = `https://rhubarb-pudding-99273.herokuapp.com/orders?email=${loggedInUser.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <h1 className="ms-3">Orders</h1>
                <div className="col-lg-10 mx-auto">
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col" className="text-center">
                                    Quantity
                                </th>
                                <th scope="col" className="text-center">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr>
                                    <td>
                                        {new Date(order.date).toDateString(
                                            "DD/MM/YYYY"
                                        )}
                                    </td>
                                    <td>{order.product}</td>
                                    <td className="text-center">1</td>
                                    <td className="text-center">
                                        ${order.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
