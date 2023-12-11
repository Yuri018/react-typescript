import { useNavigate } from "react-router-dom";

import { GipsonWrapper, StyledButton, Paragraph } from "./styles";

function Gipson() {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/clients");
  };
  return (
    <GipsonWrapper>
      <h1>Gipson</h1>
      <Paragraph>
        Gibson Brands, the world’s most iconic guitar brand, has shaped the
        sounds of generations of musicians and music lovers across genres for
        more than 100 years. Founded in 1894 and headquartered in Nashville, TN,
        Gibson Brands has a legacy of world-class craftsmanship, legendary music
        partnerships, and progressive product evolution that is unrivaled among
        musical instrument companies. The Gibson Brands portfolio includes
        Gibson, the number one guitar brand, as well as many of the most beloved
        and recognizable music brands, including Epiphone, Kramer, Steinberger,
        MESA/Boogie, and the Gibson Pro Audio division, KRK Systems. Gibson
        Brands is dedicated to quality, innovation, and sound excellence so that
        music lovers for generations to come will continue to experience music
        shaped by Gibson Brands. Learn more at Gibson.com and follow us on
        Twitter, Facebook and Instagram.
      </Paragraph>
      <StyledButton onClick={goToBack}>Go back</StyledButton>
    </GipsonWrapper>
  );
}

export default Gipson;
