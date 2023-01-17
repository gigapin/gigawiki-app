import Header from "./layout/Header";
import HowToGet from "./website/Home/HowToGet";
import HomeFooter from "./website/Home/HomeFooter";
import Scenario from "./website/Home/Scenario";
import HowItWorks from "./website/Home/HowItWorks";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full">
        <Scenario />
      </div>
      <div className="w-full">
        <HowItWorks />
      </div>
      <div className="w-full">
        <HowToGet />
      </div>
      <div className="w-full">
        <HomeFooter />
      </div>
    </div>
  );
}

export default Home;