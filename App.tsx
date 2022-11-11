import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import styled, { ThemeProvider } from "styled-components/native";
import { light, dark } from "./app/themes/Theme.styled";

import Header from "./app/components/Header";
import AppLoading from "./app/components/AppLoading";
import Home from "./app/components/Home";

const Container = styled.SafeAreaView`
  padding-top: 10%;
  background-color: ${({ theme }) => theme.colors.bgColor};
  flex: 1;
`;

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("./app/assets/fonts/BebasNeue-Regular.ttf"),
  });

  const [selectedTheme, setSelectedTheme] = useState(dark);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <StatusBar style="auto" />
        <Header />
        <Home />
      </Container>
    </ThemeProvider>
  );
}
