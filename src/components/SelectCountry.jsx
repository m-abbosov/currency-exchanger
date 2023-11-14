/* eslint-disable react/prop-types */
import styled from "styled-components";

const SelectCountry = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, label, value, setValue } = props;

  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <select
        onChange={(e) => setValue(e.target.value)}
        value={value}
        id={label}
      >
        {data.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default SelectCountry;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  label {
    font-size: 16px;
  }
  select {
    width: 100%;
    border: 1px solid gray;
    padding: 15px;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    -webkit-appearance: none;
    appearance: none;
    text-align: center;
  }
`;
