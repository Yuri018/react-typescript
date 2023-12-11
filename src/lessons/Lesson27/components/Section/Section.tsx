import { Content } from "lessons/Lesson27/components";

import { SectionWrapper } from "./styles";

// interface SectionProps {
//   userData: {
//     userName: string;
//     age: number;
//     email: string;
//   }
// };

function Section() {
  return (
    <SectionWrapper>
      <h2>Section component</h2>
      <Content />
    </SectionWrapper>
  );
}

export default Section;
