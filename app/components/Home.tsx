import styled from "styled-components/native";
import { dark, light } from "../themes/Theme.styled";
import { BtnHome } from "../utils/buttons/BtnCustom";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Home = ({ navigation }: any) => {
  return (
    <Container>
      <BtnHome
        onPress={() => navigation.navigate("QuizEasy")}
        text="Fácil"
        bgColor={`${dark ? dark.colors.secondary : light.colors.secondary}`}
      />
      <BtnHome
        onPress={() => navigation.navigate("QuizNormal")}
        text="Médio"
        bgColor={`${dark ? dark.colors.details : light.colors.details}`}
      />
      <BtnHome
        onPress={() => navigation.navigate("QuizHard")}
        text="Difícil"
        bgColor={`${dark ? dark.colors.primary : light.colors.primary}`}
      />
    </Container>
  );
};

export default Home;
