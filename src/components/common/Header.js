const Header = () => {
  return (
    <header className="header">
      <p className="header-text">
        wine & spirits{" "}
        <a
          href="#popular-products"
          className="popular-products-link btn btn-primary"
        >
          Shop Now
        </a>
      </p>
      <img
        className="header-wine-bottle"
        src="https://res.cloudinary.com/clouduser/image/upload/v1647356235/Mockup-final1_to0fv8.png"
        alt="header"
      />
    </header>
  );
};

export { Header };
