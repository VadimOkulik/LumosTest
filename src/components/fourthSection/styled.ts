import styled from "styled-components";
import {theme} from "@/theme";

export const FourthSectionStyled = styled.div`
  width: 100%;
  margin: 100px auto;
  max-width: 892px;
  padding: 20px;
  text-align: center;

  h2 {
    text-transform: uppercase;
    ${theme.typography.fonts.poppins};
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
    text-align: left;


    span {
      color: #3177F2;

    }
  }


`;


export const NameInput = styled.label`  
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 10px 0;  
  cursor: pointer;  
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  width: 892px;
  height: 88px;
  gap: 10px;
  border-radius: 16px;
  box-shadow: 0 2.09px 11.06px 0 #00000040;

`;

export const Button = styled.button`  
  background-color: #FF5D17;
  color: white;  
  padding: 10px 20px;  
  border: none;  
  cursor: pointer;  
  font-size: 16px;  
  margin-top: 20px;
  width: 892px;
  height: 64px;
  border-radius: 16px;

`;
