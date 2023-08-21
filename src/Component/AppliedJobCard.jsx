import { Link } from "react-router-dom";
import locationlogo from "../assets/Icons/Frame-4.png";
import sIcon from "../assets/Icons/Frame.png";
import Button from "./Button";

const AppliedJobCard = ({cd}) => {
    const {id,img,title,branch,type,duration,location,salary}=cd
    return (
        <div className="grid md:grid-cols-5 gap-6 items-center my-8 p-4 border bg-white ">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="col-span-3 space-y-1">
                <h1 className="font-bold">{title}</h1>
                <p>{branch}</p>
                <button className="border-purple-500 border p-1 rounded mr-2">{type}</button>
                <button className="border-purple-500 border p-1 rounded mr-2">{duration}</button>
                <div className="flex space-x-2">
                    <img className="w-5 h-5" src={locationlogo} alt="" srcSet="" />
                    <p>{location}</p>
                    <img className="w-5 h-5" src={ sIcon} alt="" srcSet="" />
                    <p>{salary}</p>
                </div>
            </div>
            <div>
               <Link to={`/viewdetails/${id}`}> <Button>View Details</Button></Link>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AppliedJobCard;