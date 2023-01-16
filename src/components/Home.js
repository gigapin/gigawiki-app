import Header from "./layout/Header";
import HowToGet from "./website/Home/HowToGet";
import HomeFooter from "./website/Home/HomeFooter";
import Scenario from "./website/Home/Scenario";
import HowItWorks from "./website/Home/HowItWorks";

const Home = () => {
  return (
    <div className="w-full bg-neutral-50 dark:bg-slate-800">
      <Header />
      <div className="w-full bg-neutral-50 dark:bg-slate-800">
        <Scenario />
      </div>
      <div className="w-full bg-neutral-50 dark:bg-slate-800">
        <HowItWorks />
      </div>
      <div className="w-full bg-neutral-50 dark:bg-slate-800">
        <HowToGet />
      </div>
      <div className="w-full bg-neutral-50 dark:bg-slate-800">
        <HomeFooter />
      </div>
    </div>
  );
}

export default Home;