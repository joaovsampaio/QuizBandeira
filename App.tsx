import React from "react";
import { useState } from "react";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { light, dark } from "./app/themes/Theme.styled";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./app/components/Header";
import AppLoading from "./app/components/AppLoading";
import Home from "./app/components/Home";
import QuizEasy from "./app/components/quiz/QuizEasy";
import QuizNormal from "./app/components/quiz/QuizNormal";
import QuizHard from "./app/components/quiz/QuizHard";
import GameOver from "./app/components/GameOver";
import ModalCustom from "./app/UI/ModalCustom";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoBold: require("./app/assets/fonts/Roboto-Bold.ttf"),
    RobotoLight: require("./app/assets/fonts/Roboto-Light.ttf"),
  });

  const [selectedTheme, setSelectedTheme] = useState(dark);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const HandleThemeChange = () => {
    setSelectedTheme(selectedTheme.name === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: `${
                selectedTheme === dark
                  ? dark.colors.bgColor
                  : light.colors.bgColor
              }`,
            },
            headerTintColor: `${
              selectedTheme === dark ? dark.colors.title : light.colors.title
            }`,
            headerTitleStyle: {
              fontFamily: "RobotoBold",
              fontSize: 30,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => (
                <Header HandleThemeChange={HandleThemeChange} />
              ),
            }}
          />
          <Stack.Screen
            name="QuizEasy"
            component={QuizEasy}
            options={{
              title: "Quiz (Fácil)",
            }}
          />
          <Stack.Screen
            name="QuizNormal"
            component={QuizNormal}
            options={{
              title: "Quiz (Médio)",
            }}
          />
          <Stack.Screen
            name="QuizHard"
            component={QuizHard}
            options={{
              title: "Quiz (Difícil)",
            }}
          />
          <Stack.Screen
            name="GameOver"
            component={GameOver}
            options={{
              title: "Fim de Jogo",
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="ModalCustom"
            component={ModalCustom}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
