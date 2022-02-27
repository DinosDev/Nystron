import { Number, Mail } from "../Contact/Contact.json"
import styled from "styled-components";

const ContactContainer = styled.div``

export default function Contact() {
    return (
        <ContactContainer>
            <h4>Contato</h4>
            <a href={Number.Href}>Telefone: {Number.Text}</a>
            <br />
            <a href={Mail.Href}>Email: {Mail.Text}</a>
            <br /> <br />
            <a href="https://goo.gl/maps/iZxmMg9vYewnso4y5" target="_blank">
                R. João Batista de Castilhos, 140
                <br />
                Quaraí, RS | CEP 97560-000
            </a>
        </ContactContainer>
    )
}