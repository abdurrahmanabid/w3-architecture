import FlatCard from "./FlatCard";

const ThirdLeft = () => {
  const text =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........";
  return (
    <div className="grid gap-4">
      {/* Heading */}
      <div className="border-l-8 border-orange-400 pl-3 font-sans text-2xl font-bold">
        <h1>Features you will</h1>
        <h1>Love & Enjoy</h1>
      </div>
      <div className="text-gray-500 text-sm">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
        </p>
        <p>the majority have suffered alteration in some form, by injected</p>
        <p>humour, or randomised words which don't look even</p>
      </div>
      <div className="grid gap-3">
        <FlatCard title="Dexktop & Mobile Version" text={text} />
      </div>
      <div>
        <FlatCard title="Drag & Drop Builder" text={text} />
      </div>
      <div>
        <FlatCard title=" Awesome Modern Design" text={text} />
      </div>
    </div>
  );
};

export default ThirdLeft;
