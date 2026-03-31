/*Ici je crée la page des résultats de recherche*/
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard";     
import type { Book } from "../types/Book";
import { searchBooks } from "../services/openLibraryApi";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);

      const params = new URLSearchParams();
      params.append("q", query);

      const results = await searchBooks(params);
      setBooks(results);
      } catch (err) {
        setError("Impossible de charger les résultats");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <div>
      <h2>Résultats de recherche</h2>
      {!query && <p>Veuillez entrer un terme de recherche.</p>}

      {query && (
        <p>
          Recherche pour : <strong>{query}</strong>
        </p>
      )}

      {loading && <p>Chargement...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && books.length === 0 && query && (
        <p>Aucun résultat trouvé.</p>
      )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1rem",
         }}
        >
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
      ))}
        </div>

    </div>
  );
};

export default SearchResults;
