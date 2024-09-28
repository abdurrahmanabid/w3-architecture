import amazon from "@/assets/logo/amazon.png";
import figma from "@/assets/logo/figma.png";
import google from "@/assets/logo/google.png";
import spotify from "@/assets/logo/spotify.png";
import telerama from "@/assets/logo/telerama.png";
import Copyright from "../tools/Copyright";
import Header from "../tools/Header";
import LogoContainer from "../tools/LogoContainer";

const Last = () => {
  const logo = [
    {
      logo: amazon,
    },
    {
      logo: figma,
    },
    {
      logo: spotify,
    },
    {
      logo: google,
    },
    {
      logo: telerama,
    },
  ];
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col gap-20">
      <Header
        head={"Our Sponsors"}
        description={`
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.`}
      />
      <LogoContainer logo={logo} />
      <Copyright />
    </div>
  );
};

export default Last;
