export default function SortBar({ sort, onChange }) {
  return (
    <select className="input" value={sort} onChange={(e) => onChange(e.target.value)}>
      <option value="none">Tri: Aucun</option>
      <option value="priceAsc">Prix croissant</option>
      <option value="priceDesc">Prix décroissant</option>
      <option value="ratingDesc">Meilleure note</option>
      <option value="titleAsc">Titre (A-Z)</option>
    </select>
  );
}
