import styled from "styled-components"
import Title from "./Title"

const AddressContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 0px 30px;
    flex-flow: row wrap;
`

export default function Address() {
    return (
        <AddressContainer>
            <Title>Nosso Endereço</Title>
        </AddressContainer>
    )
}