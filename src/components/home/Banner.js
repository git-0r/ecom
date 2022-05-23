const Banner = () => {
  return (
    <div className="homepage-banner d-flex flex-justify-between flex-align-center">
      <img
        className="banner-image"
        src="https://res.cloudinary.com/clouduser/image/upload/v1647441303/Mockup1_cg45zi.png"
        alt="banner"
      />
      <div className="banner-info">
        <p className="banner-heading">French</p>
        <p className="banner-heading">Malbec</p>
        <p className="banner-about">
          Cabernet Sauvignon is one of the world's most widely recognized red
          wine grape varieties.
        </p>
      </div>
    </div>
  );
};

export { Banner };
