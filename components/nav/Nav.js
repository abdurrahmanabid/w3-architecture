import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-between items-center mx-32 pt-5">
      {/* logo */}
      <div className="text-2xl font-semibold ">
        <h1>G3 Architecture</h1>
      </div>
      {/* navlink */}
      <div className="flex list-none gap-10 text-gray-700 font-bold  font-sans text-sm ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/"}>Login</Link>
        </li>
      </div>
    </div>
  );
};

export default Nav;
