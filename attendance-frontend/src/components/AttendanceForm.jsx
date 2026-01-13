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

      <h5 className="fw-semibold mb-3 text-primary">
        📝 Mark Attendance
      </h5>

      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          onChange={(e) => setPresent(e.target.value === "true")}
        >
          <option value="true">Present</option>
          <option value="false">Absent</option>
        </select>
      </div>

      <div className="d-grid">
        <button
          className="btn btn-warning"
          onClick={submit}
        >
          Mark Attendance
        </button>
      </div>

    </div>
  );
}
