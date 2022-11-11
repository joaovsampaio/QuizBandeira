import { Image, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AppLoading = () => {
  return (
    <Container>
      <Text>Carregando...</Text>
      <Image source={require("../assets/loadingdark.gif")} />
    </Container>
  );
};

export default AppLoading;
