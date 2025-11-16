import React from "react";

const GenreSelect = ({ genres, selectedGenre, setSelectedGenre }) => {
  return (
    <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.title}
        </option>
      ))}
    </select>
  );
};

export default GenreSelect;
