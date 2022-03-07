import styled from "styled-components"

const ImageContainer = styled.div`
    width: 45%;

    @media (max-width: 768px) {
        width: 93%;
    }
`

const Img = styled.img`
    width: 100%;
    object-fit: cover;
`

export default function Image() {
    return (
        <ImageContainer>
            <Img src="/images/Banner.jpg" alt="Nystron Banner" />
        </ImageContainer>
    )
}