import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper d-flex">
        <div className="left">
          <p className="title">W&S</p>
          <p>
            w&s is dedicated to 100% customer delight ensuring that everything
            from placing your order to delivering it right to your doorstep is
            smooth and hassle-free. Follow us on
          </p>
          <div className="d-flex flex-justify-evenly">
            {["facebook", "instagram", "twitter", "youtube", "reddit"].map(
              (el) => (
                <div key={el}>
                  <ion-icon name={`logo-${el}`} size="large" />
                </div>
              )
            )}
          </div>
        </div>
        <div className="center">
          <p className="title">Useful Links</p>
          <ul className="list">
            {[
              "About Us",
              "FAQ",
              "Affiliates",
              "Brands",
              "Privacy Policy",
              "My Account",
              "Order History",
              "Wishlist",
              "Terms & Conditions",
              "Refund Policy",
            ].map((el) => (
              <li className="list-item" key={el}>
                <ion-icon name="caret-forward-outline"></ion-icon> {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <p className="title">Contact Us</p>
          <div className="contact-item d-flex flex-align-center gap-1">
            <ion-icon name="location" size="large"></ion-icon>
            65-a, Khan Market, New Delhi-110003
          </div>
          <div className="contact-item d-flex flex-align-center gap-1">
            <ion-icon name="call" size="large"></ion-icon>
            +91 0123 4567 89
          </div>
          <div className="contact-item d-flex flex-align-center gap-1">
            <ion-icon name="mail" size="large"></ion-icon>
            contact@business.com
          </div>
          <img
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="payment options"
          />
        </div>
      </div>
      <p className="copyright">
        All the images, and graphics used belong to their respective owners .
      </p>
    </footer>
  );
};

export { Footer };
