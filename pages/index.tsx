import React from "react"
import Header from "../src/components/Infra/Header"
import About from "../src/components/IndexPage/About"
import Address from "../src/components/IndexPage/Address"
import Solar from "../src/components/IndexPage/Solar"
import Contact from "../src/components/IndexPage/Contact"
import Footer from "../src/components/Infra/Footer"

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