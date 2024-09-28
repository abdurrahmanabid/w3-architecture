import Image from "next/image";

const SymbolCard = ({ data }) => {
  return (
    <div className=" flex flex-row gap-20">
      {data.map((item, id) => (
        <div
          key={id}
          className="w-44 h-52 border p-5 flex justify-center items-center flex-col rounded-lg border-[#FB923C] gap-2"
        >
          <Image src={item.symbol} alt="symbol" />
          <div className="text-2xl font-bold">{item.value}</div>
          <div className="font-bold text-gray-500">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SymbolCard;
