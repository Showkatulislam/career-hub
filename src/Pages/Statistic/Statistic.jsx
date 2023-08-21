import SimpleBarChar from "../../Component/SimpleBarChar";
import SimpleLineChart from "../../Component/SimpleLineChart";
import StraigtAnglePieChart from "../../Component/StraigtAnglePieChart";
import TwoLevelPieChart from "../../Component/TwoLevelPieChart";

const Statistic = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center uppercase my-3">
        statistics
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        <SimpleLineChart></SimpleLineChart>
        <SimpleBarChar></SimpleBarChar>
        <TwoLevelPieChart></TwoLevelPieChart>
        <StraigtAnglePieChart></StraigtAnglePieChart>
      </div>
    </div>
  );
};

export default Statistic;
