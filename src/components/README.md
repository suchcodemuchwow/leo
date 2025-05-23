# Component Structure

```
src/
├── components/              # Shared components used across features
│   ├── common/             # Basic UI components
│   │   ├── Icon/          # Icons used throughout the app
│   │   ├── Modal/         # Base modal component
│   │   └── NotFound/      # 404 and error states
│   ├── layout/            # Layout components
│   │   ├── Header/       # Main navigation header
│   │   └── Footer/       # (if needed)
│   └── media/            # Media-related components
│       ├── YoutubePlayer/
│       └── TrailerDialog/
└── features/              # Feature-specific components
    └── movies/           # Movie-related components
        ├── MovieCard/    # Individual movie display
        ├── MovieGrid/    # Grid of movies
        └── MovieDetails/ # Detailed movie view
```

## Guidelines

1. Common components (`src/components/common/`)
   - Reusable across the entire application
   - Should be stateless when possible
   - Must be well-documented and maintainable

2. Layout components (`src/components/layout/`)
   - Components that define the app's structure
   - Should be minimal and focused on layout concerns

3. Media components (`src/components/media/`)
   - Components handling media playback and display
   - Isolated for better code splitting

4. Feature components (`src/features/`)
   - Components specific to a feature
   - Can contain their own state management
   - May use common components as building blocks 