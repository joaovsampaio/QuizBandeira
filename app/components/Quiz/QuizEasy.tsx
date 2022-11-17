import { useEffect, useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";

import { QuestionsEasy } from "../../data/Questions";

import BtnCustom from "../../utils/buttons/BtnCustom";
import QuizTeamplate from "./QuizTemplate";

const Container = styled.View`
  flex: 1;
`;

const QuizEasy = ({ navigation }: any) => {
  const { name, colors } = useContext(ThemeContext);
  const btnOptionsColor = name === "dark" ? colors.secondary : colors.secondary;

  const [question, setQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [btnNext, setBtnNext] = useState(
    name === "dark" ? colors.black : colors.black
  );

  const isRightorNot = () => {
    if (QuestionsEasy[question].answer === currentAnswer && question < 4) {
      setQuestion(question + 1);
      setCurrentAnswer("");
    } else if (
      QuestionsEasy[question].answer === currentAnswer &&
      question === 4
    ) {
      navigation.navigate("GameOver");
    } else {
      setQuestion(0);
    }
  };

  useEffect(() => {
    if (currentAnswer) {
      setBtnNext(name === "dark" ? colors.misc : colors.misc);
    } else {
      setBtnNext(name === "dark" ? colors.black : colors.black);
    }
  }, [currentAnswer]);

  return (
    <Container>
      <QuizTeamplate
        flagImg={QuestionsEasy[question].imgFlag}
        currQuestion={question + 1}
        btnTip={QuestionsEasy[question].tip}
        btnContainer={
          <>
            <BtnCustom
              text={`A - ${QuestionsEasy[question].optionA}`}
              onPress={() => setCurrentAnswer("A")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={`B - ${QuestionsEasy[question].optionB}`}
              onPress={() => setCurrentAnswer("B")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={`C - ${QuestionsEasy[question].optionC}`}
              onPress={() => setCurrentAnswer("C")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={`D - ${QuestionsEasy[question].optionD}`}
              onPress={() => setCurrentAnswer("D")}
              bgColor={`${btnOptionsColor}`}
              size={8}
            />
            <BtnCustom
              text={
                question === 4
                  ? `Finalizar - ${currentAnswer}`
                  : `Resposta - ${currentAnswer}`
              }
              onPress={() => isRightorNot()}
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
