export default function Header({ children }) {
  return (
    <div className="headerBar">
      <div className="headerTop">
        <div className="brand">
          <h1>MovieRent</h1>
          <p className="tagline">Boutique de location de films</p>
        </div>

        <img src="/logo.png" alt="MovieRent logo" className="siteLogo" />
      </div>

      <div className="headerContent">{children}</div>
    </div>
  );
}

