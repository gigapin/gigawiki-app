import Header from "./layout/Header";
//import Features from "./website/Home/Features";
import HowToGet from "./website/Home/HowToGet";
import HomeFooter from "./website/Home/HomeFooter";
import Scenario from "./website/Home/Scenario";
import HowItWorks from "./website/Home/HowItWorks";

const Home = () => {
  return (
    <div className="mx-auto bg-gradient-to-r from-white via-zinc-200 to-gray-50">
      <Header />
      <div className="bg-gradient-to-l from-neutral-50 via-stone-100 to-neutral-200">
        <Scenario />
      </div>
      <div className="bg-gradient-to-l from-neutral-100 via-stone-200 to-neutral-50">
        <HowItWorks />
      </div>
      <div className="bg-gradient-to-l from-neutral-50 via-stone-100 to-neutral-200">
        <HowToGet />
      </div>
      <div className="">
        <HomeFooter />
      </div>
    </div>
  );
}

export default Home;