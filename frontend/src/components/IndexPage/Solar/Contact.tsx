import ContactSolar from "./ContactSolar.js"
import styled from "styled-components"

const ContactContainer = styled.div`
    * {
        display: block;
    }
`

export default function Contact() {
    return (
        <ContactContainer>
            <a href={ContactSolar.Number.Href}>Telefone: {ContactSolar.Number.Text}</a>
            <a href={ContactSolar.Mail.Href}>Email: {ContactSolar.Mail.Text}</a>
        </ContactContainer >
    )
}