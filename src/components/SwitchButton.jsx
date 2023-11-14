import styled from "styled-components";
import { ExchangeIcon } from "../assets/icons";
import { CurrencyContext } from "../context/CurrencyContext";
import { useContext } from "react";

const ExchangeButton = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);
  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  
  return (
    <Wrapper onClick={handleSwitch}>
      <img src={ExchangeIcon} alt="" />
    </Wrapper>
  );
};

export default ExchangeButton;

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 50px;
  }
`;
