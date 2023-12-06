import styled from "styled-components";

import { colors } from "styles/colors";

export const Lesson24Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px;
  width: 100%;
  height: 100%;
  gap: 100px;
  background-color: ${colors.primary};
`;

export const Text = styled.p`
  font-size: 20px;
  color: white;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: fit-content;
  height: 200px;
  padding: 10px;
  background-color: white;
`;
