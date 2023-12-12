import styled from "styled-components";

import { WeatherImage } from "assets";

export const WeatherWrapper = styled.div`
  background-image: url(${WeatherImage});
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  text-align: center;
  box-shadow: 3px 3px 3px #ccc;
  background-color: rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8px);
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const Search = styled.div`
display: flex;
width: 630px;
gap: 10px;
align-items: center;
`;

export const StyledButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
  width: 140px;
  height: 40px;
  background-color: #3678b4;
  border-radius: 20px;
  border: 1px solid #FFF;
  color: #FFF;
  cursor: pointer;
`;
