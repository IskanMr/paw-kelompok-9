import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarContainer>
      <h3>Employee </h3>
      <div className="navigation-container">
        <Link to="/">
          <div className="link-rank">
            <h3>Ranker</h3>
          </div>
        </Link>
        <Link to="/create">
          <div className="create-button">
            <h3>Add Employee</h3>
          </div>
        </Link>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10%;
  box-shadow: 3px 0px 25px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  z-index: 5;
  background-color: white;
  .navigation-container {
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items: center;
  }
  .create-button {
    background-color: var(--dark-green);
    height: 2.5rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    color: white;
    &:hover {
      background-color: var(--black);
    }
  }
`;