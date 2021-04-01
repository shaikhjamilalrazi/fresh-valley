import React from "react";
import "./EditProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const EditProduct = () => {
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
                <h2 className="text-center">Under construction</h2>
            </div>
        </div>
    );
};

export default EditProduct;
