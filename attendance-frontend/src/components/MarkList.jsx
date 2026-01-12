export default function MarkList({ marks }) {
  return (
    <div>
      <h3>Marks</h3>
      {marks.map(m => (
        <div key={m.id}>
          {m.subject} → {m.score}
        </div>
      ))}
    </div>
  );
}
