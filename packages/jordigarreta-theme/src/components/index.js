import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "./link";
import LinkMenu from "./linkmenu";
import Post from "./post";
import Page from "./page";
import Homepage from "./homepage";
import Header from "./header";
import Footer from "./footer";
import FugueMono from "../fonts/FugueMono.ttf";
// import HelveticaNeue from "../fonts/Helvetica-Neue-97-Black-Condensed.ttf";
import HelveticaNeue from "../fonts/HelveticaNeueBlackExt.ttf";


const Root = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const isLab = data.link === "/lab/";
    const isAboutme = data.link === "/about-me/";

    return (
        <Container>
            <Global styles={css`
                @font-face {
                    font-family: FugueMono;
                    src: url("${FugueMono}") format("truetype");
                }
                @font-face {
                    font-family: HelveticaNeue;
                    src: url("${HelveticaNeue}") format("truetype");
                }
                * {
                    margin: 0;
                    padding:0;
                }
                html {
                    font-family: system-ui, Verdana, Arial, sans-serif;
                }
                .lab-container {
                    -moz-column-count: 2;
                    -webkit-column-count: 2;
                    column-count: 2;
                    -moz-column-gap: 0px;
                    -webkit-column-gap: 0px;
                    column-gap: 0px;
                }
                .lab-item {
                    &:hover .lab-item-info {
                        display: block;
                    }
                }
                .lab-item-info {
                    position: absolute;
                    display: none;
                    background-color: white;
                    padding: 10px 20px;
                    opacity: 0.8;
                    border: 1px solid black;
                }
                .media-project * {
                    width: 100%;
                    height: auto;
                }
                .selected {
                    color: black !important;
                }
                .hide {
                    display: none !important;
                }
                `}
            />
            <LinkMenu href="./wp-content/uploads/2022/09/cv.pdf" left>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
                C<br/>U<br/>R<br/>R<br/>I<br/>C<br/>U<br/>L<br/>U<br/>M<br/><br/>
            </LinkMenu>
            <Main>
                <Header/>
                <SubContainer>
                    {data.isHome && <Homepage/>}
                    {data.isPost && <Post />}
                    {data.isPage && <Page />}
                </SubContainer>
                <Footer/>
            </Main>
            <LinkMenu href="/about-me" right>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
                A<br/>B<br/>O<br/>U<br/>T<br/><br/>M<br/>E<br/><br/>
            </LinkMenu>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Main = styled.main`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 80%;
    }
`;

const SubContainer = styled.div`
    margin-top: 200px;
    min-height: calc(100vh - 300px);
    @media (max-width: 1024px) {
        margin-top: 150px;
    }
`;

export default connect(Root);