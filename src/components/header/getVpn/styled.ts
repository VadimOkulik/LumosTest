import styled from "styled-components";
import {theme} from "@/theme";

export const GetVpnStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 106px;
    height: 40px;
      background: ${theme.colors.background.buttonBlue};
    font-weight: 600;
    line-height: 18px;
    border-radius: 24px;
    margin-right: 30px;
    cursor: pointer;
  
    a {
      text-decoration: none;
      color: ${theme.colors.font.main};
      ${theme.typography.fonts.regular};
      font-size: ${theme.typography.fontSizes.medium};
    }

   
    }
`
