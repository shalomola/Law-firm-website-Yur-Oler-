import Card from "../../../components/Card";
import { IMAGES } from "../../../constants/data";

const ExpertsList = () => {
  return (
    <div className="w-full p-5 lg:p-10 ">
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full h-auto">
        <Card
          picture={IMAGES.man}
          name="Agbaje Emmanuel"
          denomination="Corporate Business Law"
          extraStyles=""
        />
        <Card
          picture={IMAGES.woman}
          name="Fajuagbe Esther"
          denomination="Criminal Law"
          extraStyles="lg:display-block"
        />
        <Card
          picture={IMAGES.man}
          name="Agbaje Emmanuel"
          denomination="Corporate Business Law"
          extraStyles=""
        />
        <Card
          picture={IMAGES.woman}
          name="Fajuagbe Esther"
          denomination="Criminal Law"
          extraStyles="lg:display-block"
        />
        <Card
          picture={IMAGES.man}
          name="Agbaje Emmanuel"
          denomination="Corporate Business Law"
          extraStyles=""
        />
        <Card
          picture={IMAGES.woman}
          name="Fajuagbe Esther"
          denomination="Criminal Law"
          extraStyles="lg:display-block"
        />
      </div>
    </div>
  );
};

export default ExpertsList;
