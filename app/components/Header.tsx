import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const Logo = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 40px;
  font-family: "BebasNeue";
`;

const Header = () => {
  return (
    <Container>
      <Logo>QuizBandeira</Logo>
    </Container>
  );
};

export default Header;
