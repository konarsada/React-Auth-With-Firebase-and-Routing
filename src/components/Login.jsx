import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import styled from "styled-components"
import { firebaseAuth } from "../firebase-config"

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = event => {
    const { name, value } = event.target
    setLoginData(prevLoginData => ({
      ...prevLoginData,
      [name]: value
    }))
  }

  /**
   * signInWithEmailAndPassword: Asynchronously signs in
   * using an email and password.
   */
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, loginData.email, loginData.password)
    }
    catch (error) {
      console.log(error);
    }
  }

  /**
   * For each of your app's pages that need information about
   * the signed-in user, attach an observer to the global
   * authentication object. This observer gets called whenever
   * the user's sign-in state changes.
   * 
   * Attach the observer using the onAuthStateChanged method.
   * When a user successfully signs in, you can get information
   * about the user in the observer.
   * 
   * Adds an observer for changes to the user's sign-in state.
   */
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/")
  })

  return (
    <Section>
      <div className="container">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={loginData.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={loginData.password}
        />

        <div className="button">
          <button onClick={handleLogin}>Login</button>
          <span>
            Don't have an account?
            <Link to="/signup">Signup</Link>
          </span>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
  .container {
    height: 50vh;
    width: 25vw;
    background-color: #2c384a;
    border-radius: 1rem;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    input {
      background-color: #5c5f63a3;
      border: none;
      font-size: 1.2rem;
      padding: 1rem;
      border-radius: 0.3rem;
      color: white;
      &:focus {
        outline: 1px solid;
        outline-color: #f57c00;
        -moz-outline-radius: 0.3rem;
      }
    }
    .button {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        color: #039be5;
        text-decoration: none;
      }
      button {
        background-color: #f57c00;
        border: none;
        color: white;
        padding: 0.5rem 2rem;
        border-radius: 0.3rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        text-transform: uppercase;
        &:hover {
          background-color: #ffa000;
        }
      }
    }
  }
`;

export default Login