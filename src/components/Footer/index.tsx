import styled from "styled-components";
import About from "./About";
import Contact from "./Contact"
import Hours from "./Hours";
import SocialMedia from "./SocialMedia";
import Credits from "./Credits";

const FooterContainer = styled.footer`
    background-color: black;
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;
    margin-top: 30px;

    @media (max-width: 768px) {
        flex-flow: column wrap; 
    }

    div {
        margin: 10px 0;
        width: auto;
    }

    * {
        color: white;
        text-align: center;
    }
`

export default function Footer() {
    return (
        <FooterContainer>
            <About />
            <Contact />
            <Hours />
            <SocialMedia />
            <Credits />
        </FooterContainer>
    )
}