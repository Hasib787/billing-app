import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <a className="navbar-brand ml-5">Billing App</a>
        <div className="my-2 my-sm-0 mr-5">
          <h5>Paid Total: </h5>
        </div>
      </nav>
    </div>
  );
};

export default Header;
