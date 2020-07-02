import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import data from "../../utils/data.json";

function Home() {
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
  useEffect(() => {
    // ***** Função para calcular a taxa dos minutos excedentes.
    if (data) {
      let { minute } = data.find(
        (item) => item.origin === "018" && item.destination === "011"
      );
      minute = (minute * 10) / 100 + minute;
      console.log(minute, "minuto com 10% de taxa");
      //*****
      const callTime = 40;
      if (callTime > plans[0].value) {
        console.log((callTime - plans[0].value) * minute, "if");
      } else {
        console.log(0, "else");
      }
    }
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Começou essa porra</p>
        <InputSelect
          width={10}
          label="forma de constituição"
          name="constitutionType"
          values={plans}
          valueChange={(value) => {
            // changeValue(value);
          }}
          // changeValue={data.constitutionType && data.constitutionType.label}
          marginLabel={15}
        />
        <br />
        <br />
        <Input
          width={100}
          height={100}
          label="destino"
          name="teste"
          onChange={(e) => {
            console.log(e, "e");
          }}
          mask="99999999999"
          key={1}
          errorMessage={"input.errorMessage"}
          // value={input.value}
        />
        <br />
        <br />
        <Input
          width={100}
          height={100}
          label="tempo"
          name="teste"
          onChange={(e) => {
            console.log(e, "e");
          }}
          mask="99999999999"
          key={1}
          errorMessage={"input.errorMessage"}
          // value={input.value}
        />
      </header>
    </div>
  );
}

export default Home;
