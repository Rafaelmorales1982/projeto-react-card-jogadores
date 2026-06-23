import React from "react";

const anoAtual = () => {
  return new Date().getFullYear();
};

function Footer() {
  return (
    <footer>
      <p>&copy; {anoAtual()} - Rafael Morales de Lima - Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
