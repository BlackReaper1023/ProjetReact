/*Ici on crée la page de recherche avancée, qui permet à l'utilisateur de faire une recherche plus précise en utilisant des filtres.*/
import { useState } from "react";
import BookCard from "../components/BookCard";
import type {Book} from "../types/Book";
import {searchBooks} from "../services/openLibraryApi";

const AdvancedSearch = () => {
    console.log("AdvancedSearch component rendered");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading]= useState(false);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Construction dynamique de la requête
  const params = new URLSearchParams();

  if (title.trim()) params.append("title", title.trim());
  if (author.trim()) params.append("author", author.trim());
  if (subject.trim()) params.append("subject", subject.trim());
  if (year.trim()) params.append("first_publish_year", year.trim());

  // Paramètre de sécurité : au moins un critère
  if ([...params.keys()].length === 0) {
    setError("Veuillez renseigner au moins un critère.");
    return;
  }

  try {
    setLoading(true);
    setError(null);
    setBooks([]);

      const results = await searchBooks(params);
        setBooks(results);
  } catch (err) {
    setError("Impossible d’effectuer la recherche avancée");
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <h2>Recherche avancée</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Auteur</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div>
          <label>Sujet</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div>
          <label>Année de publication</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Recherche en cours..." : "Rechercher"}
        </button>
        <button
          type="button"
          onClick={() => {
          setTitle("");
          setAuthor("");
          setSubject("");
          setYear("");
          setBooks([]);
          setError(null);
    }}
>
      Réinitialiser
      </button>

      </form>
      {/**Ici on affiche les résultats */}
      {loading && <p>Chargement...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && books.length === 0 && !error && (
        <p>Aucun résultat trouvé.</p>
  )}

      <div>
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
  ))}
</div>
    </div>
  );
};

export default AdvancedSearch;