import { useEffect, useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { dark, light } from "../../themes/Theme.styled";

import { QuestionsEasy } from "../../data/Questions";

import BtnCustom from "../../utils/buttons/BtnCustom";
import QuizTeamplate from "./QuizTemplate";

const Container = styled.View`
  flex: 1;
`;

const QuizEasy = () => {
  const { name, colors } = useContext(ThemeContext);
  const btnOptionsColor = name === "dark" ? colors.secondary : colors.secondary;

  const [question, setQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [btnNext, setBtnNext] = useState(
    name === "dark" ? colors.black : colors.black
  );

  const isRight = () => {
    if (QuestionsEasy[question].answer === currentAnswer) {
      setQuestion(question + 1);
    }
  };

  useEffect(() => {
    if (currentAnswer != QuestionsEasy[question].answer) {
      setQuestion(0);
    }
  }, [currentAnswer]);

  useEffect(() => {
    if (QuestionsEasy[question].answer === currentAnswer) {
      setBtnNext(name === "dark" ? colors.misc : colors.misc);
    } else {
      setBtnNext(name === "dark" ? colors.black : colors.black);
    }
  }, [isRight]);

  return (
    <Container>
      <QuizTeamplate
        flagImg={QuestionsEasy[question].imgFlag}
        currQuestion={question + 1}
        btnTip={QuestionsEasy[question].tip}
        btnContainer={
          <>
            <BtnCustom
              text={QuestionsEasy[question].optionA}
              onPress={() => setCurrentAnswer("A")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={QuestionsEasy[question].optionB}
              onPress={() => setCurrentAnswer("B")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={QuestionsEasy[question].optionC}
              onPress={() => setCurrentAnswer("C")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={QuestionsEasy[question].optionD}
              onPress={() => setCurrentAnswer("D")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={question === 4 ? "Finalizar" : "Avançar"}
              onPress={() => isRight()}
              bgColor={`${btnNext}`}
              size={12}
            />
          </>
        }
      />
    </Container>
  );
};

export default QuizEasy;
