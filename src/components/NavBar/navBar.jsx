import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
    width: 36%;
    height: 3rem;
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
`

function NavBar() {
    return (
        <Container>
            <StyledNav>
                <Link className="Link" to={"/"}>Home</Link>
                <Link className="Link" to={"/skills"}>Skills</Link>
                <Link className="Link" to={"/logout"}>Logout</Link>
            </StyledNav>
        </Container>
    );
}

export default NavBar;