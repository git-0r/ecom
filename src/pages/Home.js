import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroVideo from "../components/IntroVideo";
import Navbar from "../components/Navbar";
import NewArrivals from "../components/NewArrivals";
import PopularCategory from "../components/PopularCategory";

const Home = () => {

  return (
    <div className="page-container">
      <Navbar />
      <Header />
      <IntroVideo />
      <NewArrivals />
      <PopularCategory category="red" limit={4} />
      <Banner />
      <PopularCategory category="white" limit={4} />
      <Footer />
    </div>
  );
};

export default Home;
