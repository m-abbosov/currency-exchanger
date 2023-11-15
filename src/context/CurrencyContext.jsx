/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇺🇿 UZS");
  const [toCurrency, setToCurrency] = useState("🇺🇸 USD");
  const [resultCurrency, setResultCurrency] = useState(0);
  const [amount, setAmount] = useState("");
  const countries = [
    "🇺🇿 UZS",
    "🇷🇺 RUB",
    "🇺🇸 USD",
    "🇪🇺 EUR",
    "🇨🇳 CNY",
    "🇯🇵 JPY",
    "🇰🇿 KZT",
    "🇹🇯 TJS",
  ];

  const handleConvert = (key) => {
    if (key.key === "Enter" || key.key === undefined) {
      if (amount == 0) {
        setResultCurrency(0);
      }
      if (Number(amount)) {
        axios
          .get(
            `https://api.fastforex.io/convert?from=${
              fromCurrency.split(" ")[1]
            }&to=${
              toCurrency.split(" ")[1]
            }&amount=${amount}&api_key=4d8b7a41a7-360197d13f-s449hj`
          )
          .then((res) => {
            setResultCurrency(res.data.result[toCurrency.split(" ")[1]]);
          });
      } else {
        setResultCurrency(0);
      }
    }
  };
  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    resultCurrency,
    setResultCurrency,
    handleConvert,
    countries,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
