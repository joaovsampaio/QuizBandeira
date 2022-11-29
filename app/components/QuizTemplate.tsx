import { useContext, useEffect } from "react";
import { Alert, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled, { ThemeContext } from "styled-components/native";
import {
  useBtnNext,
  useCurrentAnswer,
  useQuestion,
} from "../store/globalState";

import BtnCustom from "../UI/BtnCustom";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Wrapped = styled.View`
  flex: 1;
  align-items: center;
  margin: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
`;

const QuizHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 10px 0 25px 0;
  padding: 0 30px;
  justify-content: space-between;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

const BtnTip = styled.Pressable`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledImage = styled(Image)`
  margin-bottom: 50px;
`;

const QuizTeamplate = ({ route, navigation }: any) => {
  const { colors } = useContext(ThemeContext);

  const { questionMode } = route.params;

  const question = useQuestion((state) => state.question);
  const setQuestion = useQuestion((state) => state.setQuestion);

  const currentAnswer = useCurrentAnswer((state) => state.currentAnswer);
  const setCurrentAnswer = useCurrentAnswer((state) => state.setCurrentAnswer);

  const btnNext = useBtnNext((state) => state.currentBtnNext);
  const setBtnNext = useBtnNext((state) => state.setBtnNext);

  const rightAnswer = questionMode[question].answer === currentAnswer;
  const questionState = questionMode[question];

  const isRightOrNot = () => {
    if (rightAnswer && question < 4) {
      setQuestion(question + 1);
      setCurrentAnswer("");
    } else if (rightAnswer && question === 4) {
      navigation.navigate("GameOver");
    } else {
      navigation.navigate("ModalCustom");
      setCurrentAnswer("");
    }
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
      <Wrapped>
        <QuizHeader>
          <Title>Determine a Bandeira: {question + 1}/5</Title>
          <BtnTip
            onPress={() => Alert.alert("Dica!", `${questionState.tip}`)}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Ionicons name="information" size={26} color="white" />
          </BtnTip>
        </QuizHeader>
        <StyledImage source={questionState.imgFlag} />
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
            onPress={() => isRightOrNot()}
            disabled={currentAnswer ? false : true}
            bgColor={btnNext}
            txAlign="center"
            size={12}
          />
        </>
      </Wrapped>
    </Container>
  );
};

export default QuizTeamplate;
