import { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import BtnCustom from "../utils/buttons/BtnCustom";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const WelcomeContainer = styled.View`
  flex: 0.5;
  justify-content: center;
`;

const WelcomeText = styled.Text`
  font-size: 50px;
  font-family: "RobotoBold";
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const DifficultyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DifficultyText = styled.Text`
  font-size: 20px;
  font-family: "RobotoLight";
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.reversebw};
`;

const Home = ({ navigation }: any) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <WelcomeContainer>
        <WelcomeText>Bem Vindo(a)!</WelcomeText>
      </WelcomeContainer>
      <DifficultyContainer>
        <DifficultyText>Escolha a dificuldade:</DifficultyText>
        <BtnCustom
          onPress={() => navigation.navigate("QuizEasy")}
          text="Fácil"
          txAlign="center"
          size={15}
        />
        <BtnCustom
          onPress={() => navigation.navigate("QuizNormal")}
          text="Médio"
          bgColor={colors.details}
          txAlign="center"
          size={15}
        />
        <BtnCustom
          onPress={() => navigation.navigate("QuizHard")}
          text="Difícil"
          bgColor={colors.primary}
          txAlign="center"
          size={15}
        />
      </DifficultyContainer>
    </Container>
  );
};

export default Home;
