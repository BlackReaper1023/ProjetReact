/*Ici je crée la page pour les détails du livre*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type BookDetailData = {
  title: string;
  description?: string | { value: string };
  subjects?: string[];
};
type WikipediaData = {
  extract?: string;
  thumbnail?: {
    source: string;
  };
  content_urls?: {
    desktop?: {
      page: string;
    };
  };
};


const BookDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [book, setBook] = useState<BookDetailData | null>(null);
  const [wiki, setWiki] = useState<WikipediaData | null>(null);


  useEffect(() => {
    if (!id) return;

    const fetchBookDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );

        if (!response.ok) {
          throw new Error("Erreur lors du chargement du livre");
        }

        const data = await response.json();
        setBook(data);
        fetchWikipedia(data.title);
      } catch (err) {
        setError("Impossible de charger le détail du livre");
      } finally {
        setLoading(false);
      }
    };
    const fetchWikipedia = async (title: string) => {
      try {
    const formattedTitle = title.replace(/ /g, "_");

    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${formattedTitle}`
    );

      if (!response.ok) return;

    const data = await response.json();
      setWiki(data);
      }  catch (err) {
    // Ne pas afficher d'erreur si la requête Wikipedia échoue, car ce n'est qu'un bonus
    }
    };

    fetchBookDetail();
  }, [id]);

  if (loading) return <p>Chargement du livre...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!book) return null;

  return (
    <div style={{ lineHeight: "1.6" }}>
      <h2>{book.title}</h2>
      <section style={{ marginBottom: "2rem" }}>
        <h3>Informations du livre</h3>

      {book.description && (
        <p style={{ lineHeight: "1.6" }}>
          {typeof book.description === "string"
            ? book.description
            : book.description.value}
        </p>
      )}

      {book.subjects && (
        <div>
          <h4>Sujets</h4>
          <ul>
            {book.subjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
      )}
      </section>
      {!book.description && 
      <p>Aucune description disponible.</p>}

      {wiki && (
        <section>
        <div>
          <h3>À propos (Wikipedia)</h3>

          {wiki.thumbnail && (
            <img
              src={wiki.thumbnail.source}
              alt={`Illustration de ${book.title}`}
              style={{ width: "200px", marginBottom: "1rem" }}
            />
          )}

          {wiki.extract && <p>{wiki.extract}</p>}

          {wiki.content_urls?.desktop?.page && (
            <a
             href={wiki.content_urls.desktop.page}
             target="_blank"
             rel="noopener noreferrer"
          >
             Voir sur Wikipedia
         </a>
       )}
    </div>
        </section>
   )}
    </div>
  );
};

export default BookDetail;
