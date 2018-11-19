import React, { Component } from "react";
class Skills extends Component {
  state = {
    arr: [
      {
        image:
          'url("https://dhirajkumarsingh.files.wordpress.com/2012/05/css3-html5-logo.png")',
        title: "HTML5"
      },
      {
        image:
          'url("https://dwestdesigns.com/wp-content/uploads/2017/08/css3.jpg")',
        title: "CSS3"
      },
      {
        image:
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Badge_js-strict.svg/2000px-Badge_js-strict.svg.png")',
        title: "JavaScript"
      },

      {
        image: 'url("https://www.moonhighway.com/img/logo/react.svg")',
        title: "React"
      },
      {
        image:
          'url("https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png")',
        title: "Git"
      },
      {
        image:
          'url("https://ih0.redbubble.net/image.174928237.6370/ap,550x550,12x12,1,transparent,t.png")',
        title: "Bootstrap"
      }
    ]
  };

  render() {
    return (
      <div>
        <div className="dabba">
          <hr />
          {this.state.arr.map(item => {
            return (
              <div className="dabba__small">
                <div
                  className="top"
                  style={{
                    backgroundImage: item.image
                  }}
                >
                  {}
                </div>

                <div className="bottom">
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
