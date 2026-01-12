import { useState } from "react";
import api from "../api/api";

export default function AttendanceForm({ studentId, onMarked }) {
  const [date, setDate] = useState("");
  const [present, setPresent] = useState(true);

  const submit = async () => {
    await api.post("/attendance", {
      student: { id: studentId },
      date,
      present,
    });
    onMarked();
  };

  return (
    <div>
      <h3>Mark Attendance</h3>
      <input type="date" onChange={e => setDate(e.target.value)} />

      <select onChange={e => setPresent(e.target.value === "true")}>
        <option value="true">Present</option>
        <option value="false">Absent</option>
      </select>

      <button onClick={submit}>Mark</button>
    </div>
  );
}
