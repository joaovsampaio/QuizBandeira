import styled from "styled-components/native";

const BtnLevel = styled.Pressable`
  border-radius: 3px;
  margin-bottom: 28px;
`;

const BtnText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

type Props = {
  text: string;
  bgColor?: string;
  size?: number;
  width?: number;
  txAlign?: any;
  onPress?: any;
};

const BtnCustom = ({ text, bgColor, size, width, txAlign, onPress }: Props) => {
  return (
    <BtnLevel
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: bgColor,
          padding: size,
          opacity: pressed ? 0.7 : 1,
          width: width || "50%",
        },
      ]}
    >
      <BtnText style={{ textAlign: txAlign }}>{text}</BtnText>
    </BtnLevel>
  );
};

export default BtnCustom;
