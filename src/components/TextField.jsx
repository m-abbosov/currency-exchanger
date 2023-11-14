import { useContext } from "react";
import styled from "styled-components";
import { CurrencyContext } from "../context/CurrencyContext";

const TextField = () => {
  const { amount, setAmount, handleConvert } = useContext(CurrencyContext);
  return (
    <Wrapper>
      <label htmlFor="amount">Amount</label>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        id="amount"
        onKeyDown={handleConvert}
        placeholder="0"
      />
    </Wrapper>
  );
};

export default TextField;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  label {
    font-size: 16px;
  }

  input {
    width: 100%;
    border: 1px solid gray;
    padding: 15px;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
  }
`;
