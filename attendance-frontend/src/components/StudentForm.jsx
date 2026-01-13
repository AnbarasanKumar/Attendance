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

      <h5 className="fw-semibold mb-3 text-primary">
        ➕ Add New Student
      </h5>

      <div className="mb-3">
        <label className="form-label">Student Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter full name"
          value={student.name}
          onChange={e =>
            setStudent({ ...student, name: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={student.email}
          onChange={e =>
            setStudent({ ...student, email: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Course</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter course name"
          value={student.course}
          onChange={e =>
            setStudent({ ...student, course: e.target.value })
          }
        />
      </div>

      <div className="d-grid">
        <button
          className="btn btn-primary"
          onClick={submit}
        >
          Save Student
        </button>
      </div>

    </div>
  );
}
