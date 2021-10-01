import React, { useState } from "react";
import "./styles.css";

const gamesdirectory = {
  OpenWorld: [
    {
      name: "GTA V",
      rating: "5/5",
      description:
        "Grand Theft Auto V is an action-adventure game in Players complete missions in a vast open world"
    },
    {
      name: "Assasins creed Black FLag",
      rating: "3.5/5",
      description:
        "Assassin's Creed IV is an action-adventure, stealth game In which you get to explore a vast sea as a Pirate"
    },
    {
      name: "Lego marvel superheroes",
      rating: "4/5",
      description:
        " players are able to control 180 characters from the Marvel Universe, each with their own unique abilities."
    }
  ],
  Fps: [
    {
      name: "Call of Duty Modern Warfare",
      rating: "4.5",
      description:
        " Modern Warfare is a first-person shooter game. Its single-player campaign focuses on realism and features tactically-based moral choices"
    },
    {
      name: "Halo:CE",
      rating: "4.5",
      description:
        " Modern Warfare is a first-person shooter game. Its single-player campaign focuses on realism and features tactically-based moral choices"
    }
  ],
  Multiplayer: [
    {
      name: "Valorant",
      rating: "5/5",
      description:
        " Valorant is a team-based first-person hero shooter set in the near future."
    },
    {
      name: "Minecraft",
      rating: "3.5/5",
      description:
        " Minecraft is a 3D sandbox game that has no specific goals to accomplish ."
    },
    {
      name: "Among Us",
      rating: "4.5/5",
      description:
        "In this game cremates cooperate with each other to find imposters amongest them"
    }
  ]
};
var gamesDB = Object.keys(gamesdirectory);

export default function App() {
  var [selectedgenere, setselectedgenere] = useState("OpenWorld");

  function generehandler(genere) {
    setselectedgenere(genere);
    console.log(selectedgenere);
  }

  return (
    <div className="App">
      <h1>😎Games recomendations</h1>
      <p>These are a few games you should check out</p>
      {gamesDB.map(function (genere) {
        return <span onClick={() => generehandler(genere)}>{genere} </span>;
      })}
      {console.log(gamesdirectory[selectedgenere])}
      <div className="book-names" style={{ textAlign: "left" }}>
        <ul>
          {gamesdirectory[selectedgenere].map((game) => (
            <li key={game.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {game.name} </div>
              <p style={{ fontSize: "smaller" }}>{game.description}</p>
              <div style={{ fontSize: "smaller" }}> {game.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
