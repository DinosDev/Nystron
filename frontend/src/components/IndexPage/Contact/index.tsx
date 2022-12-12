import ContactData from "./ContactData"
import styled from "styled-components"
import Title from "../../Infra/Title"
import Form from "./Form"

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

            <p>Você pode Entrar em Contato Com A Nossa Equipe Por Telefone, Email Ou Preencha O Formulário Abaixo.</p>
            <a href={ContactData.Number.Href}>Telefone: {ContactData.Number.Text}</a>
            <a href={ContactData.WhatsApp.Href}>WhatsApp: {ContactData.WhatsApp.Text}</a>
            <a href={ContactData.Mail.Href}>Email: {ContactData.Mail.Text}</a>
        </ContactContainer >
    )
}
