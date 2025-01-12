import AboutMe from "../../home/planets-screens/AboutMe";
import EarthScreen from "../../home/planets-screens/EarthScreen";
import JupiterScreen from "../../home/planets-screens/JupiterScreen";
import MarsScreen from "../../home/planets-screens/MarsScreen";
import MercuryScreen from "../../home/planets-screens/MercuryScreen";
import NeptuneScreen from "../../home/planets-screens/NeptuneScreen";
import SaturnScreen from "../../home/planets-screens/SaturnScreen";
import UranusScreen from "../../home/planets-screens/UranusScreen";
import VenusScreen from "../../home/planets-screens/VenusScreen";
// import ButtonTop from "../../home/ButtonTop";
import { useRef } from "react";
const Home = () => {
  const containerRef = useRef();
  return (
    <div ref={containerRef} className="w-full overflow-x-hidden px-6 ">
      {/* <ButtonTop containerRef={containerRef} /> */}
      <MercuryScreen />
      <VenusScreen />
      <EarthScreen />
      <MarsScreen />
      <JupiterScreen />
      <SaturnScreen />
      <UranusScreen />
      <NeptuneScreen />

      <AboutMe />
    </div>
  );
};

export default Home;
