export default function Filters({
  onlyAvailable,
  onToggleAvailable,
  onlyNew,
  onToggleNew,
  genre,
  onChangeGenre,
  priceMax,
  onChangePriceMax,
  genres,
  onReset
}) {
  return (
    <div className="row">
      <label className="row">
        <input type="checkbox" checked={onlyAvailable} onChange={onToggleAvailable} />
        Disponible seulement
      </label>

      <label className="row">
        <input type="checkbox" checked={onlyNew} onChange={onToggleNew} />
        Nouveautés seulement
      </label>

      <select className="input" value={genre} onChange={(e) => onChangeGenre(e.target.value)}>
        <option value="all">Tous les genres</option>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <div style={{ minWidth: 240 }}>
        <div className="small">Prix max: <b>{priceMax.toFixed(2)} $/jour</b></div>
        <input
          type="range"
          min="0"
          max="6"
          step="0.1"
          value={priceMax}
          onChange={(e) => onChangePriceMax(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <button className="btn" onClick={onReset}>Reinitialiser</button>
    </div>
  );
}
