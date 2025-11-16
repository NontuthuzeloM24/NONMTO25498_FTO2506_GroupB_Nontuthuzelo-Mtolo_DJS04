const API_URL = "https://podcast-api.netlify.app/";

/**
 * Fetch podcasts from the API.
 * @returns {Promise<Array>} Array of podcast objects
 */
export const fetchPodcasts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch podcasts:", error);
    return []; // return empty array on error
  }
};
