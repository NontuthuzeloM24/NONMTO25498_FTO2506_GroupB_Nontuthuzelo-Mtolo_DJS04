# DSJ04 React Podcast App: Search, Sort, Filter, and Pagination

## Project Overview
A modern podcast browsing application built with React that provides users with an intuitive interface to discover and explore podcasts. The app features dynamic search, sorting, filtering, and pagination capabilities, delivering a seamless browsing experience with real-time updates and consistent state management.

## Features

### 🔍 Search Functionality
- Flexible search that matches any part of podcast titles
- Real-time search results as you type
- Search integrates seamlessly with active filters, sorts, and pagination
- Maintains search state across navigation

### 🔄 Sorting Options
- **Newest First**: Sort by last updated date
- **Title A–Z**: Alphabetical sorting (ascending)
- **Title Z–A**: Alphabetical sorting (descending)
- Sorting works in conjunction with search and filter criteria

### 🎯 Genre Filtering
- Filter podcasts by genre using an intuitive dropdown
- Filters work alongside search, sort, and pagination
- Selected filters persist across page navigation

### 📄 Pagination
- Clean pagination interface for manageable content display
- Pagination respects all active search, filter, and sort states
- UI selections remain intact while navigating between pages

### 🎨 User Interface
- Responsive design that works on desktop, tablet, and mobile
- Card-based layout with podcast cover art
- Hover effects and smooth transitions
- Modal view for detailed podcast information
- Clean, modern aesthetic with intuitive controls

## Technology Stack
- **React** - UI library
- **CSS3** - Styling with responsive design
- **Fetch API** - Data fetching from podcast API

## API Integration

### Endpoint
```
https://podcast-api.netlify.app
```

Returns an array of podcast previews with the following structure:
- `id`: Unique podcast identifier
- `title`: Podcast name
- `description`: Brief description
- `seasons`: Number of seasons
- `image`: Cover art URL
- `genres`: Array of genre IDs
- `updated`: Last update timestamp

### Genre Mapping
Genre IDs are mapped to human-readable titles using the `data.js` file included in the project. This mapping ensures proper display of genre names throughout the application.

## State Management
The application uses React's built-in state management with hooks:
- `useState` for component-level state
- Centralized state for search, filter, sort, and pagination
- State synchronization ensures all UI controls remain in sync

## Code Quality
- **JSDoc comments** for all major functions and components
- **Consistent formatting** with clear naming conventions
- **Modular architecture** with reusable components
- **Clean separation** of concerns between UI and logic

## Key Features Implementation

### Search
- Searches across podcast titles
- Case-insensitive matching
- Updates results dynamically

### Sort
- Maintains sort preference across interactions
- Works with filtered and searched results

### Filter
- Genre-based filtering with dropdown selection
- "All Genres" option to show all podcasts
- Filter state persists across pagination

### Pagination
- Configurable items per page
- Page navigation with numbered buttons
- Active page indicator
- Respects all active filters and search terms