import styled from "styled-components";
import {theme} from "@/theme";

export const SecondSectionStyled = styled.section`
  width: 100%;
  max-width: 892px;
  height: 440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
export const TopBlock = styled.div`
  display: flex;
  width: 892px;
  height: 216px;
  gap: 20px;
  

`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 424px;
  height: 216px;
  padding: 16px 0;
  gap: 8px;
  border: 1px;
  
`;
export const TitleStyled = styled.div`
  ${theme.typography.fonts.poppins};
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  color: #FF5D17;
  text-transform: uppercase;


`;
export const SubTitleStyled = styled.div`
  ${theme.typography.fonts.poppins};
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  color: #3177F2;
  text-transform: uppercase;



`;
export const TextStyled = styled.div`
  ${theme.typography.fonts.poppins};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #646464;


`;
