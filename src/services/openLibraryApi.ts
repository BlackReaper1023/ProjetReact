/**Service responsable des appels avec Open Library */

import type { Book } from "../types/Book";

export const searchBooks = async (params: URLSearchParams): Promise<Book[]> => {
  const response = await fetch(
    `https://openlibrary.org/search.json?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Erreur lors de la recherche");
  }

  const data = await response.json();
  return data.docs ?? [];
};
