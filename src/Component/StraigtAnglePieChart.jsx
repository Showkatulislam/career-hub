import {
  PieChart,
  Pie,
  Sector,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const StraigtAnglePieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Tooltip></Tooltip>
      <Legend></Legend>
      <Sector></Sector>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
};

export default StraigtAnglePieChart;
