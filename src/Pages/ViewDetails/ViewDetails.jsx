import Banner from "../../Component/Banner";
import JobDetails from "./JobDetails";


const ViewDetails = () => {
    return (
        <div >
            <Banner text={"Job Details"}></Banner>
            <JobDetails></JobDetails>
        </div>
    );
};

export default ViewDetails;