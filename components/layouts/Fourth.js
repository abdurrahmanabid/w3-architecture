import award from "@/assets/icons/award.png";
import client from "@/assets/icons/client.png";
import email from "@/assets/icons/email.png";
import project from "@/assets/icons/project.png";
import Header from "../tools/Header";
import SymbolCard from "../tools/SymbolCard";

const cardInfo = [
  {
    symbol: award,
    value: 54,
    title: "Award Wining",
  },
  {
    symbol: client,
    value: 5647,
    title: "Clinets",
  },
  {
    symbol: email,
    value: 74637,
    title: "Email Sends",
  },
  {
    symbol: project,
    value: 954,
    title: "Project Work",
  },
];

const Fourth = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-14">
      <Header
        head={"Some Facts"}
        description={`
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.`}
      />
      <SymbolCard data={cardInfo} />
    </div>
  );
};

export default Fourth;
