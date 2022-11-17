import { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import BtnCustom from "../utils/buttons/BtnCustom";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const WelcomeContainer = styled.ImageBackground`
  flex: 0.5;
  justify-content: center;
`;

const WelcomeText = styled.Text`
  font-size: 40px;
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
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

const Home = ({ navigation }: any) => {
  const { name, colors } = useContext(ThemeContext);
  return (
    <Container>
      <WelcomeContainer
        source={require("../assets/mapa_mundi.png")}
        resizeMode="cover"
      >
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
          bgColor={`${name === "dark" ? colors.details : colors.details}`}
          txAlign="center"
          size={15}
        />
        <BtnCustom
          onPress={() => navigation.navigate("QuizHard")}
          text="Difícil"
          bgColor={`${name === "dark" ? colors.primary : colors.primary}`}
          txAlign="center"
          size={15}
        />
      </DifficultyContainer>
    </Container>
  );
};

export default Home;
