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
            <Img src="https://cdn.pixabay.com/photo/2018/09/25/23/40/cranes-3703469_960_720.jpg" alt="Guindaste" />
        </ImageContainer>
    )
}