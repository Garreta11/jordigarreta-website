import React from "react";
import { connect, styled } from "frontity";

const Aboutme = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    return(
        <div>
            <Description>{page.acf.description}</Description>
            <Make>
                <MakeText>MAKE.</MakeText>
                <MakeText>MAKE.</MakeText>
                <MakeText>MAKE.</MakeText>
            </Make>
            <Columns>
                <SocialNetworks>
                    <SocialNetworksLink href={page.acf.social_network.instagram} target="_blank">INSTAGRAM</SocialNetworksLink>
                    <br/>
                    <SocialNetworksLink href={page.acf.social_network.github} target="_blank">GITHUB</SocialNetworksLink>
                    <br/>
                    <SocialNetworksLink href={page.acf.social_network.linkedin} target="_blank">LINKEDIN</SocialNetworksLink>
                    <br/>
                    <SocialNetworksLink href={page.acf.social_network.email} target="_blank">E-MAIL</SocialNetworksLink>
                    <br/>
                </SocialNetworks>
                <Friends>
                    <FriendsTitle>FRIENDS</FriendsTitle>
                    <FriendsLinks dangerouslySetInnerHTML={{__html: page.acf.friends}}/>
                </Friends>
            </Columns>
        </div>
    )
}

const Description = styled.div`
    margin-bottom: 50px;
    font-family: FugueMono;
    column-count: 2;
    width: 70%;
    @media (max-width: 1024px) {
        column-count: 1;
        width: 100%;
    }
}`

const Make = styled.div`
    margin-bottom: 50px;
    font-size: 50px;
    font-family: HelveticaNeue;
    text-transform: uppercase;
    @media (max-width: 1024px) {
        font-size: 30px;
    }
}`

const MakeText = styled.p`
    margin: 0px;
    font-weight: bold;
}`

const Columns = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 80%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
}`

const SocialNetworks = styled.div`
    
}`

const SocialNetworksLink = styled.a`
    font-family: HelveticaNeue;
    -webkit-text-stroke: 1px black;
    color: transparent;
    text-decoration: none;
    font-size: 30px;
    &:hover {
        color: black;
    }
}`

const Friends = styled.div`
    @media (max-width: 1024px) {
        margin-top: 50px;
    }
}`

const FriendsLinks = styled.div`
    font-family: FugueMono;
}`

const FriendsTitle = styled.h3`
    font-family: HelveticaNeue;
    color: black;
    font-size: 35px;
    margin-bottom: 0px;
    @media (max-width: 1024px) {
        font-size: 25px;
    }
}`

export default connect(Aboutme);