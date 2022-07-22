import styled from "styled-components"
import MiniTitle from "./MiniTitle"

const ContentContainer = styled.div`
    text-align: center;
    width: 45%;

    @media (max-width: 768px) {
        width: 93%;
    }
`

const Text = styled.p``

export default function Content(props: any) {
    const age = props.age

    return (
        <ContentContainer>
            <MiniTitle />
            <Text>
                A Madeireira Nystron foi fundada em 29 de dezembro de 1978 pelo empresário Jaime Canuto Nystron. Nestes mais de {age} anos, a Nystron tornou-se uma das maiores empresas de materiais de construção da região oeste do Rio Grande Do Sul.
                <br />
                Por último, a Nystron vem abrindo áreas como a divisão Nystron Solar, que fornece e instala soluções de eficiência energética com geração solar Ongrid e Offgrid.
            </Text>
        </ContentContainer>
    )
}