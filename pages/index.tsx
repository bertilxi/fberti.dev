import React from "react";
import TextLoop from "react-text-loop";

const Home: React.FC = () => (
  <div className="home flex flex-col md:justify-center m-4">
    <div>
      <div className="md:text-5xl text-2xl font-bold">
        Hello, I am Fernando.
      </div>
      <div className="md:text-5xl text-2xl">Welcome to my website!</div>
    </div>

    <div className="w-full md:text-5xl text-2xl mt-8">
      I am a{" "}
      <TextLoop interval={2000}>
        <span className="font-semibold">Software developer</span>
        <span className="font-semibold">UI Engineer</span>
        <span className="font-semibold">Webpack Tuner</span>
        <span className="font-semibold">PWA Passionate</span>
        <span className="font-semibold">Typescript Fan</span>
        <span className="font-semibold">Postgres Enthusiast</span>
      </TextLoop>{" "}
    </div>
  </div>
);

export default Home;
