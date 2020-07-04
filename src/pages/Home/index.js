import React, {useState} from "react";
import Typist from 'react-typist';
import Phone from "../../assets/phone.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import {Container, Header, ContentContainer, ActionBox, Title, ImageBox, Image, Button} from "./styles"; 


function Home() {
  const [loading, setLoading] = useState(true);

  
  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
   <Container>
      <Loading show={loading} />
     <Header>
       <Image src={Logo}/>
     </Header>
     <ContentContainer>
        <ActionBox>
          {!loading &&
        <Typist cursor={{element:''}}>
        <Title>
          Seja bem vindo à Telzir!
        </Title>
        <Typist.Delay ms={500} />
        <Title>
          Aqui o seu plano custa muito
        <Typist.Backspace count={5} delay={200} />
          pouco.
        </Title>
        <Typist.Delay ms={500} />
        <Title>
          Veja seu plano ideal!
        </Title>
        </Typist>
}
        <Link to="/calculate">
      <Button>
        <span>Conferir</span>
        </Button>
        </Link>
        </ActionBox>
        <ImageBox>
          <Image src={Phone} />
        </ImageBox>
     </ContentContainer>
    </Container>
  );
}

export default Home;
