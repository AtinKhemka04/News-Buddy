import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Newscomponents from "./Components/Newscomponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="general"
                  newsSize={9}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="business"
                  newsSize={9}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="entertainment"
                  newsSize={9}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="general"
                  newsSize={9}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="health"
                  newsSize={9}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="science"
                  newsSize={9}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="sports"
                  newsSize={9}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <Newscomponents
                  setProgress={this.setProgress}
                  key="technology"
                  newsSize={9}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
