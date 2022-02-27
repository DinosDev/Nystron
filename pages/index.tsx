import React from "react"
import Header from "../src/components/Header"
import About from "../src/components/About"
import Address from "../src/components/Address"
import Solar from "../src/components/Solar"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"

export default function IndexPage() {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Address />
            <Solar />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}