import React from "react";
import Typist from 'react-typist';
import {Container} from "./styles"; 


function Home() {

  return (
   <Container>
      <Typist cursor={{element:''}}>
        <h1>
          Seja bem vindo à Telzir
        </h1>
        <h1>
          Aqui o seu plano custa muito
        <Typist.Backspace count={5} delay={200} />
          pouco
        </h1>
        <h1>
          veja qual plano mais combina com você
        </h1>
      </Typist>
    </Container>
  );
}

export default Home;
