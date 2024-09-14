import styled from "styled-components";
import {theme} from "@/theme";

export const HeaderStyled = styled.div`
    width: 100%;
    position: fixed;
        top: 0;
        left: 0;
        padding: 0 10px;
    z-index: 3;
    display: flex;
    height: 76px;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.font.main};
    box-shadow: 0 4px 16px 0 #00000024;
      
`
export const LogoStyled = styled.div`
  a {
    width: 67px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
        text-decoration: none;


    p {

      ${theme.typography.fonts.poppins};
      font-size: ${theme.typography.fontSizes.main};
      font-weight: 600;
      line-height: 24px;
      text-align: center;
      color: ${theme.colors.font.black};
      text-decoration: none;

      @media (max-width: 399px) {
        scale: 0.8;
      }
    }

    #logo {
      width: 30.44px;
      height: 30.44px;
    }
  }
`
