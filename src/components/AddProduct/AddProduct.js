import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const eventData = {
            product: data.product,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL,
        };
        const url = `https://rhubarb-pudding-99273.herokuapp.com/addProduct`;

        // http://localhost:5000

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
        }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "e157bbebf664086d0e54ca39254dad13");
        imageData.append("image", event.target.files[0]);
        axios
            .post(`https://api.imgbb.com/1/upload`, imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                <h2 className="mb-5">Add Product</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="styleform">
                                    <div className="inline-block">
                                        <label className="block">
                                            Product Name
                                        </label>
                                        <input
                                            name="product"
                                            type="text"
                                            size="20"
                                            ref={register}
                                        />
                                    </div>
                                    <div className="inline-block">
                                        <label className="block">Weight</label>
                                        <input
                                            name="weight"
                                            type="text"
                                            size="20"
                                            ref={register}
                                        />
                                    </div>
                                    <div className="inline-block">
                                        <label className="block">
                                            Add Price
                                        </label>
                                        <input
                                            name="price"
                                            type="number"
                                            size="45"
                                            ref={register}
                                        />
                                    </div>
                                    <div className="inline-block">
                                        <label className="block">
                                            Add Photo
                                        </label>
                                        <input
                                            name="photo"
                                            type="file"
                                            size="20"
                                            onChange={handleImageUpload}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-danger btn-lg mt-5 float-end"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
