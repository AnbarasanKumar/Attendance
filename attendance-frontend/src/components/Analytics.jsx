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
    <div className="mt-4">

      <h4 className="fw-bold mb-4 text-primary">
        📊 Analytics Dashboard
      </h4>

      {/* KPI SUMMARY */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Attendance Percentage</h6>
              <h1 className="fw-bold text-success">
                {attendancePercent}%
              </h1>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Present Days</h6>
              <h2 className="fw-bold text-success">
                {presentDays}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Absent Days</h6>
              <h2 className="fw-bold text-danger">
                {absentDays}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="row g-4">

        {/* ATTENDANCE PIE */}
        <div className="col-lg-5">
          <div className="card shadow-sm h-100">
            <div className="card-header fw-semibold">
              Attendance Overview
            </div>
            <div className="card-body d-flex justify-content-center">
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
            </div>
          </div>
        </div>

        {/* MARKS BAR */}
        <div className="col-lg-7">
          <div className="card shadow-sm h-100">
            <div className="card-header fw-semibold">
              Subject-wise Average Marks
            </div>
            <div className="card-body d-flex justify-content-center">
              <BarChart width={500} height={300} data={marksData}>
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="average" />
              </BarChart>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
