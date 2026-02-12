import EmptyState from "./EmptyState";

export default function MovieDetail({ movie, onAdd }) {
  if (!movie) {
    return <EmptyState title="Aucun film selectionne" hint="Cliquez sur 'Voir details'." />;
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Detail</h2>
      <img className="poster" src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p className="small">{movie.genre} • {movie.rating}/5</p>
      <p>{movie.description}</p>
      <p><b>{movie.pricePerDay.toFixed(2)} $</b> / jour</p>
      <p className="small">
        {movie.inStock ? "Disponible" : "Non disponible"}
        {movie.isNewRelease && <span className="badge badgeNew">Nouveau</span>}
      </p>

      <button className="btn btnPrimary" onClick={() => onAdd(movie)} disabled={!movie.inStock}>
            Ajouter au panier
      </button>

    </div>
  );
}
