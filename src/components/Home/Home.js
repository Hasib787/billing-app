import React, { useState } from "react";
import BillingPage from "../BillingPage/BillingPage";
import Header from "../Header/Header";

const Home = () => {
  const [first, setfirst] = useState([]);
  return (
    <div>
      <Header />
      <nav className="navbar navbar-light bg-light">
        <h4>Billings</h4>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>

          <button className="btn btn-outline-primary my-2 my-sm-0 ml-5" type="submit">Add New Bill</button>
        </form>
      </nav>
      <BillingPage />
    </div>
  );
};

export default Home;
