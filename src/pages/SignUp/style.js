import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-left: 64rem;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;

export const Input = styled.input`
  width: 28rem;
  height: 3rem;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  outline: none;
`;

export const Button = styled.button`
  width: 28rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  color: white;

  &:hover {
    /* background-color: ${({ theme }) => theme.colors.secondaryHover}; */
  }
`;

export const Gender = styled.select`
  width: 28rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const GenderOption = styled.option`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
`;
