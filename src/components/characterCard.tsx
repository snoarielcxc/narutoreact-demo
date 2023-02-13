import { Modal } from "@mantine/core";
import "./characterCard.css";
import { useState } from "react";

function CharacterCard({ character }: any) {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <div className="cardInfo">
          {Object.keys(character.info).map((key) => {
            return (
              <div key={key}>
                {key}:{character.info[key]}
              </div>
            );
          })}
        </div>
      </Modal>
      <div className="card" onClick={() => setOpened(true)}>
        <img className="cardImg" src={character.images[0]} />
        <div className="cardText">{character.name}</div>
      </div>
    </div>
  );
}

export default CharacterCard;
