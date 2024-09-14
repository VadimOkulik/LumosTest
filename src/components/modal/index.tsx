import {ModalOverlay, ModalContainer, ModalTitle, CloseButton} from "./styled"

const Modal = ({ name, onClose }) => {
    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalTitle>Your name: {name}</ModalTitle>
                <CloseButton onClick={onClose}>Close</CloseButton>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
