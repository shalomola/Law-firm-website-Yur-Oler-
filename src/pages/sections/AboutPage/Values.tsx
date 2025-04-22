import { IMAGES } from "../../../constants/data";
import Texts from "../../../components/Texts";


const Values = () => {
  return (
    <div className="w-full h-[250vh] lg:h-[120vh] flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 h-1/3 lg:h-full flex flex-col">
        <div className="w-full h-1/2">
          <img src={IMAGES.contract} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-1/2 p-5 lg:p-10 bg-[#A18875] text-[#192026] ">
            <Texts heading="Integrity" />
        </div>
      </div>

      <div className="w-full lg:w-1/3 h-1/3 lg:h-full flex flex-col-reverse lg:flex-col">
        <div className="w-full h-1/2 p-5 lg:p-10 bg-[#192026] text-[#A18875]">
            <Texts heading="Client-Centered" />
        </div>
        <div className="w-full h-1/2">
          <img src={IMAGES.clients} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full lg:w-1/3 h-1/3 lg:h-full flex flex-col ">
        <div className="w-full h-1/2">
          <img src={IMAGES.man2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-1/2 p-5 lg:p-10 bg-[#A18875] text-[#192026]">
            <Texts heading="Excellence & Results" />
        </div>
      </div>
    </div>
  );
};

export default Values;
