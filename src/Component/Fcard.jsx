import { Link } from "react-router-dom";
import Button from "./Button";
import { FaSearchLocation,FaMoneyCheck } from "react-icons/fa";
const Fcard = ({ job }) => {
  const { id,company_log, job_title, job_type, job_duration,location,salary} = job;
  return (
    <div className="border p-4 space-y-3">
      <img className="w-28 h-10" src={company_log} alt="" />
      <p>{job_title}</p>
      <div className="space-x-4">
        <button className="border-blue-700 border-2 px-3 rounded-md">
          {job_type}
        </button>
        <button className="border-blue-700 border-2 px-3 rounded-md">
          {job_duration}
        </button>
      </div>
      <div className="flex space-x-3 border rounded items-center mx-2">
        <FaSearchLocation></FaSearchLocation>
        <span>{location}</span>
        <FaMoneyCheck></FaMoneyCheck>
        <span>{salary}</span>
      </div>
      <Link to={`/viewdetails/${id}`}> <Button >View Details</Button></Link>
    </div>
  );
};

export default Fcard;
