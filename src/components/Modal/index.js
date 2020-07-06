import PropTypes from "prop-types";
import React from "react";
import { MdClose } from "react-icons/md";
import {
  CardBoxStyled,
  ContainerStyled,
  Header,
  InfoTextStyled,
  ModalContent,
  OverflowStyled,
  TableBodyStyled,
  TableColumnStyled,
  TableHeaderStyled,
  TableRowStyled,
  TableStyled,
  Title
} from "./styles";

function Modal({ visibility, modalHandler, data, labelHeader }) {
  return (
    <ContainerStyled visibility={visibility.toString()}>
      <OverflowStyled
        onClick={() => {
          modalHandler(false);
        }}
      />
      <CardBoxStyled>
        <Header>
          <Title>tabela de tarifas</Title>
          <MdClose
            onClick={() => modalHandler(false)}
            style={{ fontSize: 25, color: "#4f4f4f", cursor: "pointer" }}
          />
        </Header>
        <ModalContent>
          <TableStyled>
            <TableBodyStyled>
              <TableRowStyled>
                {labelHeader.map((label, index) => (
                  <TableHeaderStyled key={index}>{label}</TableHeaderStyled>
                ))}
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
            </TableBodyStyled>
          </TableStyled>
          <InfoTextStyled>
            *** Ao exceder o limite de qualquer plano faleMais será cobrado o
            valor da tarifa padrão mais uma taxa de 10% por minuto.
          </InfoTextStyled>
        </ModalContent>
      </CardBoxStyled>
    </ContainerStyled>
  );
}

Modal.defaultProps = {
  visibility: false,
  modalHandler: false,
};

Modal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired,
};

export default Modal;
