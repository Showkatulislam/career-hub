import c1 from "../../assets/Icons/accounts 1.png";
import c2 from "../../assets/Icons/business 1.png";
import c3 from "../../assets/Icons/social-media 1.png";
import c4 from "../../assets/Icons/chip 1.png";
import CategoryCart from "../../Component/CategoryCart";
import SectionTitle from "../../Component/SectionTitle";

const JobCategory = () => {
  const data = [
    {
      id: 1,
      title: "Account & Finance",
      text: "300 Jobs Available",
      img: c1,
    },
    {
      id: 2,
      title: "Creative Design",
      text: "100 Jobs Available",
      img: c2,
    },
    {
      id: 3,
      title: "Marketing & Sales",
      text: "150 Jobs Available",
      img: c3,
    },
    {
      id: 4,
      title: "Engineering Job",
      text: "200 Jobs Available",
      img: c4,
    },
  ];
  return (
    <div className="m-8">
      <SectionTitle
        title={"Job Category List"}
        subTitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></SectionTitle>
      <div className="grid md:grid-cols-4 gap-5 my-8">
        {data.map((d) => (
          <CategoryCart key={d.id} category={d}></CategoryCart>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
