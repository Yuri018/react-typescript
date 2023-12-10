import { useNavigate } from "react-router-dom";

import { FenderWrapper, StyledButton, Paragraph } from "./styles";

function Fender() {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/clients");
  };

  return (
    <FenderWrapper>
      <h1>Fender</h1>
      <h2>
        Today, FMIC brands include Fender®, Squier®, Gretsch®, Jackson®,
        Charvel® and EVH® among others.
      </h2>
      <Paragraph>
        Fender Musical Instruments Corporation is the world’s foremost
        manufacturer of guitars, basses, amplifiers and related equipment. With
        an illustrious history dating back to 1946, Fender has touched and
        transformed music worldwide and in nearly every genre: rock ‘n’ roll,
        country and western, jazz, rhythm and blues, and many others. Everyone
        from beginners and hobbyists to the world’s most acclaimed artists and
        performers have used Fender instruments and amps, and legendary Fender
        instruments such as the Telecaster® and Stratocaster® guitars and
        Precision® and Jazz® bass guitars are universally acclaimed as design
        classics. In the 1940s, southern California inventor Leo Fender realized
        that he could improve on the amplified hollow-body instruments of the
        day by using an innovative and rather simple solid-body electric guitar
        design. Further, he realized that he could streamline the process of
        building them.
      </Paragraph>
      {/* <Button name="Go back" onClick={goToBack} /> */}
      <StyledButton onClick={goToBack}>Go back</StyledButton>
    </FenderWrapper>
  );
}

export default Fender;
