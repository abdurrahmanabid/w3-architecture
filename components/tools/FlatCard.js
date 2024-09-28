const FlatCard = ({ title, text }) => {
  return (
    <div className="flex flex-col w-[480px] rounded-lg hover:shadow-none  shadow-lg py-2 px-5 gap-1">
      <div className=" font-bold">{title}</div>
      <div className="text-sm text-gray-500">{text}</div>
    </div>
  );
};

export default FlatCard;
