import { useContext } from "react";
import styled from "styled-components";
import { CurrencyContext } from "../context/CurrencyContext";
const ConvertButton = () => {
  const { handleConvert } = useContext(CurrencyContext);

  return <Wrapper onClick={handleConvert}>Convert</Wrapper>;
};

export default ConvertButton;

const Wrapper = styled.button`
  width: 100%;
  background-color: #4691fd;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  display: inline-block;
  margin-top: auto;

  &:active {
    opacity: 0.9;
  }
`;
