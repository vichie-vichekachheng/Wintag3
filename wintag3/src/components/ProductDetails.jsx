import products from "../data/product.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useCart } from "./CartContext.jsx";
export default function ProductDetails() {
  const {addTocart}= useCart()
  const { id } = useParams();
  const Currentpro = products.find((p) => p.id === Number(id));

  if (!Currentpro) {
    return (
      <>
        <div className="text-center p-3 mt-5 py-5">
          <h2 className="display-3 ">PRODUCT NOT FOUND</h2>
          <p>
            The item you are looking for does not exist or has been removed.
          </p>
          <Link to="/shop">Go back to Shopping page.</Link>
        </div>
      </>
    );
  }

  const relatedproducts = products.filter((p) => p.id !== Number(id));

  return (
    <>
      <div className="container-fluid px-lg-5 py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="position-relative overflow-hidden rounded-4 bg-light p-4 text-center">
              <img
                src={Currentpro.image}
                className="img-fluid"
                alt={Currentpro.name}
                style={{ maxHeight: "750px", width: "90%" }}
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="ps-lg-3">
              <span className="badge bg-light text-dark border mb-3 px-3 py-2 text-uppercase tracking-wider fw-semibold">
                In Stock
              </span>

              <h1 className="display-5 fw-bold text-dark mb-2">
                {Currentpro.name}
              </h1>

              <div className="d-flex align-items-center gap-3 mb-4">
                <span className=" display-4 text-dark">
                  ${Currentpro.price.toFixed(2)}
                </span>
                
                <span className="text-secondary ms-3">
                  Size: <strong className="text-dark">{Currentpro.size}</strong>
                </span>
              </div>

              <p className="text-muted lh-lg mb-4 fs-6">
                {Currentpro.fullDescription}
              </p>

              <hr className="my-4 text-muted opacity-25" />

              <div className="d-flex flex-column flex-sm-row gap-3 pt-2">
                <button className="btn btn-dark btn-lg flex-fill py-3 rounded-pill fw-semibold shadow-sm transition-all" onClick={()=>addTocart(products)}>
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
      <div className="container-fluid p-5">
        <h1 className="display-4">YOU MIGHT ALSO LIKE THIS</h1>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".product-swiper-next",
          prevEl: ".product-swiper-prev",
        }}
        breakpoints={{
          1399: { slidesPerView: 6 },
          1199: { slidesPerView: 5 },
          991: { slidesPerView: 4 },
          767: { slidesPerView: 3.5 },
          0: { slidesPerView: 2 },
        }}
        className=" position-relative p-5"
      >
        {relatedproducts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-card h-100 text-center position-relative">
              <div className="product-image-container position-relative overflow-hidden rounded-3 bg-light">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid w-100 primary-img"
                  style={{
                    height: "480px",
                    objectFit: "cover",
                    transition: "0.4s ease",
                  }}
                />

                <img
                  src={item.secondimage}
                  alt={item.name}
                  className="img-fluid w-100 secondary-img position-absolute top-0 start-0 h-100"
                  style={{
                    objectFit: "cover",
                    opacity: 0,
                    transition: "0.4s ease",
                  }}
                />

                <button className="wishlist-btn">
                  <i className="bi bi-heart"></i>
                </button>

                <div className="Relatedpro-actions position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-center gap-2">
                  <button
                    className=" p-1 btn-light rounded-pill border border-0"
                    style={{}}
                  >
                    <i className="bi bi-bag-plus me-2"></i>
                    Add to Cart
                  </button>

                  <button className=" btn btn-light rounded-pill">
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

                <h4 className="fw-semibold text-dark mt-1 mb-2">{item.name}</h4>

                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="fw-bold text-dark ">
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
