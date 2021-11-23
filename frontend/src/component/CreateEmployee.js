import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

export default function CreateEmployee() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [points, setPoints] = useState("");
  const [active, setActive] = useState(false);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/employees")
      .then()
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const employee = {
      name: name,
      position: position,
      points: points,
      active: active,
    };
    console.log(employee);
    axios
      .post("http://localhost:3000/api/employees", employee)
      .then(setRedirect(true))
      .catch((error) => {
        console.log("uua");
      });
  };

  return (
    <AddEmployee>
      {redirect && <Redirect to="/"></Redirect>}
      <div className="add-content">
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="messafeSender_input"
            placeholder={`Nama `}
          ></input>

          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="messafeSender_input"
            placeholder={`Posisi`}
          ></input>

          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            className="messafeSender_input"
            placeholder={`Point`}
          ></input>

          <div className="active-container">
            <h6>active ?</h6>
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="messafeSender_input"
            ></input>
          </div>
          <button onClick={onSubmit} type="submit">
            submit
          </button>
        </form>
      </div>
    </AddEmployee>
  );
}

const AddEmployee = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;

  .add-content {
    background-color: white;
    width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 2rem;
    box-shadow: 3px 0px 25px 10px rgba(0, 0, 0, 0.025);
    overflow: hidden;
    padding: 2rem 2rem;

    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    form > input {
      width: 100%;
      margin-bottom: 1rem;
      padding: 1rem;
      border-bottom: solid var(--light-gray) 1px;
    }
    .active-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.5rem;

      h6 {
        font-weight: 500;
        font-size: 1rem;
        padding: 0 1rem;
      }
    }

    .active-container > input {
      height: 1rem;
      width: 1rem;
    }

    button {
      width: 95%;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--dark-green);
      color: white;
      border-radius: 2rem;
      cursor: pointer;
      &:hover {
        background-color: var(--gray);
      }
    }
  }
`;
