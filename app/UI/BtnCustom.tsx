import { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";

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
  onPress?: any;
  disabled?: boolean;
  bgColor?: string;
  size?: number;
  width?: number | string;
  txAlign?: any;
};

const BtnCustom = ({
  text,
  onPress,
  disabled,
  bgColor,
  size,
  width,
  txAlign,
}: Props) => {
  const { colors } = useContext(ThemeContext);
  const btnOptionsColor = colors.secondary;
  return (
    <BtnLevel
      onPress={onPress}
      disabled={disabled || false}
      style={({ pressed }) => [
        {
          backgroundColor: bgColor || btnOptionsColor,
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
