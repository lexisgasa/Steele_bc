import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
  // funcion para crear un emoji random cada vez, e iniciar con uno random tambien
  function randomEmoji() {
    const choices = ["😀", "🫡", "🫠", "🤣", "🫢", "🙃", "😌"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  //   estado inicial
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  //   utiliza el spread operator para hacer una copia del array de emojis que habia antes, y se añada uno en forma de objeto con id y emoji random
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };

  //   del estado que contiene el array de emojis se mapean todos y se filtra unicamente el que contenga el ID seleccionado de todos los id que hay, para que de true y salga
  // esta linea hace lo mismo pero sin coger los valores antiguos y sustiyendo : setEmojis ( emojis.filter( e => e.id !== id ))
  const deleteEmoji = (id) => {
    setEmojis((previousEmojis) => {
      return previousEmojis.filter((e) => e.id !== id);
    });
  };
  //   el parametro de borrar pasa el id necesario para filtrar 
  return (
    <div>
      {emojis.map((e) => (
        <span
          key={e.id}
          onClick={() => deleteEmoji(e.id)}
          style={{
            fontSize: "4rem",
          }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add emoji</button>
    </div>
  );
}
