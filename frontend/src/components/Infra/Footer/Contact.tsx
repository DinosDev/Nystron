import Json from "../../IndexPage/Contact/ContactData"
import styled from "styled-components";

const ContactContainer = styled.div``

export default function Contact() {
    return (
        <ContactContainer>
            <h4>Contato</h4>
            <a href={Json.Number.Href}>Telefone: {Json.Number.Text}</a>
            <br />
            <a href={Json.Mail.Href}>Email: {Json.Mail.Text}</a>
            <br /> <br />
            <a href="https://goo.gl/maps/iZxmMg9vYewnso4y5" target="_blank">
                R. João Batista de Castilhos, 140
                <br />
                Quaraí, RS | CEP 97560-000
            </a>
        </ContactContainer>
    )
}