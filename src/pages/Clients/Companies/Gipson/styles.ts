import styled from "styled-components";
import { colors } from "styles/colors";

export const GipsonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const StyledButton = styled.button`
width: 80px;
height: 30px;
  background-color: #7ea5e6;
  color: ${colors.white};
  border-radius: 10px;
  &:hover {
    background-color: #0c2247;
  }
`;

export const Paragraph = styled.p`
font-size: 20px;
padding: 20px;
`;