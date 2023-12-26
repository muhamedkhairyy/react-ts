import React, { useState } from "react";
import { IUserInfo, IFormData } from "../types";
import { fromData } from "../data";

const RegisterForm = () => {
  const [userData, setUserData] = useState<IUserInfo>({
    userName: "",
    email: "",
    address: "",
    password: "",
  });

  const onChangeHandeler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const RenderForm = fromData.map((input: IFormData,idx) => {
    return (
      <div className="input-wrapper" key={idx}>
        <label htmlFor={input.id}> {input.label}</label>
        <input
          type={input.type}
          name={input.name}
          id={input.id}
          value={userData[input.name]}
          onChange={onChangeHandeler}
        />
      </div>
    );
  });
  const submitData = () => {
    console.log(userData);
    setUserData({
      userName: "",
      email: "",
      address: "",
      password: "",
    });
  };
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {RenderForm}
      <button onClick={submitData}> submit </button>
    </form>
  );
};

export default RegisterForm;
