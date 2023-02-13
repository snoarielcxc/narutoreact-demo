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
      {data.map((x) => {
        return <CharacterCard key={x.id} character={x} />;
      })}
    </div>
  );
}

export default App;
