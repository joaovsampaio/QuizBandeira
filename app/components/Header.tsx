import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

const Logo = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 50px;
  font-family: "BebasNeue";
  text-decoration: underline;
`;

const Header = () => {
  return (
    <Container>
      <Logo>QuizBandeira</Logo>
    </Container>
  );
};

export default Header;
