import girl from "@/assets/imgs/girl.png";
import Image from "next/image";
import { Button } from "../ui/button";

const ThirdRight = () => {
  return (
    <div>
      <div className="w-[450px]">
        <Image src={girl} alt="girl" className="pl-20" />
        <div className="relative bottom-10 left-10">
          <Button className="flex flex-col p-10 bg-[#FB923C]">
            <h1 className="text-xl font-bold">10 Years+</h1>
            <h4>Expriences</h4>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThirdRight;
