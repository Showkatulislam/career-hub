import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(1);
  return (
    <div
      className="
    sm:block
    md:flex
    justify-between
    md:px-40
    px-32
    py-4
    items-center
    "
    >
      <div
        className="
      text-2xl
      font-bold"
      >
        <Link>CareerHub</Link>
      </div>
      <div
        className="md:flex
        items-center 
        list-none md:space-x-4 text-xl "
      >
        <li
          onClick={() => setActive(1)}
          className={`${active == 1 ? "text-purple-400" : "black"}`}
        >
          <Link to={"/statistic"}>Statistics</Link>
        </li>
        <li
          onClick={() => setActive(2)}
          className={`${active == 2 ? "text-purple-400" : "black"}`}
        >
          <Link to="/appliedjob">Applied Jobs</Link>
        </li>
        <li
          onClick={() => setActive(3)}
          className={`${active == 3 ? "text-purple-400" : "black"}`}
        >
          <Link to="/block">Blog</Link>
        </li>
      </div>
      <div>
        <Button>Star Applying</Button>
      </div>
    </div>
  );
};

export default Header;
