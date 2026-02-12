export default function EmptyState({ title, hint }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="small">{hint}</p>
    </div>
  );
}
