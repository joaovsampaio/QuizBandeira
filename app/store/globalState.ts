import create from "zustand";
import { dark } from "../themes/Theme.styled";

type QuestionState = {
  question: number;
  setQuestion: (question: number) => void;
};

export const useQuestion = create<QuestionState>((set) => ({
  question: 0,
  setQuestion: (question: number) =>
    set((state) => ({
      question: (state.question = question),
    })),
}));

type CurrentAnswerState = {
  currentAnswer: string;
  setCurrentAnswer: (answer: string) => void;
};

export const useCurrentAnswer = create<CurrentAnswerState>((set) => ({
  currentAnswer: "",
  setCurrentAnswer: (answer: string) =>
    set((state) => ({
      currentAnswer: (state.currentAnswer = answer),
    })),
}));

type BtnNextState = {
  currentBtnNext: string;
  setBtnNext: (color: string) => void;
};

export const useBtnNext = create<BtnNextState>((set) => ({
  currentBtnNext: dark.colors.black,
  setBtnNext: (color) =>
    set((state) => ({
      currentBtnNext: (state.currentBtnNext = color),
    })),
}));
