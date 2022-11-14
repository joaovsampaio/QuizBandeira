import styled from "styled-components/native";

const BtnLevel = styled.Pressable`
  width: 50%;
  border-radius: 3px;
  margin-bottom: 28px;
`;

const BtnText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

type Props = {
  text: string;
  bgColor?: string;
  size?: number;
  onPress?: any;
};

const BtnCustom = ({ text, bgColor, size, onPress }: Props) => {
  return (
    <BtnLevel
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: bgColor,
          padding: size,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <BtnText>{text}</BtnText>
    </BtnLevel>
  );
};

export default BtnCustom;
