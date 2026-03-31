/**Ici je code la barre de recherche*/ 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
     }}
    >
      <input
        type="text"
        aria-label="Recherche de livres"
        placeholder="Rechercher un livre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          flex: "1 1 200px",
          padding: "0.5rem",
      }}
      />
      <button type="submit"
      style={{
      padding: "0.5rem 1rem",
      cursor: "pointer",
    }}
      >
        Rechercher
        </button>
    </form>
  );
};

export default SearchBar;
