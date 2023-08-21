import Button from "../../Component/Button";
import bg from "../../assets/All Images/P3OLGJ1 copy 1.png";
const Banner = () => {
  return (
    <div
      className="my-8
          md:flex
          space-x-10
          items-center
          p-8"
    >
      <div className="w-fit p-3 ">
        <h1 className="text-7xl text-purple-600 font-bold">
          One Step Closer To Your Dream Job
        </h1>
        <p
          className="
          my-5"
        >
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Button>Get Started</Button>
      </div>
      <div>
        <img src={bg} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Banner;
