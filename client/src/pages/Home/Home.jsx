import AnimeCard from "../../components/anime/AnimeCard";
import TopTen from "./TopTen";

const topTenAnime = [
  {
    title: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1490/111780l.jpg",
    description: "Yuji Itadori enters a world of curses and sorcery.",
    score: 8.7,
    episodes: 24,
    year: 2020,
    genres: ["Action", "Supernatural"],
  },
  {
    title: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/1000/112231l.jpg",
    description: "Humanity fights for survival against Titans.",
    score: 9.1,
    episodes: 75,
    year: 2013,
    genres: ["Action", "Drama", "Fantasy"],
  },
  {
    title: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    description: "Tanjiro hunts demons to save his sister.",
    score: 8.6,
    episodes: 26,
    year: 2019,
    genres: ["Action", "Historical"],
  },
  {
    title: "One Piece",
    image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
    description: "Luffy dreams of becoming the Pirate King.",
    score: 8.8,
    episodes: 1100,
    year: 1999,
    genres: ["Adventure", "Comedy", "Fantasy"],
  },
  {
    title: "Naruto Shippuden",
    image: "https://cdn.myanimelist.net/images/anime/5/17407l.jpg",
    description: "Naruto grows stronger and faces new enemies.",
    score: 8.2,
    episodes: 500,
    year: 2007,
    genres: ["Action", "Adventure"],
  },
  {
    title: "My Hero Academia",
    image: "https://cdn.myanimelist.net/images/anime/10/78745l.jpg",
    description: "Izuku Midoriya trains to become a hero.",
    score: 7.9,
    episodes: 113,
    year: 2016,
    genres: ["Action", "Comedy", "Superpower"],
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    image: "https://cdn.myanimelist.net/images/anime/1223/96541l.jpg",
    description: "Two brothers seek the Philosopher's Stone.",
    score: 9.1,
    episodes: 64,
    year: 2009,
    genres: ["Action", "Drama", "Adventure"],
  },
  {
    title: "Death Note",
    image: "https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
    description: "Light Yagami gains a deadly notebook.",
    score: 8.6,
    episodes: 37,
    year: 2006,
    genres: ["Thriller", "Mystery"],
  },
  {
    title: "Chainsaw Man",
    image: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    description: "Denji becomes Chainsaw Man to escape poverty.",
    score: 8.4,
    episodes: 12,
    year: 2022,
    genres: ["Action", "Horror"],
  },
  {
    title: "Sword Art Online",
    image: "https://cdn.myanimelist.net/images/anime/11/39717l.jpg",
    description: "Players are trapped in a deadly virtual world.",
    score: 7.2,
    episodes: 25,
    year: 2012,
    genres: ["Adventure", "Sci-Fi"],
  },
];

function Home() {
  return (
    <section className="md:p-10 w-full h-full">
      <h1 className="text-4xl mb-5">Top Ten</h1>
      <TopTen topTenAnime={topTenAnime}/>
    </section>
  );
}

export default Home;
