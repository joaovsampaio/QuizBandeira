import React from "react";
import styled from "styled-components/native";
import { dark, light } from "../themes/Theme.styled";
import { BtnHome } from "../utils/buttons/BtnCustom";
import Quiz from "./Quiz";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <BtnHome
        text="Fácil"
        bgColor={`${dark ? dark.colors.secondary : light.colors.secondary}`}
      />
      <BtnHome
        text="Médio"
        bgColor={`${dark ? dark.colors.details : light.colors.details}`}
      />
      <BtnHome
        text="Difícil"
        bgColor={`${dark ? dark.colors.primary : light.colors.primary}`}
      />
    </Container>
  );
};

export default Home;
