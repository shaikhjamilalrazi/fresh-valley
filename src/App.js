import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import LoginAndSignUp from "./components/LoginAndSignUp/LoginAndSignUp";
import Admin from "./components/Admin/Admin";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import Orders from "./components/Orders/Orders";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <>
            <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Switch>
                        <PrivateRoute path="/AddProduct">
                            <AddProduct />
                        </PrivateRoute>
                        <PrivateRoute path="/EditProduct">
                            <EditProduct />
                        </PrivateRoute>
                        <PrivateRoute path="/ManageProduct">
                            <ManageProduct />
                        </PrivateRoute>
                        <PrivateRoute path="/Admin">
                            <Admin />
                        </PrivateRoute>
                        <PrivateRoute path="/Orders">
                            <Header />
                            <Orders />
                        </PrivateRoute>
                        <PrivateRoute path="/CheckOut">
                            <Header />
                            <CheckOut />
                        </PrivateRoute>
                        <Route path="/LoginAndSignUp">
                            <Header />
                            <LoginAndSignUp />
                        </Route>
                        <Route path="/Home">
                            <Header />
                            <Home />
                        </Route>
                        <Route exact path="/">
                            <Header />
                            <Home />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Router>
            </userContext.Provider>
        </>
    );
}

export default App;
