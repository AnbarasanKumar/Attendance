import { useState } from "react";
import api from "../api/api";

export default function MarkForm({ studentId, onAdd }) {
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");

  const submit = async () => {
    await api.post("/marks", {
      student: { id: studentId },
      subject,
      score,
    });
    onAdd();
  };

  return (
    <div>

      <h5 className="fw-semibold mb-3 text-primary">
        📌 Add Mark
      </h5>

      <div className="mb-3">
        <label className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter subject name"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Score</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter score"
          onChange={(e) => setScore(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button
          className="btn btn-success"
          onClick={submit}
        >
          Save Mark
        </button>
      </div>

    </div>
  );
}
