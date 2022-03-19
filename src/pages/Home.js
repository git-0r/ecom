import { useEffect } from "react";
import { getProducts } from "../api-calls";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroVideo from "../components/IntroVideo";
import Navbar from "../components/Navbar";
import NewArrivals from "../components/NewArrivals";
import PopularCategory from "../components/PopularCategory";
import { useFetchProducts } from "./products-context";

const Home = () => {

  const [products, setProducts] = useFetchProducts();

  useEffect(() => {
    // Get data from server and update state
    getProducts()
      .then(
        data => setProducts(data)
      )
  }, [setProducts])

  return (
    <div className="page-container">
      <Navbar />
      <Header />
      <IntroVideo />
      <NewArrivals />
      <PopularCategory category={"red"} products={products?.red} />
      <Banner />
      <PopularCategory category={"white"} products={products?.white} />
      <Footer />
    </div>
  );
};

export default Home;
