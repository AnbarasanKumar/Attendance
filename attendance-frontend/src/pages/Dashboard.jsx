import { useEffect, useState } from "react";
import api from "../api/api";

import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";
import MarkForm from "../components/MarkForm";
import MarkList from "../components/MarkList";
import Analytics from "../components/Analytics";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [marks, setMarks] = useState([]);

  const loadStudents = async () => {
    setStudents((await api.get("/students")).data);
  };

  const loadDetails = async (id) => {
    setSelectedId(id);
    setAttendance((await api.get(`/attendance/${id}`)).data);
    setMarks((await api.get(`/marks/${id}`)).data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div>
      <h1>🎓 Student Attendance & Performance Dashboard</h1>

      <StudentForm onAdd={loadStudents} />
      <StudentList students={students} onSelect={loadDetails} />

      {selectedId && (
        <>
          <AttendanceForm
            studentId={selectedId}
            onMarked={() => loadDetails(selectedId)}
          />

          <AttendanceList data={attendance} />

          <MarkForm
            studentId={selectedId}
            onAdd={() => loadDetails(selectedId)}
          />

          <MarkList marks={marks} />

          {/* 🔥 ANALYTICS DASHBOARD */}
          <Analytics attendance={attendance} marks={marks} />
        </>
      )}
    </div>
  );
}
