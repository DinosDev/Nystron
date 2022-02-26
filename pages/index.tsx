import React from "react"
import Header from "../src/components/Header"
import About from "../src/components/About"
import Address from "../src/components/Address"
import Solar from "../src/components/Solar"

export default function IndexPage() {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Address />
            <Solar />
        </React.Fragment>
    )
}