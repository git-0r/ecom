const NewArrivals = () => {
    return (
        <>
            <p className="large-heading">Sip.Savor.Repeat</p>
            <section className="new-arrivals d-flex flex-justify-between">
                <div className="new-product new-product1">
                    <img
                        className="new-product-image"
                        src="https://res.cloudinary.com/clouduser/image/upload/v1647355967/Mockup-final_sslnhz.png"
                        alt="new arrivals"
                    />
                    <div className="new-product-desc">
                        <p className="new-arrival-tag">New Arrival</p>
                        <p className="new-product-name">Merlot Red</p>
                        <p className="new-product-about">
                            Merlot is a dark blue-colored wine grape variety, that is used as
                            both a blending grape and for varietal wines.
                        </p>
                    </div>
                </div>
                <div className="new-product new-product2">
                    <img
                        className="new-product-image"
                        src="https://res.cloudinary.com/clouduser/image/upload/v1647441303/Mockup1_cg45zi.png"
                        alt="new arrivals"
                    />
                    <div className="new-product-desc">
                        <p className="new-arrival-tag">New Arrival</p>
                        <p className="new-product-name">Cabernet Sauvignon</p>
                        <p className="new-product-about">
                            Cabernet Sauvignon is one of the world's most widely recognized
                            red wine grape varieties.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrivals