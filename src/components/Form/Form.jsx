import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

const formDepartmentOptions = [
  {
    value: "option1",
  },
  {
    value: "option2",
  },
  {
    value: "option3",
  },
];

const formTimeOptions = [
  {
    value: "2:00 Available",
  },
  {
    value: "3:00 Available",
  },
  {
    value: "4:00 Available",
  },
  {
    value: "5:00 Available",
  },
  {
    value: "6:00 Available",
  },
];

const Form = ({ section, setMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "option1",
    time: "2:00 Available",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.time
    ) {
      setMessage({
        message: "Please fill in the form first ! ",
        show: true,
        state: "warning",
      });
    } else {
      setMessage({
        message: "Appointment Sent Successfuly ",
        show: true,
        state: "success",
      });

      setFormData({
        name: "",
        email: "",
        department: "",
        time: "",
      });
    }
  };

  if (section === "contact") {
    return (
      <Wrapper>
        <FormContainer onSubmit={handleSubmit} section="contact">
          <Input
            name="name"
            type="text"
            placeHolder="Full Name"
            width="100%"
            value={formData.name}
            formData={formData}
            setFormData={setFormData}
          />
          <Input
            name="email"
            type="email"
            placeHolder="example@gmail.com"
            width="100%"
            value={formData.email}
            formData={formData}
            setFormData={setFormData}
          />
          <Input
            name="department"
            placeHolder="Please Select"
            options={formDepartmentOptions}
            width="100%"
            value={formData.department}
            formData={formData}
            setFormData={setFormData}
          />
          <Input
            name="time"
            placeHolder="Select Time"
            options={formTimeOptions}
            width="100%"
            value={formData.time}
            formData={formData}
            setFormData={setFormData}
          />
          <Input
            textarea
            name="message"
            placeHolder="Message"
            width="100%"
            value={formData.message}
            formData={formData}
            setFormData={setFormData}
          />
        </FormContainer>
        <Button type="submit" content="book appointment" width="100%" />
      </Wrapper>
    );
  }
  return (
    <FormContainer onSubmit={handleSubmit} section={section}>
      <Input
        label="name"
        name="name"
        type="text"
        placeHolder="Full Name"
        width="100%"
        value={formData.name}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="email"
        name="email"
        type="email"
        placeHolder="example@gmail.com"
        width="100%"
        value={formData.email}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="department"
        name="department"
        placeHolder="Please Select"
        options={formDepartmentOptions}
        width="95%"
        value={formData.department}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        label="time"
        name="time"
        placeHolder="Select Time"
        options={formTimeOptions}
        width="95%"
        value={formData.time}
        formData={formData}
        setFormData={setFormData}
      />

      <Button type="submit" content="book appointment" width="100%" />
    </FormContainer>
  );
};

const Wrapper = styled.div`
  width: 50%;

  @media screen and (max-width: 650px) {
    & {
      width: 100%;
    }
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: ${(props) =>
    props.section === "contact" ? "row" : "column"};

  flex-wrap: wrap;

  margin: 1rem 0;
  width: 100%;
`;

export default Form;
