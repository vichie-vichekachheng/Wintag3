import logo from '../assets/translogo.png'
export default function Footer() {
  return (
    <>
    <hr />
         <footer className="bg-light text-dark pt-5 pb-4 mt-5 border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4" >
           <img src={logo} alt="" style={{width:"130px"}} />
            <p className="mt-3">
              Curated classics for those who dress outside the lines. Old-school character, 
              and a little bit of edge.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="fw-bold text-uppercase mb-3">Shop</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="/shop" className="text-dark text-decoration-none">All Products</a></li>
              <li><a href="/shop" className="text-dark text-decoration-none">New Arrivals</a></li>
              <li><a href="/shop" className="text-dark text-decoration-none">Popular Thrifts</a></li>
              <li><a href="/shop" className="text-dark text-decoration-none">Deals</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="fw-bold text-uppercase mb-3">Help</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#about" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#contact" className="text-dark text-decoration-none">Contact Us</a></li>
              <li><a href="#shipping" className="text-dark text-decoration-none">Shipping Policy</a></li>
              <li><a href="#returns" className="text-dark text-decoration-none">Returns & Exchanges</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-uppercase mb-3">Follow Us</h5>
            <p>Stay connected for daily thrift drops and updates.</p>
            <div className="d-flex gap-3 fs-3 mt-3">
              <a href="#instagram" className="text-dark text-decoration-none" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#facebook" className="text-dark text-decoration-none" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#tiktok" className="text-dark text-decoration-none" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="#twitter" className="text-dark text-decoration-none" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <p className="mb-2 mb-sm-0">
            © {new Date().getFullYear()} WINTAG3. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a href="#privacy" className="text-dark text-decoration-none">Privacy Policy</a>
            <a href="#terms" className="text-dark text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </>
   
  );
}