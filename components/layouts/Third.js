import ThirdLeft from "../tools/ThirdLeft";
import ThirdRight from "../tools/ThirdRight";

const Third = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex items-center justify-center gap-6">
        <div>
          <ThirdLeft />
        </div>
        <div>
          <ThirdRight />
        </div>
      </div>
    </div>
  );
};

export default Third;
