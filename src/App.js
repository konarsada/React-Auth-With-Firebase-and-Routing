import React from "react"
import { Routes, Route } from "react-router-dom"

import Login from "./components/Login"
import Signup from "./components/Signup"
import User from "./components/User"

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<User />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default App