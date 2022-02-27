import styled from "styled-components";

const TitleText = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 50px;
    margin: 0;
    padding: 0;
`

export default function Title({ children }: any) {
    return (
        <TitleText>{children}</TitleText>
    );
}

