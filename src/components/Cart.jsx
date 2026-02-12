import EmptyState from "./EmptyState";

export default function Cart({ cart, onIncDays, onDecDays, onRemove, total, onClear }) {
  return (
    <div className="card side">
      <h2 style={{ marginTop: 0 }}>Panier</h2>

      {cart.length === 0 ? (
        <EmptyState title="Panier vide" hint="Ajoutez un film pour commencer." />
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.movie.id}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <img
                    src={item.movie.poster}
                    alt={item.movie.title}
                    style={{
                        width: 52,
                        height: 70,
                        objectFit: "contain",
                        background: "rgba(255,255,255,.03)",
                        padding: 4,
                        borderRadius: 10,
                        border: "1px solid rgba(255,255,255,.12)",
                    }}
                    />


                <div style={{ flex: 1 }}>
                  <div>
                    <b>{item.movie.title}</b>
                  </div>
                  <div className="small">
                    {item.movie.pricePerDay.toFixed(2)} $/jour • Jours: <b>{item.days}</b>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: 8 }}>
                <button className="btn" onClick={() => onDecDays(item.movie.id)}>
                  -
                </button>
                <button className="btn" onClick={() => onIncDays(item.movie.id)}>
                  +
                </button>
                <button className="btn btnDanger" onClick={() => onRemove(item.movie.id)}>
                  Retirer
                </button>
              </div>

              <hr />
            </div>
          ))}

          {/* Bouton vider le panier */}
          <div style={{ marginTop: 6 }}>
            <button
              className="btn btnDanger"
              onClick={onClear}
              disabled={cart.length === 0}
            >
              Vider le panier
            </button>
          </div>

          <hr />

          <div>
            <b>Total:</b> {total.toFixed(2)} $
          </div>
        </>
      )}
    </div>
  );
}

