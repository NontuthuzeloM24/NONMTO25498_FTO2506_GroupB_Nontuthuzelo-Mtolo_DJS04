/**
 * Search input component
 * @param {Object} props
 * @param {string} props.searchQuery - Current search text
 * @param {Function} props.setSearchQuery - Updates search query
 */
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search podcasts..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
