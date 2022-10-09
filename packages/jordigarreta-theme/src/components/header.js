import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Header = ( {state} ) => {

    const data = state.source.get(state.router.link);

    return(
        <Icon>
            <Link href="/">
                <Name>Jordi Garreta</Name>
                <br/>
                <Jobposition>Creative coder</Jobposition>
                <br/>
                <Phone>+49 1575 0181871</Phone>
            </Link>
            <Link href="/lab">LAB</Link>
        </Icon>
    )
}

const Icon = styled.div`
    z-index: 1;
    position: fixed;
    padding-top: 50px;
    font-family: HelveticaNeue;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 25px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
        width: 80%;
        font-size: 20px;
        line-height: 18px;
    }
`;

const Name = styled.span`
    -webkit-text-stroke: 1px black;
    color: transparent;
`;

const Jobposition = styled.span`
    color: black;
`;

const Phone = styled.span`
    font-size: 17px;
    color: black;
`;

export default connect(Header);