import { useState } from "react";
import Shopbanner from "../assets/shopbanner.png";
import { Link } from "react-router-dom";
import shop_product from "../data/shop";
import { useCart } from "../components/CartContext";
export default function Shop() {
  const [selectedBrand, setselectedBrand] = useState("All");
  const {addTocart}= useCart()
  const filterProducts = selectedBrand==='All' ? shop_product : shop_product.filter(p=> p.brand===selectedBrand)
  return (
    <>
      <div className="py-5 position-relative">
        <img
          src={Shopbanner}
          className="w-100"
          style={{
            height: "260px",
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
          alt=""
        />
        <h1 className="position-absolute text-light bottom-50 start-50 display-3 translate-middle-x">
          DISCOVER UNQIUE STYLE HERE!
        </h1>
      </div>
      <div className="container-fluid py-4">
        <div className="d-flex flex-column flex-md-row align-items-center gap-5 p-5">
          <h2 className="display-4 fw-bold text-start mb-0">POPULAR BRANDS</h2>
          <div className="d-flex ms-5  gap-5">
            <button
              className={`btn rounded-5 fs-5 p-3 ${selectedBrand === "All" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setselectedBrand("All")}
            >
              All Products
            </button>

           
            <button
              className={`btn rounded-5 fs-5 p-3 ${selectedBrand === "Levi's" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setselectedBrand("Levi's")}
            >
              Levi's
            </button>
            <button
              className={`btn rounded-5 fs-5 p-3 ${selectedBrand === "Nike" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setselectedBrand("Nike")}
            >
             
              Nike
            </button>
              <button
              className={`btn rounded-5 fs-5 p-3 ${selectedBrand === "American Vintage" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setselectedBrand("American Vintage")}
            >
              American Vintage
            </button>
            <button
              className={`btn rounded-5 fs-5 p-3 ${selectedBrand === "Disney" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setselectedBrand("Disney")}
            >
              Disney
            </button>
          </div>
        </div>
      </div>
     <div className="container-fluid py-4 p-5">
  <div className="row g-4 justify-content-center">
    {filterProducts.map((item) => (
      <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="h-100 text-center position-relative rounded-4 bg-dark border border-secondary  shadow-sm p-3 d-flex flex-column justify-content-between">
          
         
          <div className="position-relative overflow-hidden rounded-3 bg-black ">
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid w-100 rounded-3"
              style={{
                height: "380px",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />

           
            <button 
              className="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 m-3 shadow-sm border border-secondary border-opacity-50"
              style={{ width: "36px", height: "36px", padding: 0 }}
            >
              <i className="bi bi-heart text-white"></i>
            </button>

           
            <div className="position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-center gap-2 bg-dark bg-opacity-75 backdrop-blur">
              <button className="btn btn-warning btn-sm rounded-pill px-3 fw-bold shadow-sm d-flex align-items-center" onClick={()=> addTocart(item)}>
                <i className="bi bi-bag-plus me-1"></i> Add
              </button>

              <Link
                to={`/shop_product/${item.id}`}
                className="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold d-flex align-items-center text-decoration-none"
              >
                <i className="bi bi-eye me-1"></i> View
              </Link>
            </div>
          </div>

         
          <div className="pt-3 text-start">
            <small className="text-warning text-uppercase fw-semibold tracking-wider">
              {item.brand}
            </small>

            <h5 className="fw-bold text-white mt-1 mb-2 text-truncate">
              {item.name}
            </h5>

            <div className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold text-white mb-0">
                ${item.price.toFixed(2)}
              </h4>

              <span className="badge bg-secondary bg-opacity-50 text-light border border-secondary px-2 py-1">
                Size: {item.size}
              </span>
            </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}
