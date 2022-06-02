import "./Navbar.css";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { searchFor } from "../../api/search";

import { useCart, useUser, useLogout, useWishlist } from "../../exports";

const Navbar = () => {
  const { user } = useUser();
  const { cart } = useCart();
  const { logout } = useLogout();
  const { wishlist } = useWishlist();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    results: null,
    isSearching: false,
    timer: null,
  });

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    clearInterval(searchResults?.timer);
    if (query) {
      setSearchResults((state) => {
        return { ...state, isSearching: true };
      });
      const id = setTimeout(async () => {
        const data = await searchFor(query);
        setSearchResults((state) => {
          return { ...state, isSearching: false, results: data };
        });
      }, 2000);
      setSearchResults((state) => {
        return { ...state, timer: id };
      });
    } else {
      setSearchResults((state) => {
        return { ...state, isSearching: false };
      });
    }
  }, [query]);

  const clearResults = () => {
    setQuery("");
    setSearchResults({ results: null, isSearching: false, timer: null });
  };

  return (
    <nav className="top-navigation d-flex flex-justify-evenly flex-align-center">
      <Link className="react-router-link left" to="/">
        <div className="logo d-flex flex-center">
          w&s
          <ion-icon name="beer-outline"></ion-icon>
        </div>
      </Link>
      <form className="center d-flex flex-center">
        <input
          className="search-input"
          type="text"
          placeholder="search..."
          onChange={updateQuery}
          value={query}
        />
        {query && (
          <div className="search-results">
            {searchResults?.isSearching ? (
              <p className="search-result text-align-center">searching...</p>
            ) : searchResults?.results?.length === 0 ? (
              <p className="search-result text-align-center">
                No matches found.
              </p>
            ) : (
              <>
                {searchResults?.results?.map((product) => (
                  <Link
                    to={`/product/${product?._id}`}
                    className="search-result react-router-link"
                    onClick={clearResults}
                    key={product?._id}
                  >
                    {product?.title}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </form>
      <div className="right d-flex flex-justify-evenly flex-align-center">
        <div className="usermenu">
          <ion-icon name="person-circle-outline"></ion-icon>

          <ul className="styled-list usermenu-options">
            {user ? (
              <li className="d-flex flex-center gap-1" onClick={() => logout()}>
                <ion-icon
                  name="exit-outline"
                  className="usermenu-icon"
                ></ion-icon>
                <p className="usermenu-option">logout</p>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="d-flex flex-center gap-1 react-router-link"
                >
                  <ion-icon
                    name="log-in-outline"
                    className="usermenu-icon"
                  ></ion-icon>
                  <p className="usermenu-option">login</p>
                </Link>
              </li>
            )}
            <li className="d-flex flex-center gap-1">
              <ion-icon name="person-outline"></ion-icon>
              <p className="usermenu-option">profile</p>
            </li>
          </ul>
        </div>
        <Link className="badge react-router-link" to="/wishlist">
          <div className="badge-icon">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          {wishlist?.products?.length > 0 && (
            <span className="badge-md badge-primary">
              {wishlist?.products?.length}
            </span>
          )}
        </Link>
        <Link to="/cart" className="badge react-router-link">
          <div className="badge-icon">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
          {cart.products?.length > 0 && (
            <span className="badge-md badge-primary">
              {cart.products?.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
