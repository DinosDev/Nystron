import ContactMain from "./Contact.js"
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

            <a href={ContactMain.Number.Href}>Telefone: {ContactMain.Number.Text}</a>
            <a href={ContactMain.WhatsApp.Href}>WhatsApp: {ContactMain.WhatsApp.Text}</a>
            <a href={ContactMain.Mail.Href}>Email: {ContactMain.Mail.Text}</a>

            <Form />
        </ContactContainer >
    )
}