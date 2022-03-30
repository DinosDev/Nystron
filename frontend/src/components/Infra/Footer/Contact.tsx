import ContactData from "../../IndexPage/Contact/ContactData"
import styled from "styled-components";

const ContactContainer = styled.div``

export default function Contact() {
    return (
        <ContactContainer>
            <h4>Contato</h4>
            <a href={ContactData.Number.Href}>Telefone: {ContactData.Number.Text}</a>
            <br />
            <a href={ContactData.Mail.Href}>Email: {ContactData.Mail.Text}</a>
            <br /> <br />
            <a href="https://goo.gl/maps/iZxmMg9vYewnso4y5" target="_blank">
                R. João Batista de Castilhos, 140
                <br />
                Quaraí, RS | CEP 97560-000
            </a>
        </ContactContainer>
    )
}