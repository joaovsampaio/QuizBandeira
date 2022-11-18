import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1e2836;
`;

const LoadingText = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

const AppLoading = () => {
  return (
    <Container>
      <LoadingText>Carregando...</LoadingText>
      <Image source={require("../assets/loading.gif")} />
    </Container>
  );
};

export default AppLoading;
