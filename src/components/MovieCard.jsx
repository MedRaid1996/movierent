export default function MovieCard({ movie, onSelect, onAdd }) {
    return (
        <div className="card">
            <img className="poster" src={movie.poster} alt={movie.title} />
            <h3 style={{ marginBottom: 6 }}>{movie.title}</h3>
            <div className="small">{movie.genre} • {movie.rating}/5</div>
            <div style={{ marginTop: 6 }}><b>{movie.pricePerDay.toFixed(2)} $</b> / jour</div>
            <div className="small" style={{ marginTop: 4 }}>
                {movie.inStock ? "Disponible" : "Non disponible"}
                {movie.isNewRelease && <span className="badge badgeNew">Nouveau</span>}
            </div>

            <div className="row" style={{ marginTop: 10 }}>
                <button
                    className="btn"
                    onClick={() => {
                        onSelect(movie);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    Voir details
                </button>


                <button className="btn btnPrimary" onClick={() => onAdd(movie)} disabled={!movie.inStock}>
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}
