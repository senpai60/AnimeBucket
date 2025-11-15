Recommended Anime API Setup (Backend)

Use AniList GraphQL or Jikan API (fast + reliable).

Backend will:

Call the real anime API

Cache results

Serve cleaned data to frontend
→ Industry standard: never fetch third-party APIs directly from frontend.



=======================================================================

Database Collections (Mongo)
User

username

email

password (bcrypt)

playlists: [playlistId]

Playlists

name

userId

animes: array

BucketList

Linked to user (one per user)

=======================================================================

Extra Professional Stuff (If You Want Awwwards Style)

Use GSAP ScrollTrigger on homepage

Use Lenis smooth scroll

Use Framer Motion for cards

Use ShadCN / Radix UI for components

Implement skeleton loading states

Add infinite scroll for anime feed