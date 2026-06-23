import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imagem} alt={props.nome} />
      <h2>{props.nome}</h2>
      <h3>{props.clube}</h3>
      <p>{props.descricao}</p>

      
      {/* Vídeo loop infinito */}
      <div className="video">
        <iframe
          width="100%"
          height="200"
          src={
            props.video.replace("watch?v=", "embed/") +
            "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&loop=1&playlist=" +
            props.video.split("v=")[1]
          }
          title={props.nome}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Card;
