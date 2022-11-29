import { useEffect, useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";

import { QuestionsHard } from "../../data/Questions";
import {
  useBtnNext,
  useCurrentAnswer,
  useQuestion,
} from "../../store/globalState";

import BtnCustom from "../../UI/BtnCustom";
import { isRightOrNot } from "../../utils/isRightOrNot";
import QuizTeamplate from "./QuizTemplate";

const Container = styled.View`
  flex: 1;
`;

const QuizHard = ({ navigation }: any) => {
  const { colors } = useContext(ThemeContext);

  const question = useQuestion((state) => state.question);
  const setQuestion = useQuestion((state) => state.setQuestion);

  const currentAnswer = useCurrentAnswer((state) => state.currentAnswer);
  const setCurrentAnswer = useCurrentAnswer((state) => state.setCurrentAnswer);

  const btnNext = useBtnNext((state) => state.currentBtnNext);
  const setBtnNext = useBtnNext((state) => state.setBtnNext);

  const rightAnswer = QuestionsHard[question].answer === currentAnswer;
  const questionState = QuestionsHard[question];

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
    setQuestion(0);
    setCurrentAnswer("");
  }, []);

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

export default QuizHard;
