import styled from "styled-components"
import Logo from "./Logo"
import Nav from "./Nav"

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid black;
    background-color: #e67817   ;

    * {
        color: #00548b;
        width: max-content;
        font-size: 20px;
    }

    @media (max-width: 830px) {
        flex-flow: column wrap; 
        justify-content: space-around;
    }
`

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Nav />
        </HeaderContainer>
    )
}