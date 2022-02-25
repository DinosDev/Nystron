import Link from "next/link"
import styled from "styled-components"

const LogoContainer = styled.div`
    @media (max-width: 830px) {
        margin-bottom: 20px;
    }
`

const ImgLink = styled.a`
    text-decoration: none;
    transition: border .1s ease-out;
    border-bottom: 0px #00548b solid;

    :hover {
        border-bottom: 2.5px #00548b solid;
        transition: border .1s ease-out;
        font-weight: bold;
    }
`


const Img = styled.img`
    width: 60px !important;
`

export default function Logo() {
    return (
        <LogoContainer>
            <Link href="/" passHref>
                <ImgLink>
                    <Img src="/images/LogoBlue.png" alt="Logo Madeireira Nystron" />
                </ImgLink>
            </Link>
        </LogoContainer>
    )
}
