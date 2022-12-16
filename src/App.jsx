import React from "react";
import Background from "./containers/Background";
import Navbar from "./containers/Navbar"
import Hero from "./containers/Hero"
import Marquee from "./containers/Marqueetext";
import About from "./containers/About";
import WhatCan from "./containers/WhatCan";
import Projects from "./containers/Projects";
import WhatThey from "./containers/WhatThey";
import Discuss from "./containers/Discuss";

function App() {
  return (
    <div>
      <Background />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <WhatCan />
      <Projects />
      <WhatThey />
      <Discuss />
    </div>
  );
}

export default App;
