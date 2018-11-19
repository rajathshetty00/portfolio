import React from "react";
import "../App.css";
const Resume = props => {
  return (
    <div className="resume__container">
      <div className="resume__header">
        <h3>About</h3>
      </div>
      <div className="resume__body">
        <h5>Introduction</h5>
        <div className="resume-body__subtitle">
          <p>
            Hi there again. I'd like to tell little bit more about my background
            and whereabouts.
          </p>
          {/* <br /> */}
          <p>
            I was born in a small town called Kundapur, located about 500km from
            Bengaluru, the capital of Karnataka, India. I spent my first 18
            years in kundapur without a brother and a sister but lot of friends.
            My everyday activities when I was a child included playing cricket,
            playing cricket and playing cricket. Sounds cliched but I loved
            cricket to the core.
          </p>
          <br />
          <p>
            After spending first 18 years, I moved to Bengaluru to earn
            Engineers' degree in mechanical stream. I joined local cricket club
            during my first year and spent most of the time reading, writing and
            playing cricket.
          </p>
        </div>
        <h5>Interests</h5>
        <div className="resume-body__subtitle">
          <p>
            During my final days in college, I stated developing interest
            towards music. I tried my hands on making music using audio
            workstation and it came out well. I also practice guitar playing
            during my free time.
          </p>{" "}
          <br />
          <p>
            I always wondered how fascinating browsers are, how client side
            programming was done. But never got a chance to associate myself
            with ever changing technology. But during my working days I started
            developing more and more interest towards web development. started
            to self learn about front-end development from various sources and I
            can say I'm confident enough to change my career to client-side
            software deveolopment. You can find a copy of resume to know more
            about me.
          </p>
        </div>
      </div>
      <div className="resume__footer">
        <a href="https://drive.google.com/file/d/1X3sDRc3DdhunIXnzTyNH-Egt67jJUTkX/view?usp=sharing">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
