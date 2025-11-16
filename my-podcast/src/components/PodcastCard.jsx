import React from "react";

/**
 * Individual podcast card
 */
const PodcastCard = ({ podcast, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={podcast.image} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <p>{podcast.description.substring(0, 100)}...</p>
      <div className="tags">
        {podcast.tags.map((tag, i) => (
          <span className="tag" key={i}>
            {tag}
          </span>
        ))}
      </div>
      <p className="updated-text">Updated: {new Date(podcast.updated).toLocaleDateString()}</p>
    </div>
  );
};

export default PodcastCard;