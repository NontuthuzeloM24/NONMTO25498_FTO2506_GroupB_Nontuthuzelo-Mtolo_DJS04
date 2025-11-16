import React, { useState } from "react";
import PodcastCard from "./PodcastCard";

/**
 * Grid layout for podcast cards
 */
const PodcastGrid = ({ podcasts }) => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  return (
    <>
      <div className="grid">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} onClick={() => setSelectedPodcast(podcast)} />
        ))}
      </div>

      {selectedPodcast && (
        <div className="modal" onClick={() => setSelectedPodcast(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPodcast(null)}>
              &times;
            </button>
            <div className="banner">
              <img src={selectedPodcast.image} alt={selectedPodcast.title} className="modal-img" />
              <div className="info-section">
                <h2>{selectedPodcast.title}</h2>
                <p>{selectedPodcast.description}</p>
                <p className="modal-updated-text">Updated: {new Date(selectedPodcast.updated).toLocaleDateString()}</p>
                <div className="tags">
                  {selectedPodcast.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PodcastGrid;
