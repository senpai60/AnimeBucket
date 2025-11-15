src/
 ├── assets/
 ├── components/
 │    ├── ui/
 │    |     ├── Button.jsx
 │    |     ├── Modal.jsx
 │    |     ├── Card.jsx
 │    |     ├── Loader.jsx
 │    |     ├── Dropdown.jsx
 │    |     └── Pagination.jsx
 │    | 
 |    ├── layout/
 │    |      ├── Navbar.jsx
 │    |      ├── Sidebar.jsx
 │    |      ├── MainLayout.jsx
 │    |      └── Footer.jsx
 │    |  
 |    ├── anime/
 |           ├── AnimeCard.jsx
 |           ├── AnimeGrid.jsx
 |           ├── AnimeBanner.jsx
 |           ├── AnimeInfo.jsx
 |           ├── GenreBadge.jsx
 |           ├── AddToBucketButton.jsx
 |           └── AddToPlaylistButton.jsx        # Navbar, Sidebar, Wrapper layouts
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
