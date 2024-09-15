import styled from 'styled-components';
import {theme} from "@/theme";

export const ModalOverlay = styled.div`  
  position: fixed;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  background: rgba(0, 0, 0, 0.5);  
  display: flex;  
  justify-content: center;  
  align-items: center;  
`;

export const ModalContainer = styled.div`  
  background: ${theme.colors.font.main};
  padding: 20px;  
  border-radius: 8px;  
  text-align: center;  
  position: relative;
  display: flex;
  flex-direction: column;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  
  input {
    width: 380px;
    height: 54px;
    border-radius: 16px;
    border: 1px solid #646464;
    padding-left: 10px;
    ${theme.typography.fonts.poppins};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    
  }
  input::placeholder {
    ${theme.typography.fonts.poppins};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;

  }
  button {
    width: 396px;
    height: 64px;
    border-radius: 16px;
    background: ${theme.colors.background.buttonOrange};
    color: ${theme.colors.font.main};
    ${theme.typography.fonts.poppins};
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    
    &:hover {
      background: ${theme.colors.background.buttonOrangeShine};
    }


  }
  
`;

export const ModalTitle = styled.h2`  
  margin-bottom: 20px;
  ${theme.typography.fonts.poppins};
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  text-align: left;

`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  svg {
    color: #838283;
    width: 24px;
    height: 24px;
  }


`;

export const ModalName = styled.p`
  ${theme.typography.fonts.poppins};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

`;
export const StyleError = styled.p`
  color: red;
`;

export const InfoStyled = styled.div`
display: flex;
  align-items: center;
  gap: 5px;
  p {
    width: 370px;
    ${theme.typography.fonts.poppins};
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    color: #646464;
  }
`;
