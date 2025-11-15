src/
 ├── assets/
 ├── components/
 │    ├── ui/              # Reusable UI components (Buttons, Cards, Modals)
 │    ├── anime/           # Anime-specific components
 │    └── layout/          # Navbar, Sidebar, Wrapper layouts
 │
 ├── pages/
 │    ├── Home/
 │    ├── AnimeDetails/
 │    ├── Search/
 │    ├── Playlists/
 │    └── Auth/
 │
 ├── hooks/
 │    ├── useAnime.ts      # Fetch anime data
 │    ├── useDebounce.ts   # For search input
 │    ├── useAuth.ts       # Auth related
 │    └── useLocalStorage.ts
 │
 ├── context/
 │    ├── AuthContext.jsx
 │    ├── PlaylistContext.jsx
 │    └── BucketContext.jsx
 │
 ├── utils/
 │    ├── axiosInstance.js
 │    ├── constants.js
 │    └── helpers.js
 │
 ├── services/
 │    ├── auth.service.js
 │    ├── anime.service.js
 │    └── playlist.service.js
 │
 ├── router/
 │    └── index.jsx
 │
 ├── App.jsx
 └── main.jsx
