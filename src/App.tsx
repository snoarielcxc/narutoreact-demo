import { useEffect, useState } from "react";
import CharacterCard from "./components/characterCard";
import "./App.css";

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
      <CharacterCard />
      {data.map((character) => {
        return (
          <div>
            <img src={character.images[0]} />
            <div>{character.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
