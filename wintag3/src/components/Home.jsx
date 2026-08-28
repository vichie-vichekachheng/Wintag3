import { Link } from "react-router-dom";
import Banner from "../assets/banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Products from "../data/product";
import { useCart } from "./CartContext";
import new_pro from "../data/newarrival";
export default function Home() {
  const { addTocart } = useCart();
  const categories = [
    {
      id: "nike",
      name: "Nike",
      subtitle: "Sportswear & Streetwear",
      image:
        "https://media-photos.depop.com/r1/52807660/4550438375_937004e8d1684a96b427a088d9796531/P0.jpg",
      link: "/shop?brand=nike",
      badge: "Popular",
    },
    {
      id: "levis",
      name: "Levi's",
      subtitle: "Classic Denim & Jackets",
      image:
        "https://media-photos.depop.com/b1/345623093/4554022547_0060e39fc3df4dd3a1e0fab6c6dbb1ad/P0.jpg",
      link: "/shop?brand=levis",
      badge: "Essential",
    },
    {
      id: "american-vintage",
      name: "American Vintage",
      subtitle: "Retro Styles & Essentials",
      image:
        "https://media-photos.depop.com/b1/215247260/4554789841_b4e643f9a4c045c4a0b4649061b8bee5/P0.jpg",
      link: "/shop?brand=american-vintage",
      badge: "Trending",
    },
    {
      id: "disney",
      name: "Disney",
      subtitle: "Graphics & Collectibles",
      image:
        "https://media-photos.depop.com/r1/357736344/4533343010_01d1bbee058d44ab876c1b40e7dce6dc/P0.jpg",
      link: "/shop?brand=disney",
      badge: "Featured",
    },
  ];
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
            style={{ letterSpacing: "7px" }}
          >
            SHOP NOW!
          </Link>
        </div>
      </div>
      <div className="container-fluid p-5">
        <section
          class="special text-center fs-5 shadow-lg p-5"
          style={{ lineHeight: "60px" }}
        >
          <h1 className="display-3 text-uppercase">
            What Makes Us So Special?
          </h1>
          <br />

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
      <section className="py-5 my-3 bg-white">
        <div className="container-fluid px-4 px-lg-5">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 className=" display-3 mb-2">SHOP BY BRAND</h2>
              <p className="text-muted fs-4 mb-0">
                Explore collections from your favorite labels
              </p>
            </div>
            <Link
              to="/shop"
              className="btn btn-dark btn-lg rounded-pill px-5 py-3 fs-5 fw-bold d-none d-sm-inline-block"
            >
              View All Brands
            </Link>
          </div>

          <div className="row g-4">
            {categories.map((cat) => (
              <div key={cat.id} className="col-12 col-sm-6 col-lg-3">
                <Link to={cat.link} className="text-decoration-none">
                  <div
                    className="card border-0 rounded-4 overflow-hidden shadow h-100 position-relative group"
                    style={{ minHeight: "450px" }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover transition-transform"
                      style={{
                        transition: "transform 0.4s ease",
                        filter: "brightness(70%)",
                      }}
                    />

                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
                      }}
                    />

                    <div className="position-absolute top-0 start-0 p-4 z-1">
                      <span className="badge bg-light text-dark rounded-pill px-4 py-2 fs-6 fw-bold">
                        {cat.badge}
                      </span>
                    </div>

                    <div className="card-img-overlay d-flex flex-column justify-content-end p-4 p-xl-5 z-1 text-white">
                      <h3 className="display-6 fw-bolder mb-2">{cat.name}</h3>
                      <p className="fs-5 text-white-50 mb-3">{cat.subtitle}</p>
                      <span className="text-white fw-bold fs-5 d-inline-flex align-items-center gap-2">
                        Explore Collection{" "}
                        <i className="bi bi-arrow-right fs-4"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 d-sm-none">
            <Link
              to="/shop"
              className="btn btn-dark btn-lg rounded-pill px-5 py-3 fs-5 fw-bold w-100"
            >
              View All Brands
            </Link>
          </div>
        </div>
      </section>
      <div className="container-fluid p-5">
        <h1 className="display-2 fw-bold text-center">NEW ARRIVALS</h1>
        <hr
          className="mx-auto"
          style={{
            border: "none",
            height: "5px",
            background: "darkred",
            width: "300px",
          }}
        />
        <div className="row p-5 gap-5">
          {new_pro.map((item) => (
            <div
              className="col-md-3 py-4 shadow-sm border rounded-3"
              style={{ width: "330px" }}
              key={item.id}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: "300px", height: "360px" }}
              />
              <hr />
              <div className="mt-2">
                <p className="fs-5 text-muted">Size {item.size}</p>
                <h5 className="text-truncate">{item.name}</h5>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <h4 className="text-warning">${item.price.toFixed(2)}</h4>
                  <div>
                    <button
                      className="btn btn-outline-dark me-2"
                      onClick={() => addTocart(item)}
                    >
                      <Link
                        to={`/newarrivalproducts/${item.id}`}
                        className="text-decoration-none"
                      >
                        <i class="bi bi-eye"></i>
                      </Link>
                    </button>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => addTocart(item)}
                    >
                      <i class="bi bi-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end py-3">
          <button className="btn btn-dark fs-5">
            <Link to="/shop" className="text-decoration-none text-white">
              View More
            </Link>
          </button>
        </div>
        <div className="bg-dark p-3 w-100">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <h1 className="text-light ms-5">WEAR THE ERA</h1>
            <h1 className="text-light ms-5">FIND YOUR SIGNATURE</h1>
            <h1 className="text-light">DISCOVER SOMETHING RARE</h1>
            <h1 className="text-light me-5">MAKE IT YOURS</h1>
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center justify-content-center p-5">
          <div className="row w-100 justify-content-center g-4 gap-5">
            <div className="col-md-3">
              <img
                src="https://rebalancevintage.com/cdn/shop/files/Screenshot2026-01-14at4.27.34PM.png?v=1768426076&width=360"
                alt="Vintage outfit style 1"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  transform: "skew(10deg)",
                }}
              />
            </div>

            <div className="col-md-3 d-flex flex-column gap-3">
              <img
                src="https://img01.ztat.net/article/spp-media-p1/74da0b14116c4e0682328b274f106b3c/4341dd25e7c848e9a75219e9e7ef51b9.jpg?imwidth=762"
                alt="Vintage sweater style 2"
                style={{
                  width: "100%",
                  height: "290px",
                  objectFit: "cover",
                  filter: "brightness(80%)",
                }}
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0003/5871/1337/files/american-vintage-vito-onesize-crewneck-sweater-in-cafe-chine-bliss-boutiques-7074071.jpg?v=1786175604"
                alt="American Vintage Vito crewneck sweater"
                style={{
                  width: "100%",
                  height: "290px",
                  objectFit: "cover",
                  filter: "brightness(75%)",
                }}
              />
            </div>

            <div className="col-md-3">
              <img
                src="https://www.americanvintage-store.com/dw/image/v2/BGNV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7d769f97/images/productPictures/H26/MHOK16BH26/MHOK16BH26-POL-MODEL-1-large.jpg?sw=720&sh=1125"
                alt="American Vintage model outfit"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  filter: "brightness(80%)",
                  transform: "skew(-10deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 d-flex justify-content-between align-items-center">
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
                      style={{}}
                      onClick={() => addTocart(product)}
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
          ),
        )}
      </Swiper>
      <div className="container-fluid p-5 bg-white">
  <div className="text-center mb-5">
    <span className="badge bg-dark text-uppercase px-4 py-2 fs-6 rounded-pill mb-3">
      #OOTD Gallery
    </span>
    <h1 className="display-4 fw-black tracking-tight mb-1">STYLE INSPIRATION</h1>
    <h3 className="text-muted fw-normal fs-4 mb-2">How People Wear It</h3>
    <p className="text-muted fs-5 mb-0">
      Get inspired by real outfits and shop the key pieces
    </p>
  </div>

  
  <div className="row g-4 align-items-center">
  
    <div className="col-12 col-lg-6">
      <div className="card border-0 rounded-4 overflow-hidden shadow-lg position-relative group" style={{ height: "600px" }}>
        <img 
          src="https://vieuxetnouveau-shop.com/cdn/shop/files/DSCF4171_148b2d37-ec8d-4ac0-a4fe-4c0e446113f8.jpg?v=1747045689&width=2400" 
          alt="Style Inspiration Lead" 
          className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
        />
        <div 
          className="position-absolute bottom-0 start-0 w-100 p-4 text-white d-flex justify-content-between align-items-end"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
        >
          <div>
            <span className="badge bg-warning text-dark fw-bold mb-2 fs-6">FEATURED FIT</span>
            <h4 className="text-light mb-0">Everywhere wear</h4>
          </div>
          <button className="btn btn-light rounded-pill px-4 fw-bold shadow-sm">
            Shop Look
          </button>
        </div>
      </div>
    </div>

  
    <div className="col-12 col-lg-6">
      <div className="row g-3">
        <div className="col-6">
          <div className="card border-0 rounded-4 overflow-hidden shadow-sm position-relative" style={{ height: "300px" }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2deOh6ASpRW_Q2Fn-J8R-bS27tfOuyJsW6epIBeOjsUWjqf8CUL3HX3Cb&s=10" 
              alt="Outfit 2" 
              className="w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
              <span className="fw-bold small">Nike Retro</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card border-0 rounded-4 overflow-hidden shadow-sm position-relative" style={{ height: "300px" }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1TMOEQC5tQIqv5RN0HdB4G9i6WnPRTepIPdTT0O8mnAoleFMPGAhInw&s=10" 
              alt="Outfit 3" 
              className="w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
              <span className="fw-bold small">Levi's Denim</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card border-0 rounded-4 overflow-hidden shadow-sm position-relative" style={{ height: "300px" }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvX9yDvIeDjicJ1om2OJ2-AXrUyGlhLqs1lhvMIJhJjQ&s=10" 
              alt="Outfit 4" 
              className="w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
              <span className="fw-bold small">Disney Capsule</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card border-0 rounded-4 overflow-hidden shadow-sm position-relative" style={{ height: "300px" }}>
            <img 
              src="https://www.americanvintage-store.com/dw/image/v2/BGNV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9416096d/images/productPictures/H26/VITO18EH26/VITO18EH26-CHEECHI-MODEL-6-large.jpg?sw=720&sh=1125" 
              alt="Outfit 5" 
              className="w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-2 text-white" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
              <span className="fw-bold small">American Vintage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
