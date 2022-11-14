import React, { useContext } from "react";
import { Switch } from "react-native";
import styled from "styled-components/native";
import { ThemeContext } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`;

const Logo = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 40px;
  font-family: "BebasNeue";
`;

type Props = {
  HandleThemeChange: any;
};

const Header = ({ HandleThemeChange }: Props) => {
  const { name, colors } = useContext(ThemeContext);
  return (
    <Container>
      <Logo>QuizBandeira</Logo>
      <Switch
        trackColor={{ false: colors.details, true: colors.details }}
        thumbColor={name === "dark" ? colors.details : colors.details}
        onValueChange={HandleThemeChange}
        value={name === "dark" ? true : false}
      />
    </Container>
  );
};

export default Header;
