import First from "@/components/layouts/First";
import Fourth from "@/components/layouts/Fourth";
import Last from "@/components/layouts/Last";
import Second from "@/components/layouts/Second";
import Third from "@/components/layouts/Third";

const page = () => {
  return (
    <div className="overflow-hidden">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Last />
    </div>
  );
};

export default page;
