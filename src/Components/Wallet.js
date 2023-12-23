import React from 'react'
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import { useState } from "react";

function Wallet() {
    return (
        <div className="App">
            <header className='App-header'>
                <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
            </header>
        </div>
    )
}

export default Wallet
