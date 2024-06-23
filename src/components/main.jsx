import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
  <div className="container">
    <h5 className="card-title fs-1 text fw-lighter">Urban Trade</h5>
    <p className="card-text fs-5 d-none d-sm-block">
      Explore our newest collection featuring exclusive designs and seasonal favorites. Whether you're looking for casual wear or statement pieces, we have something for every style.
    </p>
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default Home;
