import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import GetAuthData from "../hooks/authdata";

const Header = () => {
  const [active, setActive] = useState(1);
  const {user,LogOut}=GetAuthData()
  const navigate=useNavigate();
  const removeUser=()=>{
    LogOut()
    .then(()=>{
      navigate("/")
    }).catch((err)=>{
      console.log(err.message);
    })
  }
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
        <li
          onClick={() => setActive(4)}
          className={`${active == 3 ? "text-purple-400" : "black"}`}
        >
          {
            user?.uid?<button onClick={removeUser} className="bg-transparent border-2 border-purple-400 rounded-lg px-2 hover:bg-slate-400">logOut</button>:<Link to="/login">Login</Link>
          }
        </li>
      </div>
      <div>
        <Button>Star Applying</Button>
      </div>
    </div>
  );
};

export default Header;
