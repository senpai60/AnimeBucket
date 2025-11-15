import AnimeCard from "../../components/anime/AnimeCard";

function TopTen({ topTenAnime }) {
  return (
    <section className="w-full overflow-x-auto flex  gap-10">
      {topTenAnime.map((anime, idx) => (
        <AnimeCard key={idx} {...anime} />
      ))}
    </section>
  );
}

export default TopTen;
