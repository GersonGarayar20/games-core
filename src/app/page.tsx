import { addGame, getAllGames } from "@/server/drizzle";

export default async function Home() {
  const data = await getAllGames();
  console.log("🚀 ~ Home ~ data:", data);
  /* addGame({
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.",
    price: 59.99,
    releaseDate: new Date("2017-03-03"),
    developer: "Nintendo EPD",
    publisher: "Nintendo",
  }); */

  return (
    <main>
      <h1>games core</h1>
      <p>the best games</p>
      <section className="grid md:grid-cols-4 grid-cols-2 gap-2">
        {data.map(({ id, title, description }) => (
          <div key={id} className="border p-4 rounded-3xl">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
