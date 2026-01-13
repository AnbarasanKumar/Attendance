export default function AttendanceList({ data }) {
  return (
    <div>

      <h5 className="fw-semibold mb-3 text-primary">
        📅 Attendance Records
      </h5>

      {data.length === 0 ? (
        <p className="text-muted">No attendance records available.</p>
      ) : (
        <table className="table table-sm table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((a) => (
              <tr key={a.id}>
                <td>{a.date}</td>
                <td>
                  {a.present ? (
                    <span className="badge bg-success">
                      Present
                    </span>
                  ) : (
                    <span className="badge bg-danger">
                      Absent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}
