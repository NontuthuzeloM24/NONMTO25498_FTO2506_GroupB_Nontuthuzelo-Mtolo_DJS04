/**
 * Podcast card component
 * @param {Object} props
 * @param {Object} props.podcast - Podcast item
 * @param {Function} props.onClick - Open modal callback
 */
const PodcastCard = ({ podcast, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={podcast.image} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <p>{podcast.description?.substring(0, 100)}...</p>

      <div className="tags">
        {(podcast.tags || []).map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      {podcast.updated && (
        <p className="updated-text">
          Updated: {new Date(podcast.updated).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default PodcastCard;
