export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="input"
      placeholder="Rechercher par titre..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
