import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import GenreSelect from "./components/GenreSelect";
import PodcastGrid from "./components/PodcastGrid";
import Pagination from "./components/Pagination";
import { fetchPodcasts } from "./api/fetchData";
import { genresData } from "./data";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [selectedGenre, setSelectedGenre] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // Filter podcasts based on search and genre
  let filteredPodcasts = podcasts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? p.genre_ids.includes(Number(selectedGenre)) : true;
    return matchesSearch && matchesGenre;
  });

  // Sort podcasts
  if (sortOption === "newest") {
    filteredPodcasts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  } else if (sortOption === "title-asc") {
    filteredPodcasts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "title-desc") {
    filteredPodcasts.sort((a, b) => b.title.localeCompare(a.title));
  }

  // Pagination
  const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredPodcasts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Header />
      <div className="app-header filters">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <GenreSelect genres={genresData} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      {loading ? (
        <div className="message-container">
          <div className="spinner"></div>
          <p>Loading podcasts...</p>
        </div>
      ) : error ? (
        <div className="message-container error">Failed to fetch podcasts.</div>
      ) : (
        <>
          <PodcastGrid podcasts={currentItems} />
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
          )}
        </>
      )}
    </div>
  );
}

export default App;