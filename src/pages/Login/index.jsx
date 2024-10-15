import React from "react";
import useLogin from "../../hooks/auth/useLogin";
import background from "../../assets/images/login-background.png";
import * as S from "./style";

const Login = () => {
  const { login, isLoading, handleChange, request } = useLogin();

  return (
    <S.Container>
      <S.BackgroundImage src={background} alt="background" />

      <S.Form>
        <S.Title>로그인</S.Title>
        <S.Input
          type="text"
          value={request.username}
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <S.Input
          type="password"
          value={request.password}
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <S.Button onClick={login}>Login</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
