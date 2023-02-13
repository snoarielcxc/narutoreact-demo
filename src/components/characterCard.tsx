import "./characterCard.css";

function CharacterCard({ character }: any) {
  return (
    <div className="card">
      <img style={{ maxWidth: "100px" }} src={character.images[0]} />
      <div>{character.name}</div>
    </div>
  );
}

export default CharacterCard;
