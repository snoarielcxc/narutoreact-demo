import { useEffect, useState } from "react";
import CharacterCard from "./components/characterCard";
import "./App.css";
import { Button } from "@mantine/core";

function App() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    async function fetchNaruto() {
      let response = await fetch(
        "https://naruto-api.fly.dev/api/v1/characters"
      );
      let result = await response.json();
      setData(result);
      console.log(result);
    }
    fetchNaruto();
  }, []);

  return (
    <div>
      <div>Hello</div>
      <Button>click Me!</Button>
      <div className="cardContainer">
        {data.map((x) => {
          return <CharacterCard key={x.id} character={x} />;
        })}
      </div>
    </div>
  );
}

export default App;
