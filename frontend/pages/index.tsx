import React from "react"
import Header from "../src/components/Infra/Header"
import About from "../src/components/IndexPage/About"
import Address from "../src/components/IndexPage/Address"
import Solar from "../src/components/IndexPage/Solar"
import Contact from "../src/components/IndexPage/Contact"
import Footer from "../src/components/Infra/Footer"


export async function getStaticProps() {
    var today = new Date();
    var foundationAge = new Date("1978 12 29");
    var age = today.getFullYear() - foundationAge.getFullYear();
    var m = today.getMonth() - foundationAge.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < foundationAge.getDate())) {
        age--;
    }

    return {
        props: { age },
    }
}

export default function IndexPage(props: any) {
    return (
        <React.Fragment>
            <Header />
            <About {...props}/>
            <Address />
            <Solar />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}