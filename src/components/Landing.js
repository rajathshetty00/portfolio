import React from "react";
import { Grid, Cell } from "react-mdl";
const Landing = () => {
  return (
    <div style={{ width: "100%", margin: " auto" }}>
      <Grid className="landing-grid">
        <Cell col={5}>
          <img
            className="img"
            src="https://png.pngtree.com/svg/20170128/glyph_avatar_white_man_beard_manly_780040.png"
            alt=""
          />
        </Cell>
        <Cell col={7}>
          {" "}
          <div className="info__container">
            <p>I, Rajath welcome You. Feel free to browse around.</p>
          </div>
        </Cell>
      </Grid>
      <div class="container">
        <div class="banner">
          <blockquote>
            I'm a passionate self proclaimed front-end developer who loves
            playing around with javascript.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Landing;
