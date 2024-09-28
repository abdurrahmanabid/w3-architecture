const Header = ({ head, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-sans font-bold">{head}</h1>
      <p className="text-sm text-gray-500 w-96">{description}</p>
    </div>
  );
};

export default Header;
