import styled from "styled-components";
import Contact from "./Contact";

const TextContainer = styled.div`
    display: block;
    text-align: center;
    font-size: 20px;

    * {
        text-align: center;

        @media (max-width: 768px) {
            margin-bottom: 10px;
        }
    }
`;



export default function Text() {
    return (
        <TextContainer id="solar">
            <p>Já pensou em economizar e reduzir sua conta de luz?</p>
            <p>Gere sua própria energia renovável e limpa.</p>
            <p>Invista em Geração Solar!</p>
            <p>Instale com a Nystron Solar</p>
            <p>Faça seu orçamento!</p>
            <a href="https://solar.nystron.com">Acesse o site da Nystron Solar!</a>
            <Contact />
        </TextContainer>
    )
}
