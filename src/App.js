import React from "react"
import MainAccount from "./components/MainAccount"
import { Background } from "./styles"

const App = () => {
    return (
        <Background>
            <center>
                <h1>dictyBase Registration Form</h1>
            </center>
            <MainAccount />
        </Background>
    )
}

export default App
