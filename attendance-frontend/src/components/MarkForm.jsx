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
      <h3>Add Mark</h3>
      <input placeholder="Subject" onChange={e => setSubject(e.target.value)} />
      <input type="number" placeholder="Score" onChange={e => setScore(e.target.value)} />
      <button onClick={submit}>Save</button>
    </div>
  );
}
