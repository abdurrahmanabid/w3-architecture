import hero from "@/assets/imgs/hero.png";
import Image from "next/image";
import ButtonOrange from "../tools/ButtonOrange";

const Hero = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center text-2xl font-bold tracking-widest">
          <h1>Brand New</h1>
          <h1>Group of Architects</h1>
        </div>
        <div className="text-center text-gray-500 text-sm my-4">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in
          </p>
          <p>
            some form, by injected humour, or randomised words which don't look
            even
          </p>
        </div>
        <ButtonOrange />
        <Image src={hero} alt="hero" className="w-6/12 mb-14 rounded-md" />
      </div>
    </div>
  );
};

export default Hero;
