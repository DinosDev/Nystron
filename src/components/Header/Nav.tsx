import Link from "next/link"
import styled from "styled-components"
import NavLinks from "./NavLinks.json"

const NavContainer = styled.nav``

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
`

const NavLink = styled.a`
    text-decoration: none;
    transition: border .1s ease-out;
    border-bottom: 0px #00548b solid;
    margin: 0 3px 0 3px;
    text-decoration: none;

    :hover {
        border-bottom: 2.5px #00548b solid;
        transition: border .1s ease-out; 
        font-weight: bold;
    }    

`

const NavItem = styled.li`
    margin: 0 3px 0 3px;
`

export default function Nav() {
    return (
        <NavContainer>
            <List>
                {NavLinks.map((link, index) => (
                    <NavItem key={index}>
                        <Link href={link.Href} passHref>
                            <NavLink>{link.Name}</NavLink>
                        </Link>
                    </NavItem>
                ))}
            </List>
        </NavContainer>
    )
}