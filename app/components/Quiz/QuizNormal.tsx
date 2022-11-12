import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const QuizNormal = () => {
  return (
    <Container>
      <Text>Quiz</Text>
    </Container>
  );
};

export default QuizNormal;
