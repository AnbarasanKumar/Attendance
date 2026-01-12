import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const COLORS = ["#4CAF50", "#F44336"];

export default function Analytics({ attendance, marks }) {

  // Attendance analytics
  const totalDays = attendance.length;
  const presentDays = attendance.filter(a => a.present).length;
  const absentDays = totalDays - presentDays;

  const attendancePercent =
    totalDays === 0 ? 0 : Math.round((presentDays / totalDays) * 100);

  const attendanceData = [
    { name: "Present", value: presentDays },
    { name: "Absent", value: absentDays }
  ];

  // Marks analytics (average per subject)
  const subjectMap = {};
  marks.forEach(m => {
    if (!subjectMap[m.subject]) {
      subjectMap[m.subject] = { total: 0, count: 0 };
    }
    subjectMap[m.subject].total += m.score;
    subjectMap[m.subject].count += 1;
  });

  const marksData = Object.keys(subjectMap).map(sub => ({
    subject: sub,
    average: Math.round(subjectMap[sub].total / subjectMap[sub].count)
  }));

  return (
    <div style={{ marginTop: 30 }}>
      <h2>📊 Analytics Dashboard</h2>

      {/* Attendance Summary */}
      <h3>Attendance Percentage</h3>
      <h1>{attendancePercent}%</h1>

      {/* Attendance Pie Chart */}
      <PieChart width={300} height={300}>
        <Pie
          data={attendanceData}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {attendanceData.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Marks Bar Chart */}
      <h3>Marks Average (Subject-wise)</h3>
      <BarChart width={500} height={300} data={marksData}>
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="average" />
      </BarChart>
    </div>
  );
}
