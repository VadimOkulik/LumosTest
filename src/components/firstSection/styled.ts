import styled from "styled-components";
import {theme} from "@/theme";

export const FirstSectionStyled = styled.section`
  width: 100%;
  height: 639px;
  max-width: 892px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  

  h2 {
    width: 230px;
    color: ${theme.colors.font.black};
    text-align: center;
    padding: 0 100px;
      span {
        color: ${theme.colors.font.blue};
      }
    
  }
  p{
    
    span {
      color: ${theme.colors.font.blue};
    }
  }
  
`;

export const ButtonStyled = styled.div`
  width: 396px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background.buttonOrange};
  cursor: pointer;
  ${theme.typography.fonts.poppins};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: white;

`

export const VpnHeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  margin:50px 0 0 20px;
  box-shadow: 0 2.09px 11.06px 0 #00000040;
  width: 892px;
  height: 80px;
  padding: 15px 238.5px 15px 238.5px;
  border-radius: 16px;
  align-items: center;

`

export const VpnLocationStyled = styled.div`
  font-size: 1.2em;
  color: #333;

`

export const VpnIconStyled = styled.span`
    

`

