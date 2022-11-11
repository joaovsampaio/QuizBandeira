import styled from "styled-components/native";

const BtnLevel = styled.Pressable`
  width: 50%;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 35px;
`;

const BtnText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;

type Props = {
  text: string;
  bgColor: string;
  onPress?: any;
};

const BtnHome = ({ text, bgColor, onPress }: Props) => {
  return (
    <BtnLevel
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: bgColor,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <BtnText>{text}</BtnText>
    </BtnLevel>
  );
};

export { BtnHome };
