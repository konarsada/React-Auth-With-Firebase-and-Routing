import React, { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { firebaseAuth } from "../firebase-config"

function User() {
  const [user, setUser] = useState()
  const navigate = useNavigate()

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
    if (currentUser) setUser(currentUser)
    else navigate("/login")
  })

  /**
   * signOut: Signs out the current user.
   */
  return (
    <Section>
      <div className="container">
        <h1>Welcome {user && user.email}</h1>
        <button onClick={() => signOut(firebaseAuth)}>Sign out</button>
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
  .container {
    height: 50vh;
    width: 40vw;
    background-color: #2c384a;
    border-radius: 1rem;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 2rem;
      vertical-align: middle;
    }
    button {
      background-color: #f57c00;
      border: none;
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.3rem;
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #ffa000;
      }
    }
  }
`;

export default User