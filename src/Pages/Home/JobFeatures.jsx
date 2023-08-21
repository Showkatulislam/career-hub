import SectionTitle from "../../Component/SectionTitle";
import LoadData from "../../hooks/LoadData";
import Fcard from "../../Component/Fcard";
import { useEffect, useState } from "react";
import Button from "../../Component/Button";

const JobFeatures = () => {
  const jobs = LoadData();
  const [more, setMore] = useState(false);
  let showJob = jobs.slice(0, 4);
  useEffect(() => {}, [more]);
  if (more) {
    showJob = jobs;
  } else {
    showJob = jobs.slice(0, 4);
  }
  return (
    <div className="my-8">
      <SectionTitle
        title={"Featured Jobs"}
        subTitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></SectionTitle>
      <div>
        <div className="grid md:grid-cols-2 m-6 gap-10">
          {showJob.map((data) => (
            <Fcard job={data} key={data.id}></Fcard>
          ))}
        </div>
        <p className="text-center" onClick={() => setMore(!more)}><Button>{more?"Less jobs":"seeMore"}</Button></p>
      </div>
    </div>
  );
};

export default JobFeatures;
