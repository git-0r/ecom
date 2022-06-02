import { removeFromWishlistInDB } from "../../api/wishlist";
import {
  Navbar,
  useUser,
  ProductCard,
  useWishlist,
  AddToCartButton,
  useNotification,
  Footer,
} from "../../exports";

const Wishlist = () => {
  const { user } = useUser();
  const { wishlist, updateWishlist } = useWishlist();
  const { notificationHandler } = useNotification();

  const removeFromWishlist = (product) => {
    try {
      if (user) {
        removeFromWishlistInDB(product._id, user);
      }
      updateWishlist({ type: "REMOVE_FROM_WISHLIST", payload: product._id });
    } catch (error) {
      notificationHandler(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <p className="large-heading">Wishlist</p>
      <div className="d-flex flex-center">
        {user ? (
          wishlist.products.length ? (
            <div className="product-list d-flex flex-justify-evenly flex-center">
              {wishlist.products.map((product) => (
                <div
                  key={product._id}
                  className="d-flex flex-dir-column flex-center"
                >
                  <ProductCard product={product} />
                  <div className="d-flex flex-align-center gap-1">
                    <div onClick={() => removeFromWishlist(product)}>
                      <ion-icon name="trash-outline" size="large"></ion-icon>
                    </div>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <img
                src="https://res.cloudinary.com/clouduser/image/upload/c_scale,w_300/v1648733613/cart-is-empty_kspfhu.png"
                alt="empty cart"
              />
            </div>
          )
        ) : (
          <div className="d-flex flex-center">
            <img
              src="https://res.cloudinary.com/clouduser/image/upload/c_scale,w_300/v1648734042/welcome-sign_fbursm.png"
              alt="login"
            />
            <div className="d-flex flex-center">
              <p className="large-heading">Login to view wishlist</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export { Wishlist };
