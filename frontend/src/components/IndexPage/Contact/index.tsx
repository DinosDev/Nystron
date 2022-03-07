import { Number, WhatsApp, Mail } from "./Contact.json"
import styled from "styled-components"
import Title from "../../Infra/Title"

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

            <p>Você pode Entrar em Contato Com A Nossa Equipe Por Telefone ou Email.</p>
            <a href={Number.Href}>Telefone: {Number.Text}</a>
            <a href={WhatsApp.Href}>WhatsApp: {WhatsApp.Text}</a>
            <a href={Mail.Href}>Email: {Mail.Text}</a>
        </ContactContainer >
    )
}