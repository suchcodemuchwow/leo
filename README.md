# MovieLand - Movie Search & Management App

This repository contains my solution for the coding assignment that implements a movie search and management application. The solution is split into two pull requests:

## Pull Request #1 - Initial Implementation - Review ([PR #1](https://github.com/suchcodemuchwow/leo/pull/1))
This PR implements the core functionality based on the following user stories:
- Movie search with results display
- Favorites list management with visual indicators (stars)
- Watch Later functionality (similar to YouTube)

### Code Review Highlights
- I would normally have a session (pair programming/meeting) rather than reviewing this big change since it has some serious issues and possible back & forwards.
- PR's should be error free when it's in 'ready' state and tests must pass.
- The PR includes a comprehensive code review ~39 comments (please press `Load more…` button in PR page)

## Pull Request #2 - Enhancements ([PR #2](https://github.com/suchcodemuchwow/leo/pull/2))
This PR implements additional features and improvements:
1. **Grid Display**: Converted the movie list from vertical to grid layout using vanilla CSS
2. **Modal YouTube Player**: Implemented a modal dialog for trailer playback
3. **Infinite Scrolling**: Added infinite scroll functionality for movie lists

### Technical Stack
- React
- Redux for state management
- TMDB API for movie data
- Vanilla CSS for styling (no UI libraries)

### Original Requirements
The implementation is based on these user stories:
```text
● As a User, I can search for movies and view a list of results
● As a User, I can add and remove movies from a "my favourites" list
  ○ Movies in this list should have visual representation to show they are favorited
  ○ The user can view the movies in the favourites list
● As a User, I can add and remove movies I want to watch
  ○ The user can view the movies in the watch list
```

### Repository Structure
- `main` branch: Contains this README
- `review` branch ([PR #1](https://github.com/suchcodemuchwow/leo/pull/1)): Initial implementation - Reviews are in PR.
- `task` branch ([PR #2](https://github.com/suchcodemuchwow/leo/pull/2)): Enhanced features

### Getting Started
1. Clone the repository
2. Check out the desired branch:
   ```bash
   # For initial implementation
   git checkout review

   # For enhanced version
   git checkout task
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Note to Reviewers
- PR #1 contains the code review comments and initial implementation
- PR #2 contains the enhanced features with grid layout, modal player, and infinite scrolling
- Each PR can be reviewed independently
