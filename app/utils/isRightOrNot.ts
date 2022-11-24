import { Dispatch, SetStateAction } from "react";

type Props = {
  rightAnswer: boolean;
  question: number;
  setQuestion: Dispatch<SetStateAction<number>>;
  setCurrentAnswer: Dispatch<SetStateAction<string>>;
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
