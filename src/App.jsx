import { useEffect, useMemo, useRef, useState } from "react";
import { MOVIES } from "./data/movie";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SortBar from "./components/SortBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Cart from "./components/Cart";
import Toast from "./components/Toast";

const CART_KEY = "movierent_cart_v1";

export default function App() {
  const [search, setSearch] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);
  const [genre, setGenre] = useState("all");
  const [priceMax, setPriceMax] = useState(6);
  const [sort, setSort] = useState("none");

  const [selected, setSelected] = useState(null);

  // Cart: [{ movie, days }]
  const [cart, setCart] = useState(() => {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  // Toast
  const [showToast, setShowToast] = useState(false);
  const toastTimer = useRef(null);

  function triggerToast() {
    setShowToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 1500);
  }

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const genres = useMemo(() => {
    return Array.from(new Set(MOVIES.map((m) => m.genre))).sort();
  }, []);

  const filteredSorted = useMemo(() => {
    let list = MOVIES;

    // filters
    const s = search.trim().toLowerCase();
    if (s) list = list.filter((m) => m.title.toLowerCase().includes(s));
    if (onlyAvailable) list = list.filter((m) => m.inStock);
    if (onlyNew) list = list.filter((m) => m.isNewRelease);
    if (genre !== "all") list = list.filter((m) => m.genre === genre);
    list = list.filter((m) => m.pricePerDay <= priceMax);

    // sort
    const arr = [...list];
    if (sort === "priceAsc") arr.sort((a, b) => a.pricePerDay - b.pricePerDay);
    if (sort === "priceDesc") arr.sort((a, b) => b.pricePerDay - a.pricePerDay);
    if (sort === "ratingDesc") arr.sort((a, b) => b.rating - a.rating);
    if (sort === "titleAsc") arr.sort((a, b) => a.title.localeCompare(b.title));

    return arr;
  }, [search, onlyAvailable, onlyNew, genre, priceMax, sort]);

  function resetFilters() {
    setSearch("");
    setOnlyAvailable(false);
    setOnlyNew(false);
    setGenre("all");
    setPriceMax(6);
    setSort("none");
  }

  function addToCart(movie) {
    setCart((prev) => {
      const found = prev.find((it) => it.movie.id === movie.id);
      if (found) {
        // si déjà présent: on augmente les jours
        return prev.map((it) =>
          it.movie.id === movie.id ? { ...it, days: it.days + 1 } : it
        );
      }
      return [...prev, { movie, days: 1 }];
    });
    triggerToast();
  }

  function incDays(movieId) {
    setCart((prev) =>
      prev.map((it) =>
        it.movie.id === movieId ? { ...it, days: it.days + 1 } : it
      )
    );
  }

  function decDays(movieId) {
    setCart((prev) =>
      prev
        .map((it) =>
          it.movie.id === movieId ? { ...it, days: it.days - 1 } : it
        )
        .filter((it) => it.days > 0)
    );
  }

  function removeFromCart(movieId) {
    setCart((prev) => prev.filter((it) => it.movie.id !== movieId));
  }

  function clearCart() {
    setCart([]);
  }

  const total = useMemo(() => {
    return cart.reduce((sum, it) => sum + it.movie.pricePerDay * it.days, 0);
  }, [cart]);

  return (
    <div className="container">
      <Header>
        <div className="row" style={{ marginTop: 10 }}>
          <SearchBar value={search} onChange={setSearch} />
          <SortBar sort={sort} onChange={setSort} />
        </div>

        <div style={{ marginTop: 12 }}>
          <Filters
            onlyAvailable={onlyAvailable}
            onToggleAvailable={() => setOnlyAvailable((v) => !v)}
            onlyNew={onlyNew}
            onToggleNew={() => setOnlyNew((v) => !v)}
            genre={genre}
            onChangeGenre={setGenre}
            priceMax={priceMax}
            onChangePriceMax={setPriceMax}
            genres={genres}
            onReset={resetFilters}
          />
        </div>
      </Header>

      <div className="grid" style={{ marginTop: 16 }}>

        {/* Colonne gauche : films */}
        <div>
          <MovieList
            movies={filteredSorted}
            onSelect={setSelected}
            onAdd={addToCart}
          />
        </div>

        {/* Colonne droite : detail + panier */}
        <div className="sideColumn">
          <MovieDetail
            movie={selected}
            onAdd={addToCart}
          />

          <div style={{ marginTop: 16 }}>
            <Cart
              cart={cart}
              onIncDays={incDays}
              onDecDays={decDays}
              onRemove={removeFromCart}
              total={total}
              onClear={clearCart}
            />
          </div>
        </div>

      </div>


      {showToast && <Toast message="Ajoute au panier !" />}
    </div>
  );
}
