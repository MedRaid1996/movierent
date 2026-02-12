import EmptyState from "./EmptyState";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, onSelect, onAdd }) {
  if (movies.length === 0) {
    return <EmptyState title="Aucun film" hint="Modifiez la recherche, les filtres ou le tri." />;
  }
  return (
    <div className="cards">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onSelect={onSelect} onAdd={onAdd} />
      ))}
    </div>
  );
}
