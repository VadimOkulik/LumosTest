import {ModalOverlay, ModalContainer, ModalTitle, CloseButton, ModalName, StyleError, InfoStyled} from "./styled"
import {useState} from "react";
import {CloseIcon} from "../../../public/images/CloseIcon";
import {LockIconModal} from "../../../public/images/LockIconModal";

const Modal = ({ name, onClose }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log(email);
            onClose();
        } else {
            setError('Введите корректный email');
        }
    };


    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalTitle>Your name</ModalTitle>
                <ModalName>{name}</ModalName>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }}
                        required
                        placeholder="Enter your email"
                    />
                    <InfoStyled>
                        <LockIconModal />
                        <p>Your information is 100% secure. We don’t share your personal information.</p>
                    </InfoStyled>
                    {error && <StyleError>{error}</StyleError>}
                    <button type="submit">Continue</button>
                </form>
                <CloseButton onClick={onClose}><CloseIcon/></CloseButton>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
