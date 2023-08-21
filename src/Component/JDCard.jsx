import logo1 from "../assets/Icons/Frame.png";
import logo2 from "../assets/Icons/Frame-1.png";
import logo3 from "../assets/Icons/Frame-2.png";
import logo4 from "../assets/Icons/Frame-3.png";
import { Link } from "react-router-dom";
const JDCard = ({ job }) => {
  return (
    <div className="bg-sky-100 p-3">
      <h1 className="font-bold">Job Details</h1>
      <hr className="my-2 bottom-2 border-black" />
      <div className="flex  my-2">
        <img className="w-5 h-5" src={logo1} alt="" srcSet="" />
        <span>Salary</span>
        <p>{job?.salary}(per month)</p>
      </div>
      <div className="flex space-x-2 my-2">
        <img className="w-5 h-5" src={logo2} alt="" srcSet="" />
        <span>Job Title</span>
        <p className="truncate">Product Designer</p>
      </div>
      <h1 className="font-bold">Contact Information</h1>
      <hr className="my-2 bottom-2 border-black" />
      <div className="flex space-x-2 my-2">
        <img className="w-5 h-5" src={logo3} alt="" srcSet="" />
        <span>Phone</span>
        <p className="truncate">{job?.contact.Phone}</p>
      </div>
      <div className="flex space-x-2 my-2">
        <img className="w-5 h-5" src={logo4} alt="" srcSet="" />
        <span>Email:</span>
        <p className="truncate">{job?.contact.Email}</p>
      </div>
      <div className="flex space-x-2 my-2">
        <img className="w-5 h-5" src={logo4} alt="" srcSet="" />
        <span>Email:</span>
        <p className="truncate">{job?.contact.Email}</p>
      </div>
      <Link to="/appliedjob">
        <button
          className="bg-gradient-to-r
         from-purple-400
          to-purple-800
          text-white
          py-2
          px-16
          rounded"
        >
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JDCard;
