import { BackHandler } from "react-native";
import React, { useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components/native";
import BtnCustom from "../utils/buttons/BtnCustom";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Congratulations = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.details};
  margin-bottom: 20px;
`;

const SubCongratulations = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.reversebw};
`;

const GameOver = ({ navigation }: any) => {
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    function handleBackButton() {
      navigation.navigate("Home");
      return true;
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, [navigation]);
  return (
    <Container>
      <Congratulations>Parabéns por concluir o desafio</Congratulations>
      <SubCongratulations>Espero que tenha aproveitado!</SubCongratulations>
      <BtnCustom
        text="Voltar ao menu"
        onPress={() => navigation.navigate("Home")}
        bgColor={colors.misc}
        txAlign="center"
        size={10}
      />
    </Container>
  );
};

export default GameOver;
