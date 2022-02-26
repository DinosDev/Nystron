import styled from "styled-components"
import MiniTitle from "./MiniTitle"

const ContentContainer = styled.div`
    text-align: center;
    width: 45%;
`

const Text = styled.p``

export default function Content() {
    return (
        <ContentContainer>
            <MiniTitle />
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, debitis. Amet sequi deserunt ducimus harum vel, soluta dolor neque dolore ipsum illum eius laboriosam eum adipisci iure fugiat cum tempora.</Text>
        </ContentContainer>
    )
}