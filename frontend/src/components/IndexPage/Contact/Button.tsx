import styled from "styled-components"

const ButtonContainer = styled.button`
    margin: 10px auto;
    font-size: 18px;
    padding: 20px;
`

export default function Button() {
    return (
        <ButtonContainer type="submit">Enviar</ButtonContainer>
    )
}