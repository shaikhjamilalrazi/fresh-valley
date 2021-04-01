import React from "react";

const CheckOut = () => {
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
                                <td>Marks Full Cream Milk Powder Foil</td>
                                <td className="text-center">1</td>
                                <td>$255</td>
                            </tr>
                            <tr>
                                <td>Marks Full Cream Milk Powder Foil</td>
                                <td className="text-center">1</td>
                                <td>$255</td>
                            </tr>
                            <tr>
                                <td colspan="2">Total</td>
                                <td>$510</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        type="button"
                        class="btn btn-danger btn-lg mt-3 float-end"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
