import { useEffect, useState, useContext } from "react";
import { Alert } from "react-native";
import styled, { ThemeContext } from "styled-components/native";

import { QuestionsEasy } from "../../data/Questions";

import BtnCustom from "../../utils/buttons/BtnCustom";
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

  const alertWrong = () =>
    Alert.alert("Bandeira Errada", "Tente usar uma dica!", [
      {
        text: "Voltar ao Menu",
        onPress: () => navigation.navigate("Home"),
      },
      { text: "Recomeçar", onPress: () => setQuestion(0) },
    ]);

  const isRightorNot = () => {
    if (rightAnswer && question < 4) {
      setQuestion(question + 1);
      setCurrentAnswer("");
    } else if (rightAnswer && question === 4) {
      navigation.navigate("GameOver");
    } else {
      alertWrong();
      setCurrentAnswer("");
    }
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
        flagImg={QuestionsEasy[question].imgFlag}
        currQuestion={question + 1}
        btnTip={QuestionsEasy[question].tip}
        btnContainer={
          <>
            <BtnCustom
              text={`A - ${QuestionsEasy[question].optionA}`}
              onPress={() => setCurrentAnswer("A")}
              size={8}
            />
            <BtnCustom
              text={`B - ${QuestionsEasy[question].optionB}`}
              onPress={() => setCurrentAnswer("B")}
              size={8}
            />
            <BtnCustom
              text={`C - ${QuestionsEasy[question].optionC}`}
              onPress={() => setCurrentAnswer("C")}
              size={8}
            />
            <BtnCustom
              text={`D - ${QuestionsEasy[question].optionD}`}
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
