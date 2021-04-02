import React from "react";
import "./Orders.css";

const Orders = () => {
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
                            <tr>
                                <td>Date</td>
                                <td>Description</td>
                                <td className="text-center">Quantity</td>
                                <td className="text-center">$Price</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
