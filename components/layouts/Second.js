import img1 from "@/assets/imgs/1.png";
import img2 from "@/assets/imgs/2.png";
import img3 from "@/assets/imgs/3.png";
import img4 from "@/assets/imgs/4.png";
import Image from "next/image";
import ButtonOrange from "../tools/ButtonOrange";
const Second = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="flex gap-10 justify-center items-center">
        {/* image gallery */}
        <div className="flex gap-4">
          <div className=" grid gap-4">
            <div className="w-[200px] rounded-lg ">
              <Image src={img1} alt="first image" />
            </div>
            <div className="w-[200px] rounded-lg ">
              <Image src={img2} alt="first image" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="w-[200px] rounded-lg ">
              <Image src={img3} alt="first image" />
            </div>
            <div className="w-[200px] rounded-lg ">
              <Image src={img4} alt="first image" />
            </div>
          </div>
        </div>
        {/* text */}
        <div className="flex flex-col gap-6">
          <div className="grid gap-1">
            <div>
              <h1 className="text-2xl font-bold">
                <span className="italic font-medium text-gray-500 font-sans mr-1">
                  Quick List
                </span>
                of Our
              </h1>
            </div>
            <div className="text-[#ff900e] text-2xl font-bold">Features.</div>
          </div>
          <div className="text-gray-400 text-sm font-sans">
            <p>
              There are many variations of passages of Lorem Ipsum available,
            </p>
            <p>
              but the majority have suffered alteration in some form, by
              injected
            </p>
            <p>humour, or randomised words which don't look even</p>
          </div>
          <div>
            <ButtonOrange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
