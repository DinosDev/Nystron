import styled from "styled-components"
import Title from "./Title"
import Iframe from "./Iframe"

const AddressContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 0px 30px;
    flex-flow: row wrap;
`

const IframeSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13766.673301382876!2d-56.4538955!3d-30.3887748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54d29733a91d9b03!2sMadeireira%20Nystron!5e0!3m2!1spt-BR!2sbr!4v1628554787566!5m2!1spt-BR!2sbr"

export default function Address() {
    return (
        <AddressContainer>
            <Title>Nosso Endereço</Title>
            <Iframe src={IframeSrc} />
        </AddressContainer>
    )
}