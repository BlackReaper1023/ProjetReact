/*Ici je crée la carte de livres*/
import { useNavigate } from "react-router-dom";
import type { Book } from "../types/Book";

type BookCardProps = {
  book:Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const navigate = useNavigate();

  // "/works/OL82563W" → "OL82563W"
  const bookId = book.key.replace("/works/", "");

  const handleClick = () => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        background: "white",
        color:"#222",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }} 
      onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          e.currentTarget.style.background = "#fafafa";
        }}
      onMouseLeave={(e) => {
         e.currentTarget.style.transform = "scale(1)";
         e.currentTarget.style.boxShadow = "none";
         e.currentTarget.style.background = "white";
      }}

    >
        
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={`Couverture de ${book.title}`}
          style={{ width: "100px", marginBottom: "0.5rem" }}
        />
      ) : (
        <div
          style={{
            width: "100px",
            height: "150px",
            background: "#333",
            color: "#aaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
            marginBottom: "0.5rem",
          }}
        >
          Pas d’image
        </div>
      )}
      <h3>{book.title}</h3>

      {book.author_name && (
        <p>
          <strong>Auteur(s)</strong> : {book.author_name.join(", ")}
        </p>
      )}

      {book.first_publish_year && (
        <p>
          <strong>Première publication</strong> : {book.first_publish_year}
        </p>
      )}
    </div>

  );
};

export default BookCard;
