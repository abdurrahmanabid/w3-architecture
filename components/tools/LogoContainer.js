import Image from "next/image";

const LogoContainer = ({ logo }) => {
  return (
    <div className="flex gap-20">
      {logo.map((item, id) => (
        <Image
          src={item.logo}
          alt="log"
          key={id}
          loading="lazy"
          className="filter grayscale hover:grayscale-0"
        />
      ))}
    </div>
  );
};

export default LogoContainer;
