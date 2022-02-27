import styled from "styled-components";
import Title from "../../Infra/Title"
import Text from "./Text";

const SolarContainer = styled.div`
    text-align: center;
`

export default function Solar() {
    return (
        <SolarContainer id="Solar">
            <Title>NystronSolar</Title>
            <Text />
        </SolarContainer>
    );
}