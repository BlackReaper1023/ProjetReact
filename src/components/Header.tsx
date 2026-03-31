//* ici j'intègre la barre de recherche dans le header **/
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        background: "rgba(0, 0, 0, 0.85)",
        color: "white",
        padding: "1rem 2rem",
        marginBottom: "2rem",
      }}
    >
      {/* Titre + navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <h1 style={{ margin: 0 }}>The React's Library</h1>

        <nav style={{ margin: "0.5rem 0" }}>
          <Link to="/" style={{ marginRight: "1rem", color: "#8ab4f8" }}>
            Accueil
          </Link>
          
          <Link
            to="/advanced-search"
            style={{
              color: "#90caf9",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Recherche avancée
          </Link>
        </nav>
      </div>

      {/* Barre de recherche */}
      <div style={{ marginTop: "1rem" }}>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
