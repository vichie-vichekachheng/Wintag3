import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";
export default function Cart() {
  const {
    cartItems,
    addTocart,
    removeFromCart,
    Updatedqty,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold mb-3">Your Cart is Empty</h2>
        <p className="text-muted mb-4">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/shop" className="btn btn-dark btn-lg rounded-pill px-4">
          Continue Shopping
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="container-fluid shadow-sm p-3 ">
        <div className="row p-3">
          <div className="col-md-8 p-5 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <h1>Shopping Cart({totalItems})</h1>
              <div>
                <button
                  className="btn btn-danger me-5"
                  onClick={() => clearCart(cartItems)}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-3">
              <div className="table-responsive">
                <table className="table align-items-center">
                  <thead>
                    <tr className="text-muted">
                      <th scope="col" className="pb-3 border-0 fs-5">
                        Product
                      </th>
                      <th scope="col" className="pb-3 border-0 fs-5">
                        Quantity
                      </th>
                      <th scope="col" className="pb-3 border-0 fs-5">
                        Price
                      </th>
                      <th scope="col" className="pb-3 border-0 fs-5">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-bottom">
                        <td className="py-3 border-0">
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.image}
                              alt=""
                              style={{
                                width: "85px",
                                height: "85px",
                                borderRadius: "10px",
                              }}
                            />
                            <div>
                              <p>{item.brand}</p>
                              <p className="text-muted">{item.name}</p>
                              <p className="text-muted">Size : {item.size}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-secondary rounded-5"
                            onClick={() => Updatedqty(item.id, item.qty + 1)}
                          >
                            +
                          </button>
                          <span className="m-2">{item.qty}</span>
                          <button
                            className="btn btn-outline-secondary rounded-5"
                            onClick={() => Updatedqty(item.id, item.qty - 1)}
                          >
                            -
                          </button>
                        </td>

                        <td>
                          <h5>
                            ${Number(item.price * item.qty || 0).toFixed(2)}
                          </h5>
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-5 shadow-lg">
            <h2>Order Summary</h2><hr />
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted fs-5">Subtotal</span>
              <span className="fw-semibold fs-5">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span className="text-muted  fs-5">Shipping</span>
              <span className="text-success fw-semibold fs-5">Free</span>
            </div>

            <hr className="my-3 text-muted opacity-25" />

            <div className="d-flex justify-content-between mb-4">
              <span className="fw-bold fs-3">Total</span>
              <span className="fw-bold fs-3 text-dark">
                ${totalPrice.toFixed(2)}
              </span>
               
            </div><br />
             <button className="btn btn-dark w-100 fs-5 rounded-4"><Link to="/checkout" className="text-white text-decoration-none">Proceed to Check Out</Link></button>
          </div>
        
        </div>
      </div>
    </>
  );
}
