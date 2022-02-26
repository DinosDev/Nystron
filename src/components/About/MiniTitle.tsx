import styled from "styled-components"

const MiniTitleContainer = styled.div``

const Text = styled.h1`
    font-size: 15px;
    margin-bottom: 5px;

    :before, :after {
        content: " - ";
    }
`

export default function MiniTitle() {
    return (
        <MiniTitleContainer>
            <Text>Madeireira Nystron</Text>
        </MiniTitleContainer>
    )
}