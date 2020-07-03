import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import {
  CardBoxStyled,
  ContainerStyled,
  Header,
  InfoTextStyled,
  ModalContent,
  OverflowStyled,
  TableColumnStyled,
  TableHeaderStyled,
  TableRowStyled,
  TableStyled,
  Title,
} from "./styles";

function Modal({ visibility, modalHandler, data }) {
  const [show, setShow] = useState(visibility);

  useEffect(() => {
    setShow(visibility);
  }, [visibility]);

  const closeModal = () => {
    setShow(false);
    modalHandler(false);
  };

  return (
    <ContainerStyled visibility={show}>
      <OverflowStyled
        onClick={() => {
          closeModal();
        }}
      />
      <CardBoxStyled>
        <Header>
          <Title>tabela de tarifas</Title>
          <MdClose
            onClick={() => closeModal()}
            style={{ fontSize: 25, color: "#4f4f4f" }}
          />
        </Header>
        <ModalContent>
          <TableStyled>
            <TableRowStyled>
              <TableHeaderStyled>ddd (origem)</TableHeaderStyled>
              <TableHeaderStyled>ddd (destino)</TableHeaderStyled>
              <TableHeaderStyled>$/min</TableHeaderStyled>
              <TableHeaderStyled>$/min com 10% ***</TableHeaderStyled>
            </TableRowStyled>
            {data.map((item) => (
              <TableRowStyled key={item.id} className="row-table">
                <TableColumnStyled>{item.origin}</TableColumnStyled>
                <TableColumnStyled>{item.destination}</TableColumnStyled>
                <TableColumnStyled>
                  {item.minute.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableColumnStyled>
                <TableColumnStyled>
                  {((item.minute * 10) / 100 + item.minute).toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </TableColumnStyled>
              </TableRowStyled>
            ))}
          </TableStyled>
          <InfoTextStyled>
            *** Ao ultrapassar o limite de qualquer plano faleMais uma taxa de
            10% do $/min será cobrado.
          </InfoTextStyled>
        </ModalContent>
      </CardBoxStyled>
    </ContainerStyled>
  );
}

Modal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired,
};

export default Modal;
