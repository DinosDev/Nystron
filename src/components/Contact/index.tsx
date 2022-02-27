import styled from "styled-components"
import Title from "./Title"

const ContactContainer = styled.div`
    text-align: center;
    display: block;
    font-size: 20px;
    margin-top: 30px;

    * {
        display: block;

        @media (max-width: 768px) {
            margin-bottom: 10px;
        }
    }
`

export default function Contact() {
    return (
        <ContactContainer id="Contato">
            <Title>Contato</Title>
        </ContactContainer >
    )
}