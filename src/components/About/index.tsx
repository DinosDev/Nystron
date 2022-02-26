import styled from "styled-components"
import Image from "./Image"

const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 768px) {
        flex-direction: row;
    }

`

export default function About() {
    return (
        <AboutContainer>
            <Image />
        </AboutContainer>
    )
}