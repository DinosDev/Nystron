import Link from "next/link";
import styled from "styled-components";

const AboutContainer = styled.div``

const Img = styled.img`
    width: 100px;
`

export default function About() {
    return (
        <AboutContainer>
            <Link href="/" passHref><a>
                <Img src="images/LogoWhite.png" alt="Logo Madeireira Nystron" />
            </a></Link>

            <p>Madeireira Nystron Ltda</p>
        </AboutContainer>
    )
}