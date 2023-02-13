import "./characterCard.css";

function CharacterCard({ character }: any) {
  return (
    <div className="card" onClick={() => alert(JSON.stringify(character))}>
      <img className="cardImg" src={character.images[0]} />
      <div className="cardText">{character.name}</div>
    </div>
  );
}

export default CharacterCard;
