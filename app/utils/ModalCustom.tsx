import { useContext } from "react";
import Modal from "react-native-modal";
import styled, { ThemeContext } from "styled-components/native";
import BtnCustom from "../UI/BtnCustom";

const Container = styled.View`
  flex: 1;
`;

const ContainerModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  max-height: 15%;
  background-color: ${({ theme }) => theme.colors.reversebw};
`;

const TitleModal = styled.Text`
  font-size: 20px;
  font-family: "RobotoBold";
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.title};
`;

const TextModal = styled.Text`
  font-size: 18px;
  font-family: "RobotoLight";
  color: ${({ theme }) => theme.colors.bgColor};
  margin-bottom: 5px;
`;

const ModalCustom = ({ navigation }: any) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <Modal
        isVisible={true}
        animationIn="bounceInUp"
        onBackButtonPress={() => navigation.navigate("Home")}
        backdropColor={colors.bgColor}
        backdropOpacity={1}
      >
        <ContainerModal>
          <TitleModal>Bandeira Errada</TitleModal>
          <TextModal>Tente usar uma dica!</TextModal>
          <BtnCustom
            text="Voltar ao Menu"
            onPress={() => navigation.navigate("Home")}
            txAlign="center"
            bgColor={colors.misc}
            size={10}
          />
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default ModalCustom;
