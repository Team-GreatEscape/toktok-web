import React from "react";
import useSignUp from "../../hooks/auth/useSignUp";
import background from "../../assets/images/signup-background.svg";
import * as S from "./style";

const SignUp = () => {
  const { signup, isLoading, handleChange, request } = useSignUp();

  return (
    <S.Container>
      <S.BackgroundImage src={background} alt="background" />

      <S.Form>
        <S.Title>회원가입</S.Title>
        <S.Input
          type="text"
          value={request.username}
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <S.Input
          type="email"
          value={request.email}
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <S.Input
          type="password"
          value={request.password}
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <S.Gender>
          <S.GenderOption value="male">Male</S.GenderOption>
          <S.GenderOption value="female">Female</S.GenderOption>
          <S.GenderOption value="other">Other</S.GenderOption>
        </S.Gender>

        <S.Button onClick={signup}>Sign Up</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default SignUp;
