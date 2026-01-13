export default function StudentList({ students, onSelect }) {
  return (
    <div>

      <h5 className="fw-semibold mb-3 text-primary">
        👨‍🎓 Students
      </h5>

      {students.length === 0 ? (
        <p className="text-muted">No students added yet.</p>
      ) : (
        <ul className="list-group">
          {students.map((s) => (
            <li
              key={s.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <div className="fw-semibold">{s.name}</div>
                <small className="text-muted">
                  Course: {s.course}
                </small>
              </div>

              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => onSelect(s.id)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
