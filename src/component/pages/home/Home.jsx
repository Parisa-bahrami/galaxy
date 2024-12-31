

import EarthScreen from "../../home/planets-screens/EarthScreen";
import JupiterScreen from "../../home/planets-screens/JupiterScreen";
import MarsScreen from "../../home/planets-screens/MarsScreen";
import MercuryScreen from "../../home/planets-screens/MercuryScreen";
import NeptuneScreen from "../../home/planets-screens/NeptuneScreen";
import SaturnScreen from "../../home/planets-screens/SaturnScreen";
import UranusScreen from "../../home/planets-screens/UranusScreen";
import VenusScreen from "../../home/planets-screens/VenusScreen";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden px-6">
      {/* <PlanetSection /> */}
      <MercuryScreen />
      <VenusScreen />
      <EarthScreen />
      <MarsScreen />
      <JupiterScreen />
      <SaturnScreen />
      <UranusScreen />
      <NeptuneScreen />
    </div>
  );
};

export default Home;
