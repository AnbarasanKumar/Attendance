import { useState } from "react";
import api from "../api/api";

export default function StudentForm({ onAdd }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const submit = async () => {
    await api.post("/students", student);
    setStudent({ name: "", email: "", course: "" });
    onAdd();
  };

  return (
    <div>
      <h3>Add Student</h3>
      <input placeholder="Name" onChange={e => setStudent({...student, name: e.target.value})}/>
      <input placeholder="Email" onChange={e => setStudent({...student, email: e.target.value})}/>
      <input placeholder="Course" onChange={e => setStudent({...student, course: e.target.value})}/>
      <button onClick={submit}>Save</button>
    </div>
  );
}
