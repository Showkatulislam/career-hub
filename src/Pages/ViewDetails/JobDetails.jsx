import { useParams } from "react-router-dom";
import LoadData from "../../hooks/LoadData";
import JDCard from "../../Component/JDCard";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = LoadData();
  const job = jobs?.find((j) => j.id == id);
  return (
    <div className="bg-white px-[100px] py-[130px] grid md:grid-cols-3 gap-6">
      <div className="flex flex-col justify-between space-y-5 md:col-span-2 text-justify">
        <h2>
          <span className="font-bold">Job Description:</span>
          {job?.job_description}
        </h2>
        <h2>
          <span className="font-bold">Job Responsibility: </span>
          {job?.job_responsibility}
        </h2>
        <h1 className="font-bold">Educational Requirements:</h1>
        <p>{job?.job_eQ}</p>
        <h1 className="font-bold">Experiences</h1>
        <p>{job?.experiences}</p>
      </div>
      <div>
        <JDCard job={job}></JDCard>
      </div>
    </div>
  );
};

export default JobDetails;
