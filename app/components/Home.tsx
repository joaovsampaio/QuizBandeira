import { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import BtnCustom from "../utils/buttons/BtnCustom";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Home = ({ navigation }: any) => {
  const { name, colors } = useContext(ThemeContext);
  return (
    <Container>
      <BtnCustom
        onPress={() => navigation.navigate("QuizEasy")}
        text="Fácil"
        bgColor={`${name === "dark" ? colors.secondary : colors.secondary}`}
        size={15}
      />
      <BtnCustom
        onPress={() => navigation.navigate("QuizNormal")}
        text="Médio"
        bgColor={`${name === "dark" ? colors.details : colors.details}`}
        size={15}
      />
      <BtnCustom
        onPress={() => navigation.navigate("QuizHard")}
        text="Difícil"
        bgColor={`${name === "dark" ? colors.primary : colors.primary}`}
        size={15}
      />
    </Container>
  );
};

export default Home;
