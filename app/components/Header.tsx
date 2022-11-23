import React, { useContext, useEffect, useState } from "react";
import { Switch, Text } from "react-native";
import styled from "styled-components/native";
import { ThemeContext } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

const Logo = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 40px;
  font-family: "RobotoBold";
`;

const ThemeSwitcher = styled.View`
  flex-direction: row;
  align-items: center;
`;

type Props = {
  HandleThemeChange: any;
};

const Header = ({ HandleThemeChange }: Props) => {
  const { name, colors } = useContext(ThemeContext);
  const [sunColor, setSunColor] = useState("");
  const [moonColor, setMoonColor] = useState("");

  useEffect(() => {
    if (name === "dark") {
      setMoonColor(colors.details);
      setSunColor(colors.black);
    } else if (name === "light") {
      setSunColor(colors.title);
      setMoonColor(colors.white);
    }
  }, [HandleThemeChange]);

  return (
    <Container>
      <Logo>QuizBandeira</Logo>
      <ThemeSwitcher>
        <Text>
          <Ionicons name="sunny-sharp" size={24} color={sunColor} />
        </Text>
        <Switch
          trackColor={{ false: colors.details, true: colors.details }}
          thumbColor={name === "dark" ? colors.details : colors.details}
          onValueChange={HandleThemeChange}
          value={name === "dark" ? true : false}
        />
        <Text>
          <Ionicons name="moon-sharp" size={24} color={moonColor} />
        </Text>
      </ThemeSwitcher>
    </Container>
  );
};

export default Header;
