import Header from "./layout/Header";
import Features from "./website/Home/Features";
import HowToGet from "./website/Home/HowToGet";
import HomeFooter from "./website/Home/HomeFooter";
import Scenario from "./website/Home/Scenario";

const Home = () => {
  return (
    <>
    <Header />
    <div className="bg-gradient-to-l from-neutral-50 via-stone-100 to-neutral-200">
      <Scenario />
    </div>
    <div className="bg-gradient-to-l from-neutral-50 via-stone-100 to-neutral-200">
      <Features />
    </div>
    <div className="bg-gradient-to-l from-neutral-100 via-stone-200 to-neutral-50">
      <HowToGet />
    </div>
    <div className="">
      <HomeFooter />
    </div>
    </>
  );
}

export default Home;