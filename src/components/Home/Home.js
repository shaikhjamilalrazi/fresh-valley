import React from "react";
import "./Home.css";
import CardContainer from "../CardContainer/CardContainer";

const Home = () => {
    return (
        <section className="container">
            <div className="row">
                <form className="col-lg-6 m-auto py-5">
                    <div className="input-group lg-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Products"
                        />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-danger">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <CardContainer />
            </div>
        </section>
    );
};

export default Home;
