import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout";
import Home from "pages/Home";
import About from "pages/About";
import Users from "pages/Users";
import Clients from "pages/Clients";
import Fender from "pages/Clients/Companies/Fender";
import Gipson from "pages/Clients/Companies/Gipson";
import Ibanez from "pages/Clients/Companies/Ibanez";
// Lessons
// import Lesson20 from "./lessons/Lesson20";
// import Lesson21 from "./lessons/Lesson21";
// import Lesson22 from "./lessons/Lesson22";
// import Lesson24 from 'lessons/Lesson24';
// import Lesson25 from "lessons/Lesson25";
import Lesson27 from "lessons/Lesson27";
import Homework27 from "homeworks/Homework27";

//Consultations
// import Counsultation20 from "./consultations/Consultation20";

//Homeworks
// import Homework20 from "./homeworks/Homework20";
// import Homework21 from "./homeworks/Homework21";
// import Homework22 from "homeworks/Homework22";
// import Homework23 from "homeworks/Homework23";
// import Homework24 from "homeworks/homework24";
// import Homework24Alternative from "homeworks/homework24Alternative";
// import Homework25 from "homeworks/Homework25";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Homework27 />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element="Page Not Found" />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/fender" element={<Fender />} />
          <Route path="/clients/gipson" element={<Gipson />} />
          <Route path="/clients/ibanez" element={<Ibanez />} />
        </Routes>
        {/* Lessons */}
        {/* <Lesson20 /> */}
        {/* <Lesson21 /> */}
        {/* <Lesson22 /> */}
        {/* <Lesson24 /> */}
        {/* <Lesson25 /> */}
        {/* Consultations */}
        {/* <Counsultation20 /> */}
        {/* Homeworks */}
        {/* <Homework20 /> */}
        {/* <Homework21 /> */}
        {/* <Homework22 /> */}
        {/* <Homework23 /> */}
        {/* <Homework24 /> */}
        {/* <Homework24Alternative /> */}
        {/* <Homework25 /> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
