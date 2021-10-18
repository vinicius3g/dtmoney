import logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

type HeaderProps = {
  openOnNewTransactionModal: () => void;
};

export function Header({ openOnNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dtmoney" />
        <button
          type="button"
          onClick={openOnNewTransactionModal}
          title="CreateNewTransaction"
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
