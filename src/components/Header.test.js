// FILEPATH: /Users/sbecker11/workspace-react/react-app/src/components/Header.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import React from "react";

import { onHomeClick } from "./Home.test";
import { onAboutClick } from "./About.test";
import { onLoginRegisterClick } from "./LoginRegister.test";

describe("Header", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <Header
          onHomeClick={() => {}}
          onAboutClick={() => {}}
          onLoginRegisterClick={() => {}}
        />
      </Router>
    );
  });

  it("displays home link", () => {
    render(
      <Router>
        <Header
          onHomeClick={() => {}}
          onAboutClick={() => {}}
          onLoginRegisterClick={() => {}}
        />
      </Router>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("displays about link", () => {
    render(
      <Router>
        <Header
          onHomeClick={() => {}}
          onAboutClick={() => {}}
          onLoginRegisterClick={() => {}}
        />
      </Router>
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("displays login/register link", () => {
    render(
      <Router>
        <Header
          onHomeClick={() => {}}
          onAboutClick={() => {}}
          onLoginRegisterClick={() => {}}
        />
      </Router>
    );
    expect(screen.getByText("Login/Register")).toBeInTheDocument();
  });

  it("calls onHomeClick when home link is clicked", () => {
    render(
      <Router>
        <Header
          onHomeClick={onHomeClick}
          onAboutClick={() => {}}
          onLoginRegisterClick={() => {}}
        />
      </Router>
    );

    // Get the Home link and click it
    const homeLink = screen.getByText(/home/i);
    fireEvent.click(homeLink);
    expect(onHomeClick).toHaveBeenCalled();
  });

  it("calls onAboutClick when about link is clicked", () => {
    render(
      <Router>
        <Header
          onHomeClick={() => {}}
          onAboutClick={onAboutClick}
          onLoginRegisterClick={() => {}}
        />
      </Router>
    );

    // Get the About link and click it
    const aboutLink = screen.getByText(/about/i);
    fireEvent.click(aboutLink);
    expect(onAboutClick).toHaveBeenCalled();
  });

  it("calls onLoginRegisterClick when login/register link is clicked", () => {
    render(
      <Router>
        <Header
          onHomeClick={() => {}}
          onAboutClick={() => {}}
          onLoginRegisterClick={onLoginRegisterClick}
        />
      </Router>
    );
    // Get the LoginRegister link and click it
    const loginRegisterLink = screen.getByText(/login-register/i);
    fireEvent.click(loginRegisterLink);
    expect(onLoginRegisterClick).toHaveBeenCalled();
  });
});
