import React, { useEffect, useState } from "react";
import "./ManageProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTable,
    faPen,
    faPlus,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ManageProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchProducts = () => {
        fetch("https://rhubarb-pudding-99273.herokuapp.com/allProducts")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    };

    useEffect(() => {
        fetchProducts();
    }, [allProducts]);

    const deleteProduct = (id) => {
        const url = `https://rhubarb-pudding-99273.herokuapp.com/deleteProduct/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => fetchProducts());
    };

    return (
        <div>
            <div className="sidenav">
                <Link
                    to="/"
                    style={{
                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: "40px",
                    }}
                >
                    Fresh Valley
                </Link>
                <Link to="/manageProduct">
                    <FontAwesomeIcon icon={faTable} /> Manage Product
                </Link>
                <Link to="/addProduct">
                    <FontAwesomeIcon icon={faPlus} /> Add Product
                </Link>
                <Link to="/editProduct">
                    <FontAwesomeIcon icon={faPen} /> Edit Product
                </Link>
            </div>

            <div className="main">
                <h1 className="mb-5">Manage Product</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {allProducts.length === 0 ? (
                                <div
                                    className="spinner-border text-success mx-auto"
                                    role="status"
                                ></div>
                            ) : (
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Name</th>
                                            <th
                                                scope="col"
                                                className="text-center"
                                            >
                                                Weight
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-center"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-end"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allProducts.map((products) => (
                                            <tr key={products._id}>
                                                <td>{products.product}</td>
                                                <td className="text-center">
                                                    {products.weight}
                                                </td>
                                                <td className="text-center">
                                                    ${products.price}
                                                </td>
                                                <td className="text-end">
                                                    <span
                                                        style={{
                                                            backgroundColor:
                                                                "#3bc83b",
                                                        }}
                                                        className="icon"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPen}
                                                        />
                                                    </span>
                                                    <span
                                                        style={{
                                                            backgroundColor:
                                                                "#FF444A",
                                                            cursor: "pointer",
                                                        }}
                                                        className="icon"
                                                        onClick={() =>
                                                            deleteProduct(
                                                                `${products._id}`
                                                            )
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                        />
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
