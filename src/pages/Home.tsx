import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Trusted from "@/components/home/Trusted";

const Home = () => {
  return (
    <>
      <Hero title="Simple Ecommarce" />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
