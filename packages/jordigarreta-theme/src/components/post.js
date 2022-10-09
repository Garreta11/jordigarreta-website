import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import LinkPrevNext from "./linkPrevNext";

const Post = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const author = state.source.author[post.author];

    const prev = post.previous ? state.source[data.type][post.previous.id] : "";
    const next = post.next ? state.source[data.type][post.next.id] : "";

    return(
        <div>
            <Title>{post.title.rendered}</Title>

            {/* {post.categories.map( category => {
                    const cat = state.source.category[category]
                    return (
                        <p key={cat.id} >{cat.name}</p>
                    )
            })} */}

            <PostInfo>
                <Description>
                    <p>{post.acf.description}</p>
                </Description>
                <Credits>
                    <CreditsTitle>Credits</CreditsTitle>
                    {/* <p>{post.acf.credits}</p> */}
                    <div dangerouslySetInnerHTML={{__html: post.acf.credits}}/>
                </Credits>
            </PostInfo>

            <Content dangerouslySetInnerHTML={{__html: post.content.rendered}}/>

            {post.acf.project_link ?
               <ProjectLink href={post.acf.project_link} target="_blank">PROJECT LINK</ProjectLink>
               :
               ""
            }

            <PrevNext>
                { next ? <LinkPrevNext href={next.link}>← Previous Project</LinkPrevNext> : ''}
                { prev ? <LinkPrevNext href={prev.link}>Next Project →</LinkPrevNext> : ''}
            </PrevNext>
        </div>
    )
}

/* 
    STYLES
*/

const Sidebar = styled.div`
    width: 25%;
    padding: 0 2em;
    float: right;
    border-left: 4px solid lightgrey;
`

const PrevNext = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: FugueMono;
    color: black;
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 30px;
`

const Title = styled.h2`
    margin: 0px 0px 20px;
    font-size: 50px;
    white-space: pre-wrap;
    line-height: 0.8em;
    font-family: HelveticaNeue;
    text-transform: uppercase;
    width: 60%;
`

const PostInfo = styled.div`
    display: flex;
    font-family: FugueMono;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const Description = styled.div`
    width: 60%;
    margin: 0px 40px 0px 0px;
    column-count: 2;
    column-gap: 40px;
    @media (max-width: 1024px) {
        width: 100%;
        column-count: 1;
        margin: 20px 0px;
    }
`

const Credits = styled.div`
    width: 40%;
    @media (max-width: 1024px) {
        width: 100%;
    }
`

const CreditsTitle = styled.h3`
    font-family: HelveticaNeue;
    text-transform: uppercase;
`

const ProjectLink = styled.a`
    font-family: HelveticaNeue;
    text-transform: uppercase;
    font-size: 35px;
    color: transparent;
    -webkit-text-stroke: 1px black;
    text-decoration: none;
    clear: both;
    margin-bottom: 50px;
    &:hover {
        color: black;
    }
}
`
const Content = styled.div`
    margin-bottom: 50px;
}
`

export default connect(Post);