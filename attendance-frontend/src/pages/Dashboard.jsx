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
    <div className="container-fluid bg-light min-vh-100 p-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">
          🎓 Student Attendance & Performance Dashboard
        </h1>
        <p className="text-muted">
          Manage students, attendance, marks and analytics
        </p>
      </div>

      {/* STUDENT SECTION */}
      <div className="row g-4 mb-4">
        <div className="col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-header fw-semibold">
              ➕ Add Student
            </div>
            <div className="card-body">
              <StudentForm onAdd={loadStudents} />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card shadow-sm h-100">
            <div className="card-header fw-semibold">
              👨‍🎓 Student List
            </div>
            <div className="card-body">
              <StudentList
                students={students}
                onSelect={loadDetails}
              />
            </div>
          </div>
        </div>
      </div>

      {/* STUDENT DETAILS */}
      {selectedId && (
        <>
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-header fw-semibold">
                  📝 Mark Attendance
                </div>
                <div className="card-body">
                  <AttendanceForm
                    studentId={selectedId}
                    onMarked={() => loadDetails(selectedId)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-header fw-semibold">
                  📌 Add Marks
                </div>
                <div className="card-body">
                  <MarkForm
                    studentId={selectedId}
                    onAdd={() => loadDetails(selectedId)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-header fw-semibold">
                  📅 Attendance Records
                </div>
                <div className="card-body">
                  <AttendanceList data={attendance} />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-header fw-semibold">
                  📊 Marks Records
                </div>
                <div className="card-body">
                  <MarkList marks={marks} />
                </div>
              </div>
            </div>
          </div>

          {/* ANALYTICS */}
          <div className="card shadow-sm">
            <div className="card-header fw-semibold bg-primary text-white">
              📈 Performance Analytics
            </div>
            <div className="card-body">
              <Analytics
                attendance={attendance}
                marks={marks}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
