import React from "react";
import "./Contact.css";

const Contact = props => {
  return (
    <div className="contact--container">
      <div className="contact--container__child">
        <div className="contact--container__top">
          <div className="contact--container--top__left">
            <p>RS</p>
          </div>
          <div className="contact--container--top__right">
            <h4 style={{ borderBottom: "1px solid #999" }}>RAJATH SHETTY</h4>
            <ul className="side-chick">
              <li>
                <span>Phone-</span>

                <span>
                  <i> +91-8277740694</i>
                </span>
              </li>
              <li>
                <span>email-</span>

                <span>
                  <i> rajathshetty00@gmail.com</i>
                </span>
              </li>

              <li>
                <span>Website-</span>

                <span>
                  <a href="/">www.rajathshetty.netlify.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact--container__bottom">
          <ul className="side-chick__bottom">
            <li>
              {" "}
              <a href="https://github.com/rajathshetty00">
                {" "}
                <i class="fab fa-github fa-2x" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rajath-shetty-5045a715a/">
                {" "}
                <i class="fab fa-linkedin fa-2x" />
              </a>
            </li>
            <li>
              <a href="https://plus.google.com/116176688578856780909">
                <i class="fab fa-google-plus-g fa-2x" />
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/fcc09471b0a-2f79-4236-9b36-618409e421ec">
                {" "}
                <i class="fab fa-free-code-camp fa-2x" />
              </a>
            </li>
            <li>
              <a href="https://www.fb.com">
                {" "}
                <i class="fab fa-facebook fa-2x" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com">
                <i class="fab fa-instagram fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
