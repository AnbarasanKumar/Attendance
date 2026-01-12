export default function StudentList({ students, onSelect }) {
  return (
    <div>
      <h3>Students</h3>
      {students.map(s => (
        <div key={s.id}>
          {s.name} ({s.course})
          <button onClick={() => onSelect(s.id)}>Select</button>
        </div>
      ))}
    </div>
  );
}
