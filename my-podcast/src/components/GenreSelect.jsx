/**
 * Dropdown for genre filtering
 * @param {Object} props
 * @param {Array} props.genres - Genre data list
 * @param {string|number} props.selectedGenre - Selected genre ID
 * @param {Function} props.setSelectedGenre - Updates genre
 */
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