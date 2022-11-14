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
import QuizEasy from "./app/components/Quiz/QuizEasy";
import QuizNormal from "./app/components/Quiz/QuizNormal";
import QuizHard from "./app/components/Quiz/QuizHard";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("./app/assets/fonts/BebasNeue-Regular.ttf"),
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
                dark ? dark.colors.bgColor : light.colors.bgColor
              }`,
            },
            headerTintColor: `${dark ? dark.colors.title : light.colors.title}`,
            headerTitleStyle: {
              fontFamily: "BebasNeue",
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
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
