export default function MarkList({ marks }) {
  return (
    <div>

      <h5 className="fw-semibold mb-3 text-primary">
        📊 Marks
      </h5>

      {marks.length === 0 ? (
        <p className="text-muted">No marks recorded yet.</p>
      ) : (
        <table className="table table-sm table-striped align-middle">
          <thead className="table-light">
            <tr>
              <th>Subject</th>
              <th className="text-end">Score</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((m) => (
              <tr key={m.id}>
                <td>{m.subject}</td>
                <td className="text-end fw-semibold">
                  {m.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}
