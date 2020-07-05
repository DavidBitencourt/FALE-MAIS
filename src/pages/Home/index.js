import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import HeaderStyled from "../../components/Header";
import Loading from "../../components/Loading";
import Phone from "../../images/phone.png";
import {
  ActionBox,
  Button,
  Container,
  ContentContainer,
  Image,
  ImageBox,
  Title
} from "./styles";

function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <Loading show={loading} />
      <HeaderStyled />
      <Container>
        <ContentContainer>
          <ActionBox>
            {!loading && (
              <Typist cursor={{ element: "" }}>
                <Title>Seja bem vindo à Telzir!</Title>
                <Typist.Delay ms={500} />
                <Title>
                  Aqui o seu plano custa muito
                  <Typist.Backspace count={5} delay={200} />
                  pouco.
                </Title>
                <Typist.Delay ms={500} />
                <Title>Veja seu plano ideal!</Title>
              </Typist>
            )}
            <Link to="/calculate">
              <Button data-testid="button">
                <span>Conferir</span>
              </Button>
            </Link>
          </ActionBox>
          <ImageBox>
            <Image src={Phone} />
          </ImageBox>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Home;
