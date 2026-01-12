export default function AttendanceList({ data }) {
  return (
    <div>
      <h3>Attendance Records</h3>
      {data.map(a => (
        <div key={a.id}>
          {a.date} → {a.present ? "Present" : "Absent"}
        </div>
      ))}
    </div>
  );
}
