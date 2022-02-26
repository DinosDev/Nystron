import { Number, Mail } from "./ContactSolar.json"
import styled from "styled-components"

const ContactContainer = styled.div``

export default function Contact() {
    return (
        <ContactContainer>
            <a href={Number.Href}>Telefone: {Number.Text}</a>
            <a href={Mail.Href}>Email: {Mail.Text}</a>
        </ContactContainer >
    )
}