import { useEffect, useState, useContext } from "react";
import { Alert } from "react-native";
import styled, { ThemeContext } from "styled-components/native";

import { QuestionsEasy } from "../../data/Questions";

import BtnCustom from "../../UI/BtnCustom";
import { isRightOrNot } from "../../utils/isRightOrNot";
import QuizTeamplate from "./QuizTemplate";

const Container = styled.View`
  flex: 1;
`;

const QuizEasy = ({ navigation }: any) => {
  const { colors } = useContext(ThemeContext);

  const [question, setQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [btnNext, setBtnNext] = useState(colors.black);

  const rightAnswer = QuestionsEasy[question].answer === currentAnswer;
  const questionState = QuestionsEasy[question];

  const isRightorNot = () => {
    isRightOrNot({
      rightAnswer,
      question,
      setQuestion,
      setCurrentAnswer,
      navigation,
    });
  };

  useEffect(() => {
    if (currentAnswer) {
      setBtnNext(colors.misc);
    } else {
      setBtnNext(colors.black);
    }
  }, [currentAnswer]);

  return (
    <Container>
      <QuizTeamplate
        flagImg={questionState.imgFlag}
        currQuestion={question + 1}
        btnTip={questionState.tip}
        btnContainer={
          <>
            <BtnCustom
              text={`A - ${questionState.optionA}`}
              onPress={() => setCurrentAnswer("A")}
              size={8}
            />
            <BtnCustom
              text={`B - ${questionState.optionB}`}
              onPress={() => setCurrentAnswer("B")}
              size={8}
            />
            <BtnCustom
              text={`C - ${questionState.optionC}`}
              onPress={() => setCurrentAnswer("C")}
              size={8}
            />
            <BtnCustom
              text={`D - ${questionState.optionD}`}
              onPress={() => setCurrentAnswer("D")}
              size={8}
            />
            <BtnCustom
              text={
                question === 4
                  ? `Finalizar - ${currentAnswer}`
                  : `Confirme - ${currentAnswer}`
              }
              onPress={() => isRightorNot()}
              disabled={currentAnswer ? false : true}
              bgColor={btnNext}
              txAlign="center"
              size={12}
            />
          </>
        }
      />
    </Container>
  );
};

export default QuizEasy;
