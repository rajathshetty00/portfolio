import React, { Component } from "react";
import "../../App.css";
import { Tabs, Tab } from "react-mdl";
class Demo extends Component {
  state = {
    activeTab: 0,
    arr1: [
      {
        image:
          "url('https://png2.kisspng.com/20180305/hgq/kisspng-classical-guitar-graphic-design-vector-material-bus-5a9d5a682edf78.081611361520261736192.png')",

        title: "The Guitar company ",
        details:
          " A single page webpage created using plain HTML/CSS and added responsiveness and mobile friendly interface"
      },
      {
        image: "url('http://boulajp.github.io/images/pic05.jpg')",
        title: "Purrfect",
        details: " Responsive landing page bootstrapped along with HTML/CSS"
      },
      {
        image:
          "url('https://d33wubrfki0l68.cloudfront.net/0c808da81ab6346a282b8fc83c3730545f168401/d6ae2/images/angular/flex-layout/flex-layout-demo.png')",
        title: "PURE FLEX LAYOUT",
        details: " LAYOUT CREATED JUST BY USING NEWLY ADDED FLEXBOX feature."
      },

      {
        image:
          "url('https://www.lifewire.com/thmb/c4DjZdAl_4UqZxUVjwPYFchZucs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Antu_google-hangouts.svg-5ad3a0d6ba61770036cda562.png')",
        title: "HANGOUTS REPLICA",
        details: "replicating chat layouts of Hangouts messenger."
      },

      {
        image:
          "url('http://rachelandrew.co.uk/perch/resources/masonry-w1200.png')",
        title: "XPLORE",
        details: "Creatin entire web-page using css grid."
      },

      {
        image:
          "url('https://www.robinwieruch.de/img/posts/complete-firebase-authentication-react-tutorial/sign_1024.jpg')",
        title: "SIGNUP CARD",
        details: "Landing page sign-up card using HTML/CSS."
      }
    ],

    arr2: [
      {
        image:
          "url('https://cdn-images-1.medium.com/max/2000/1*bh7n3QMkOcggzzDCt088UQ.png')",

        title: " Guess the color ",
        details:
          "Choose appropriate color from group of six colors based on the color code in the screen. "
      },

      {
        image: "url('https://i.stack.imgur.com/S7fvM.png')",

        title: " Gener8or ",
        details:
          "Created using create-react-app without redux. Gener8or uses Restful API to render JSON data to the screen as objects' key value pairs."
      },

      {
        image:
          "url('https://cdn.freebiesbug.com/wp-content/uploads/2012/12/weather-widget-free-psd.jpg')",

        title: " Feather-weather ",
        details:
          "Created using create-react-app. Feather-weather uses Restful API from openweathermap to give real-time weather forcasting."
      }
    ]
  };

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>JAVASCRIPT</Tab>
        </Tabs>
        <section>
          <div className="content" />
        </section>

        <section>
          <div className="content">
            {!this.state.activeTab
              ? this.state.arr1.map(item => {
                  return (
                    <div className="child__content">
                      <div
                        className="child__left"
                        style={{ backgroundImage: item.image }}
                      >
                        <div className="child-content__bottom">
                          <div className="child-content-bottom__button">
                            <li>
                              <a href="/error">Show code</a>
                            </li>
                            <li>
                              <a href="/error"> Live preview</a>
                            </li>
                            <li>
                              <a href="/error"> Extras</a>
                            </li>
                          </div>
                        </div>
                      </div>
                      <div className="child__right">
                        <div className="child-right__top">{item.title}</div>
                        <div className="child-right__middle">
                          <h3>Info</h3>
                          <p>{item.details}</p>
                        </div>
                      </div>{" "}
                    </div>
                  );
                })
              : this.state.arr2.map(item => {
                  return (
                    <div className="child__content">
                      <div
                        className="child__left"
                        style={{
                          backgroundImage: item.image,
                          backgroundSize: "cover"
                        }}
                      >
                        <div className="child-content__bottom">
                          <div className="child-content-bottom__button">
                            <li>
                              <a href="/error">Show code</a>
                            </li>
                            <li>
                              <a href="/error"> Live preview</a>
                            </li>
                            <li>
                              <a href="/error"> Extras</a>
                            </li>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="child__right">
                        <div className="child-right__top">{item.title}</div>
                        <div className="child-right__middle">
                          <h3>Info</h3>
                          <p>lorem ipsum</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </section>
      </div>
    );
  }
}

export default Demo;
