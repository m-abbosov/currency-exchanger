import styled from "styled-components";
import TextField from "../components/TextField";
import SelectCountry from "../components/SelectCountry";
import ExchangeButton from "../components/SwitchButton";
import ConvertButton from "../components/ConvertButton";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const Home = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    resultCurrency,
    countries,
  } = useContext(CurrencyContext);

  return (
    <Wrapper>
      <p>Exchange Rate</p>
      <b>{resultCurrency}</b>
      <p>
        {fromCurrency} - {toCurrency}
      </p>
      <TextField />
      <div className="exchange">
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
          data={countries}
        />
        <ExchangeButton />
        <SelectCountry
          value={toCurrency}
          setValue={setToCurrency}
          label="To"
          data={countries}
        />
      </div>
      <ConvertButton />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  height: calc(100% - 60px);

  p {
    color: #363636;
    font-size: 18px;
    margin-bottom: 20px;
  }

  b {
    color: #363636;
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 20px;
  }

  .exchange {
    margin: 3rem 0;
    width: 100%;
    display: grid;
    align-items: flex-end;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 770px) {
    padding: 1.5rem;
  }
  
`;
