import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 4rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  cursor: pointer;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #fff;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
