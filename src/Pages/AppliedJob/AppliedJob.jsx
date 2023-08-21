import AppliedJobCard from "../../Component/AppliedJobCard";
import Banner from "../../Component/Banner";
import img1 from "../../assets/Logo/google-1-1 1-1.png";
import img2 from "../../assets/Logo/netflix-4 1.png";
import img3 from "../../assets/Logo/tesla-9 1.png";
const AppliedJob = () => {
  const data = [
    {
      id: 1,
      title: "Technical Database Engineer",
      branch: "Google LLC",
      type: "Remote",
      duration: "FullTime",
      location: "bangladesh",
      salary: "70k-90k",
      img: img1,
    },
    {
      id: 2,
      title: "Senior Product Designer",
      branch: "Netflix",
      type: "Remote",
      duration: "FullTime",
      location: "bangladesh",
      salary: "70k-90k",
      img: img2,
    },
    {
      id: 3,
      title: "Software Engineer",
      branch: "Tesla",
      type: "Remote",
      duration: "FullTime",
      location: "bangladesh",
      salary: "70k-90k",
      img: img3,
    },
    {
      id: 4,
      title: "Technical Database Engineer",
      branch: "Google LLC",
      type: "Remote",
      duration: "FullTime",
      location: "bangladesh",
      salary: "70k-90k",
      img: img1,
    }
  ];
  return (
    <div>
      <Banner text={"Applied Jobs"}></Banner>
      <div className="m-8 ">
        {
            data.map(d=><AppliedJobCard key={d.key} cd={d}></AppliedJobCard>)
        }
      </div>
    </div>
  );
};

export default AppliedJob;
