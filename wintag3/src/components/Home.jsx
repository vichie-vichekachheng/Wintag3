import { Link } from "react-router-dom";
import Banner from "../assets/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Products from "../data/product";
import { useCart } from "./CartContext";
export default function Home() {
  const {addTocart}=useCart()
  return (
    <>
      <div className="container-fluid d-lg-none p-0 position-relative">
        <img
          src={Banner}
          alt="Banner"
          className="w-100 object-fit-cover"
          style={{ height: "450px", filter: "brightness(58%)" }}
        />

        <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
          <h2 className="fw-bold fs-3">NO RULES. JUST STYLE.</h2>
          <h4 className="fw-semibold fs-6 text-uppercase">
            Vintage Pieces. Bold Attitude.
          </h4>
          <p className="small my-2 px-2">
            Curated classics for those who dress outside the lines. Old-school
            character, timeless style, and a little bit of edge.
          </p>
          <h3 className="fw-bold fs-5 mb-3">WEAR IT YOUR WAY.</h3>

          <Link
            to="/shop"
            className="btn btn-light btn-sm text-dark fw-bold px-4 py-2"
          >
            SHOP NOW!!
          </Link>
        </div>
      </div>
      <div className="container-fluid d-lg-flex d-none">
        <img
          src={Banner}
          alt=""
          style={{ width: "100%", height: "870px", filter: "brightness(54%)" }}
        />

        <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
          <h1 className="fw-bold display-3">NO RULES. JUST STYLE.</h1>
          <br />
          <h1 className="fw-semibold">VINTAGE PIECES. BOLD ATTITUDE.</h1>
          <p className="lead my-3">
            Curated classics for those who dress outside the lines. Old-school
            character, timeless style, and a little bit of edge.
          </p>
          <h2 className="fw-bold mb-4">WEAR IT YOUR WAY.</h2>
          <br />

          <Link
            to="/shop"
            className="btn btn-light btn-lg  fs-2 text-dark fw-bold rounded-0 px-4 py-2"
          style={{letterSpacing:"7px"}}>
            SHOP NOW!
          </Link>
        </div>
      </div>
       <div className="container-fluid p-5">
        <section class="special text-center fs-5 shadow-lg p-5" style={{lineHeight:"60px"}}>
          <h1 className="display-3 text-uppercase">What Makes  Us So Special?</h1><br />

          <p>
            We believe great style shouldn't have to cost more. That's why we
            offer <strong className="fs-3">25% to 75% off every day </strong>
            on our carefully selected vintage pieces.
          </p>

          <p>
            Discover
            <strong> unique finds, limited pieces, and timeless styles</strong>
            that you won't find anywhere else. We're always adding new items, so
            there's always something exciting to discover.
          </p>

          <p>
            <h2>Shop more. Save more. Stand out.</h2>
          </p>
        </section>
      </div>
      <div className="p-5 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="display-3">POPULAR THRIFTS</h1>
          <hr className="w-50" />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-dark product-swiper-prev">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="btn btn-outline-dark product-swiper-next">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
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
        {Products.filter((product) => product.id >= 1 && product.id <= 20).map(
          (product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card h-100 text-center position-relative">
                <div className="product-image-container position-relative overflow-hidden rounded-3 bg-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid w-100 primary-img"
                    style={{
                      height: "480px",
                      objectFit: "cover",
                      transition: "0.4s ease",
                    }}
                  />

                  <img
                    src={product.secondimage}
                    alt={product.name}
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

                  <div className="product-actions position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-center gap-2">
                    <button
                      className=" p-1 btn-light rounded-pill border border-0"
                      style={{}} onClick={()=> addTocart(product)}
                    >
                      <i className="bi bi-bag-plus me-2"></i>
                      Add to Cart
                    </button>

                    <button className=" btn btn-light rounded-pill">
                      <i className="bi bi-eye me-2"></i>
                      <Link
                        to={`/product/${product.id}`}
                        className="text-dark text-decoration-none"
                      >
                        Quick View
                      </Link>
                    </button>
                  </div>
                </div>

                <div className="product-details py-3 text-start">
                  <small className="text-secondary text-uppercase">
                    Vintage Collection
                  </small>

                  <h4 className="fw-semibold text-dark mt-1 mb-2">
                    {product.name}
                  </h4>

                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="fw-bold text-dark mb-0">
                      ${product.price.toFixed(2)}
                    </h3>

                    <span className="text-secondary">Size: {product.size}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
     
    </>
  );
}
