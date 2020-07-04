import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HeaderStyled, Image } from "./styles";

export function Header({ backPage }) {
  return (
    <HeaderStyled backPage={backPage}>
      <Image src={Logo} />
      <Link to="/">
        <IoMdArrowRoundBack />
        voltar para a home
      </Link>
    </HeaderStyled>
  );
}

export default Header;
