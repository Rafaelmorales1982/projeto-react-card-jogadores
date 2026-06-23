import React from "react";
import Card from "./Card";
import jogadores from "../jogadores";

function cardJogadores(jogador) {
  return (
    <Card
      key={jogador.id}
      nome={jogador.nome}
      clube={jogador.clube}
      descricao={jogador.descricao}
      imagem={jogador.imagem}
      video={jogador.video}
    />
  );
}

function Main() {
  return (
    <main className="container">
      {jogadores.map(cardJogadores)}
    </main>
  );
}

export default Main;