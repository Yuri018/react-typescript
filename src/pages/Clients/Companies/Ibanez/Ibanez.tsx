import { useNavigate } from "react-router-dom";

import { IbanezWrapper, StyledButton, Paragraph } from "./styles";

function Ibanez() {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/clients");
  };
  return (
    <IbanezWrapper>
      <h1>Ibanez</h1>
      <Paragraph>
        Ibanez is a Japanese guitar brand owned by Hoshino Gakki. Based in
        Nagoya, Aichi, Japan, Hoshino Gakki was one of the first Japanese
        musical instrument companies to capture a significant share of imported
        guitar sales in the United States and Europe, and the first guitar brand
        to enter mass production. seven-string guitar and eight-string guitar.
        Ibanez manufactures effects, accessories, amplifiers, and instruments in
        Japan, China, Indonesia, and the United States. As of 2017, they sold
        about 165 models of bass guitars, 130 acoustic guitars, and over 300
        electric guitars. After Gibson and Fender, Ibanez is considered the
        third largest guitar brand.
      </Paragraph>
      <StyledButton onClick={goToBack}>Go back</StyledButton>
    </IbanezWrapper>
  );
}

export default Ibanez;
