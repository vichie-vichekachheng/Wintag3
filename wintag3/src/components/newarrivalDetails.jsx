import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import new_pro from "../data/newarrival";
import shop_product from "../data/shop";
import { useCart } from "./CartContext";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function NewArrivalsProductsDetails() {
  const { id } = useParams();
  const {addToCart} = useCart()

  const currentProduct = new_pro.find((pro) => (pro.id) === Number(id));

  if (!currentProduct) {
    return (
      <div className="text-center p-3 mt-5 py-5">
        <h2 className="display-3">PRODUCT NOT FOUND</h2>
        <p>
          The item you are looking for does not exist or has been removed.
        </p>
        <Link to="/shop">Go back to Shopping page.</Link>
      </div>
    );
  }

  const relatedProducts = shop_product.filter(
    (pro) => (pro.id) !== Number(id)
  );

  return (
    <>
      <div className="container-fluid px-lg-5 py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="position-relative overflow-hidden rounded-4 bg-light p-4 text-center">
              <img
                src={currentProduct.image}
                className="img-fluid"
                alt=""
                style={{ maxHeight: "800px", width: "90%" }}
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="ps-lg-3">
              <span className="badge bg-light text-dark border mb-3 px-3 py-2 text-uppercase tracking-wider fw-semibold">
                In Stock
              </span>

              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="display-4 text-dark">
                  ${currentProduct.price.toFixed(2)}
                </span>

                <span className="text-secondary ms-3">
                  Size: <strong className="text-dark">{currentProduct.size}</strong>
                </span>
              </div>

              <p className="text-muted lh-lg mb-4 fs-6">
                {currentProduct.fullDescription}
              </p>

              <hr className="my-4 text-muted opacity-25" />

              <div className="d-flex flex-column flex-sm-row gap-3 pt-2">
                <button
                  className="btn btn-dark btn-lg flex-fill py-3 rounded-pill fw-semibold shadow-sm transition-all"
                  onClick={() => addToCart(currentProduct)}
                >
                  <i className="bi bi-bag-plus me-2"></i> Add to Cart
                </button>

                <button className="btn btn-outline-dark btn-lg flex-fill py-3 rounded-pill fw-semibold transition-all">
                  Add to wishlist
                </button>
              </div>

              <div className="row g-3 mt-4 pt-3 border-top text-muted small">
                <div className="col-6 d-flex align-items-center gap-2">
                  <i className="bi bi-truck fs-5 text-dark"></i>
                  <span>Free Shipping Nationwide</span>
                </div>
                <div className="col-6 d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check fs-5 text-dark"></i>
                  <span>2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
        <h1 className="display-4 p-4">You Might Also Like This</h1>
    </div>
      <Swiper className="mt-5 container-fluid"
       
       
        spaceBetween={20}
        slidesPerView={6}
      >
        {relatedProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" h-100 text-center position-relative">
              <div className=" position-relative overflow-hidden rounded-3 bg-light">
                <img
                  src={item.image}
                  alt=""
                  className="img-fluid w-100 primary-img"
                  style={{
                    height: "480px",
                    objectFit: "cover",
                   
                  }}
                />

                <button className="wishlist-btn">
                  <i className="bi bi-heart"></i>
                </button>

                <div className="Relatedpro-actions position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-center gap-2">
                  <button
                    className="p-1 btn-light rounded-pill border border-0"
                    onClick={() => addToCart(item)}
                  >
                    <i className="bi bi-bag-plus me-2"></i>
                    Add to Cart
                  </button>

                  <button className="btn btn-light rounded-pill">
                    <i className="bi bi-eye me-2"></i>
                    <Link
                      to={`/product/${item.id}`}
                      className="text-dark text-decoration-none"
                    >
                      Quick View
                    </Link>
                  </button>
                </div>
              </div>

              <div className="Relatedpro-details py-3 text-start">
                <small className="text-secondary text-uppercase">
                  Vintage Collection
                </small>

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h3 className="fw-bold text-dark mb-0">
                    ${item.price.toFixed(2)}
                  </h3>

                  <span className="text-secondary">Size: {item.size}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}