const Navbar = () => {
    return (
        <nav className="navbar d-flex flex-justify-evenly flex-align-center">
            <div className="nav-section-left logo d-flex flex-justify-evenly">
                <ion-icon name="beer-outline"></ion-icon>
                wine & spirits
            </div>
            <div className="nav-section-center d-flex flex-justify-evenly">
                <p className="d-flex flex-justify-evenly flex-align-center">Shop
                    <ion-icon name="caret-down-outline"></ion-icon>
                </p>
                <p className="d-flex flex-justify-evenly flex-align-center">Our wines
                    <ion-icon name="caret-down-outline"></ion-icon>
                </p>
                <p>About us</p>
                <p>Blog</p>
            </div>
            <div className="nav-section-right d-flex flex-justify-evenly">
                <div className="badge">
                    <div className="badge-icon">
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <span className="badge-md badge-primary">0</span>
                </div>
                <ion-icon name="cart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </nav>
    )
}

export default Navbar