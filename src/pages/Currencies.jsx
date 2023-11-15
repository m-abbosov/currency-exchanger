import { useContext, useState } from "react";
import styled from "styled-components";
import SelectCountry from "../components/SelectCountry";
import { CurrencyContext } from "../context/CurrencyContext";
import useAxios from "../hooks/useAxios";

const Currencies = () => {
  const { countries } = useContext(CurrencyContext);
  const [baseValue, setBaseValue] = useState("🇺🇿 UZS");
  const [data, , loaded] = useAxios(
    `https://api.fastforex.io/fetch-multi?from=${
      baseValue.split(" ")[1]
    }&to=USD,RUB,EUR,UZS,CNY,JPY,KZT,TJS&api_key=4d8b7a41a7-360197d13f-s449hj`
  );
  const keys = data.results ? Object.keys(data.results) : [];
  const values = data.results ? Object.values(data.results) : [];

  return (
    <Wrapper>
      <SelectCountry
        data={countries}
        label="Base currency"
        value={baseValue}
        setValue={setBaseValue}
      />
      <ul className="currencies-list">
        {loaded ? <li className="skeleton"></li> : ""}
        {keys.map((item, i) => {
          return (
            <li className="currencies-list__item" key={item}>
              1 {baseValue.split(" ")[1]} = {values[i]} {item}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Currencies;

const Wrapper = styled.div`
  padding: 2rem;

  select {
    text-align: left;
  }

  .currencies-list {
    list-style: none;
    margin-top: 15px;

    &__item {
      font-size: 18px;
      padding: 15px 20px;
      transition: all 0.2s ease;

      &:hover {
        background-color: #4691fd;
        border-radius: 4px;
        color: white;
      }
    }
    li.skeleton {
      width: 100%;
      height: 50px;
      background-color: #e2e5e7;
      background-image: linear-gradient(
        90deg,
        rgba(#fff, 0),
        rgba(#fff, 0.5),
        rgba(#fff, 0)
      );
      background-size: 40px 100%;
      background-repeat: no-repeat;
      background-position: left -40px top 0;
      animation: shine 1s ease infinite;
      border-radius: 4px;
    }
    @keyframes shine {
      to {
        background-position: right -40px top 0;
      }
    }
  }

  @media (max-width: 770px) {
    padding: 1.5rem;
  }
`;
