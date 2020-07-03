import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import Modal from "../../components/Modal";
import data from "../../utils/data.json";
import {
  CalculateStyled,
  ContainerStyled,
  GroupInputStyled,
  GroupResultStyled,
  HeaderStyled,
  InfoStyled,
  MainStyled,
  ResultLabelStyled,
  ResultStyled,
} from "./styles";

function CalculateCalls() {
  const [plans, setPlans] = useState([
    {
      label: "FaleMais 30",
      value: 30,
    },
    {
      label: "FaleMais 60",
      value: 60,
    },
    {
      label: "FaleMais 120",
      value: 120,
    },
  ]);
  const [codes, setCodes] = useState([
    { label: "011" },
    { label: "016" },
    { label: "017" },
    { label: "018" },
  ]);

  const [origin, setOrigin] = useState(codes[0].label);
  const [destination, setDestination] = useState(codes[1].label);
  const [plan, setPlan] = useState(plans[0].label);
  const [callTime, setCallTime] = useState("");
  const [withPlan, setWithPlan] = useState(0);
  const [withoutPlan, setWithoutPlan] = useState(0);
  const [profit, setProfit] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (origin && destination && plan && callTime) {
      let { minute } = data.find(
        (item) => item.origin === origin && item.destination === destination
      );

      let minuteRate = (minute * 10) / 100 + minute;

      let valueCallTime = plans.find((item) => item.label === plan);

      setWithPlan(
        callTime > valueCallTime.value
          ? (callTime - valueCallTime.value) * minuteRate
          : 0
      );
      setWithoutPlan(callTime * minute);
    } else {
      setWithPlan(0);
      setWithoutPlan(0);
    }
  }, [origin, destination, plan, callTime, plans]);

  useEffect(() => {
    setProfit(withoutPlan - withPlan);
  }, [withPlan, withoutPlan]);

  return (
    <ContainerStyled>
      <Modal
        openModal={openModal}
        setOpenModal={(status) => setOpenModal(status)}
      />
      <HeaderStyled>
        <Link to="/">
          <IoMdArrowRoundBack />
          voltar para a home
        </Link>
      </HeaderStyled>
      <MainStyled>
        <CalculateStyled>
          <GroupInputStyled>
            <InputSelect
              width={45}
              label="origem (ddd)"
              name="origin"
              values={codes}
              valueChange={(value) => {
                value.origin !== "011"
                  ? setDestination("011")
                  : setDestination("016");
                setOrigin(value.origin);
              }}
              changeValue={origin}
            />
            <InputSelect
              width={45}
              label="destino (ddd)"
              name="destination"
              values={codes}
              valueChange={(value) => {
                value.destination !== "011"
                  ? setOrigin("011")
                  : setOrigin("016");
                setDestination(value.destination);
              }}
              changeValue={destination}
            />
          </GroupInputStyled>
          <GroupInputStyled>
            <InputSelect
              width={45}
              label="plano faleMais"
              name="plan"
              values={plans}
              valueChange={(value) => {
                setPlan(value.plan);
              }}
            />
            <Input
              width={45}
              label="minutos falados"
              name="callTime"
              onChange={(value) => {
                setCallTime(value.callTime);
              }}
              mask="99999999999"
            />
          </GroupInputStyled>
        </CalculateStyled>
        <GroupResultStyled>
          <ResultStyled>
            <ResultLabelStyled>com plano:</ResultLabelStyled>
            <ResultLabelStyled>
              {withPlan.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </ResultLabelStyled>
          </ResultStyled>
          <ResultStyled>
            <ResultLabelStyled>sem plano:</ResultLabelStyled>
            <ResultLabelStyled>
              {withoutPlan.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </ResultLabelStyled>
          </ResultStyled>
          <ResultStyled>
            <ResultLabelStyled>resultado:</ResultLabelStyled>
            <ResultLabelStyled>
              {profit > 0
                ? profit.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                : profit.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
            </ResultLabelStyled>
          </ResultStyled>
        </GroupResultStyled>
        <InfoStyled>
          <label>consulte as tarifas fixas por minuto clicando no ícone</label>
          <MdInfo
            onClick={() => setOpenModal(true)}
            style={{ fontSize: 25, cursor: "pointer" }}
          />
        </InfoStyled>
      </MainStyled>
    </ContainerStyled>
  );
}

export default CalculateCalls;
