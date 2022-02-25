import styled from "styled-components"

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid black;
    background-color: #d1812f;

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
        <HeaderContainer> </HeaderContainer>
    )
}