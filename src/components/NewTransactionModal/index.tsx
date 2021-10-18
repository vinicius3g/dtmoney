import { Container } from "./styles";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Container>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastrar transação</h2>
      </Modal>
    </Container>
  );
}
