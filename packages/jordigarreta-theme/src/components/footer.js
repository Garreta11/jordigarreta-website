import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Footer = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const year = new Date().getFullYear();

    return(
        <FooterContainer>
            <FooterLeft>
                <AllRights>ALL RIGHTS<br/>RESERVED.</AllRights>
                <SendEmail><Mail href="mailto:jordigarreta11@gmail.com" target="_blank">SEND E-MAIL</Mail> or<br/>CALL +49 1575 0181871</SendEmail>
            </FooterLeft>
            <Year>© {year}</Year>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: initial;
    }
`;

const FooterLeft = styled.div`
    @media (max-width: 1024px) {
        margin-bottom: 30px;
    }
`;

const AllRights = styled.p`
    font-family: HelveticaNeue;
    font-size: 20px;
    line-height: 18px;
`;

const SendEmail = styled.p`
    font-family: HelveticaNeue;
    font-size: 12px;
`;

const Mail = styled.a`
    color: black;
`;

const Year = styled.p`
    font-family: HelveticaNeue;
    -webkit-text-stroke: 1px black;
    color: transparent;
    font-size: 30px;
`;


export default connect(Footer);