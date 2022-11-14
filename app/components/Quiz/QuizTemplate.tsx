import { Alert, Image, ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

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

type Props = {
  flagImg: ImageSourcePropType | undefined;
  btnTip: any;
  btnContainer: any;
  currQuestion: any;
};

const QuizTeamplate = ({
  flagImg,
  btnContainer,
  btnTip,
  currQuestion,
}: Props) => {
  return (
    <Container>
      <Wrapped>
        <QuizHeader>
          <Title>Determine a Bandeira: {currQuestion}/5</Title>
          <BtnTip onPress={() => Alert.alert("Dica!", `${btnTip}`)}>
            <Ionicons name="information" size={26} color="white" />
          </BtnTip>
        </QuizHeader>
        <StyledImage source={flagImg} />
        <>{btnContainer}</>
      </Wrapped>
    </Container>
  );
};

export default QuizTeamplate;