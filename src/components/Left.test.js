import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Left from "./Left";

import { onHomeClick } from "./Home.test";
import { onAboutClick } from "./About.test";
import { onLoginRegisterClick } from "./LoginRegister.test";

test("renders left component", () => {
  render(
    <Router>
      <Left
        onHomeClick={jest.fn()}
        onAboutClick={jest.fn()}
        onLoginRegisterClick={jest.fn()}
      />
    </Router>
  );
  const leftElement = screen.getByText(/Left/i);
  expect(leftElement).toBeInTheDocument();
});

test("renders links with correct click handlers", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <Left
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
        <Left
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
        <Left
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
        <Left
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
        <Left
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
        <Left
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
        <Left
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
