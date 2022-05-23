import "./home.css";

import {
  Banner,
  Footer,
  Header,
  Navbar,
  IntroVideo,
  NewArrivals,
  PopularCategory,
} from "../../exports";

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

export { Home };
