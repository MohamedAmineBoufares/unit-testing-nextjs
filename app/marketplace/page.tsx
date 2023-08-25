import Card from "./components/Card";
import { cards } from "@utils/lists";

export default function Home() {
  return (
    <main
      data-testid="marketplace-page"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 place-items-start"
    >
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </main>
  );
}
