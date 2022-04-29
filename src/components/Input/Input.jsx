import React from "react";
import styled from "styled-components";

const Input = ({
  textarea,
  formData,
  setFormData,
  label,
  name,
  options,
  placeHolder,
  type,
  ...otherProps
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <Container label={label} textarea={textarea}>
      {label && <Label htmlFor={label.toLowerCase()}>{label}*</Label>}
      {options ? (
        <Select
          onChange={(e) => handleChange(e)}
          name={name}
          {...otherProps}
          label={label}
        >
          {options.map((item, index) => {
            return (
              <Option value={item.value} key={index}>
                {item.value}
              </Option>
            );
          })}
        </Select>
      ) : textarea ? (
        <TextArea
          placeholder={placeHolder}
          {...otherProps}
          name={name}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <InputField
          label={label}
          placeholder={placeHolder}
          type={type}
          {...otherProps}
          name={name}
          onChange={(e) => handleChange(e)}
        />
      )}
    </Container>
  );
};

const Select = styled.select`
  outline: none;
  border: none;
  border-radius: 6px;

  ${(props) =>
    props.label
      ? ` max-width: ${(props) => props.width && props.width};`
      : "width : 100%;"}

  background-color: #f9f9f9;
  padding: 1rem;
  border: 1px solid var(--muted-color);
  font-weight: bold;
  margin: 0.6rem;
  color: var(--second-text-color);
`;
const Option = styled.option`
  outline: none;
  border: none;
  border-radius: 6px;

  background-color: #f9f9f9;
  padding: 1rem;
  border: 1px solid var(--muted-color);
  font-weight: bold;
  margin: 0.6rem;
  color: var(--second-text-color);
`;

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (!props.label ? "row" : "column")};
  flex-basis: ${(props) => (props.label || props.textarea ? "100%" : "49%")};
`;

const Label = styled.label`
  font-weight: 600;
  text-transform: capitalize;
`;

const InputField = styled.input`
  outline: none;
  border: none;
  border-radius: 6px;

  ${(props) =>
    props.label
      ? ` max-width: ${(props) => props.width && props.width};`
      : "width : 100%;"}

  background-color: #f9f9f9;
  padding: 1rem;
  border: 1px solid var(--muted-color);
  font-weight: bold;
  margin: 0.6rem;

  /* @media screen and (max-width: 650px) {
    & {
      width: 200px;
    }
  } */
`;

const TextArea = styled.textarea`
  outline: none;
  border: none;
  border-radius: 6px;

  ${(props) =>
    props.label
      ? ` max-width: ${(props) => props.width && props.width};`
      : "width : 100%;"}

  background-color: #f9f9f9;
  padding: 1rem;
  border: 1px solid var(--muted-color);
  font-weight: bold;
  margin: 0.6rem;
`;

export default Input;
