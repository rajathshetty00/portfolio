import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { Link } from "react-router-dom";

import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content ">
          <Layout>
            <Header id="header" title="Rajath Shetty" fixed>
              <Navigation>
                <Link to="/">
                  <i class="fas fa-home" />
                </Link>
                <Link to="/skills">
                  <span>
                    <i class="fas fa-wrench" />
                  </span>
                </Link>
                <Link to="/projects">
                  <span>
                    <i class="fas fa-project-diagram " />
                  </span>
                </Link>
                <Link to="/resume">
                  <span>
                    <i class="fas fa-user-circle" />
                  </span>
                </Link>
                <Link to="/contact">
                  <span>
                    <i class="fas fa-address-card" />
                  </span>
                </Link>
              </Navigation>
            </Header>

            <Drawer title="Rajath Shetty">
              <Navigation>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">About Me</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content  App" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
