type Props = {
  rightAnswer: boolean;
  question: number;
  setQuestion: (question: number) => void;
  setCurrentAnswer: (answer: string) => void;
  navigation: any;
};

export const isRightOrNot = ({
  rightAnswer,
  question,
  setQuestion,
  setCurrentAnswer,
  navigation,
}: Props) => {
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
