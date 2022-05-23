import { useCart, useNotification, useUser, useWishlist } from "../exports";

const useLogout = () => {
  const { setUser } = useUser();
  const { updateCart } = useCart();
  const { updateWishlist } = useWishlist();
  const { notificationHandler } = useNotification();

  const logout = () => {
    localStorage.clear();
    updateCart({ type: "LOGOUT" });
    updateWishlist({ type: "LOGOUT" });
    setUser({ type: "LOGOUT" });
    notificationHandler("Logged out");
  };

  return { logout };
};

export { useLogout };
