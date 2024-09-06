import styled from "styled-components";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function SignUp() {
  useEffect(() => {
    localStorage.getItem("user-info") ? navigate("/") : "";
  }, []);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    Firstname: "",
    Lastname: "",
    number: "",
    Email: "",
    Password: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    alert(inputs);

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputs),
    });
    if (result.ok) {
      const data = await result.json();
      console.log(data);
      // localStorage.setItem("user-info", JSON.stringify(data));
      navigate("/login");
      // alert("Registration successful!");
      setInputs("");
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <div className="container">
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="Firstname">Firstname</label>
                <input
                  type="text"
                  value={inputs.Firstname}
                  id="Firstname"
                  placeholder="Firstname"
                  onChange={handleChange}
                  name="Firstname"
                />
              </div>
              <div className="row">
                <label htmlFor="Lastname">Lastname</label>
                <input
                  type="text"
                  value={inputs.Lastname}
                  id="Lastname"
                  placeholder="Lastname"
                  onChange={handleChange}
                  name="Lastname"
                />
              </div>
              <div className="row">
                <label htmlFor="Telephone">Telephone</label>
                <input
                  type="number"
                  value={inputs.number}
                  id="Telephone"
                  placeholder="Telephone"
                  onChange={handleChange}
                  name="number"
                />
              </div>
              <div className="row">
                <label htmlFor="Email">Email</label>
                <input
                  type="Email"
                  value={inputs.Email}
                  id="Email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="Email"
                />
              </div>
              <div className="row">
                <label htmlFor="Password">Password</label>
                <input
                  type="Password"
                  value={inputs.Password}
                  id="Password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="Password"
                />
              </div>
              <div className="row">
                <button type="submit">Create account</button>
              </div>
            </form>
          </div>
          <div className="info">
            <h2>Welcome to</h2>
            <h2>Home</h2>
            <p>Already a user?</p>
            <button>
              <Link to="/login">Log In</Link>
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
const Section = styled.section`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;

  height: 99vh;
  .container {
    border: 2px solid #dddddd;
    box-shadow: 13px 18px 16px 10px rgba(221, 221, 221, 0.75);
    display: grid;
    /* border: 1px solid black; */
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    height: 80vh;
    width: 50vw;
    .content {
      /* border: 1px solid black; */
      /* width: 50%; */
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      form {
        display: grid;
        /* border: 1px solid black; */
        width: 100%;
        padding: 3rem;
        grid-template-columns: repeat(1, 1fr);
        /* gap: 2rem; */
        .row {
          display: grid;
          /* border: 1px solid black; */

          grid-template-columns: repeat(1, 1fr);
          input {
            border: none;

            border-radius: 20px;
            background-color: #eeeeee;
            padding: 0.7rem 1rem;
            width: 100%;
            margin: 0.5rem;
            &::placeholder {
              color: #a2b5bb;
            }
          }
          label {
            padding: 0rem 1rem;
            color: #3c4048;
          }
          button {
            background: linear-gradient(
              130deg,
              rgba(246, 191, 13, 1) 0%,
              rgba(249, 47, 47, 1) 150%
            );
            border-radius: 20px;
            padding: 10px;
          }
          /* gap: 1rem; */
        }
      }
    }
    .info {
      /* border: 1px solid black; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      gap: 0.2rem;
      background: linear-gradient(
        130deg,
        rgba(246, 191, 13, 1) 0%,
        rgba(249, 47, 47, 1) 150%
      );
    }
    button {
      border: none;
      color: white;
      margin-top: 5px;
      background: linear-gradient(
        130deg,
        rgba(246, 191, 13, 1) 0%,
        rgba(249, 47, 47, 1) 150%
      );
      border-radius: 20px;
      padding: 10px 15px;
    }
  }
`;
