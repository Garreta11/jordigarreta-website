import React from "react";
import { connect, styled } from "frontity";

const LinkPost = ({ href, actions, children, className, poster, video, title }) => {

    let classname = "project " + className;

    return(
        <Linked
            href={href}
            className={classname}
            onClick={e => {
                e.preventDefault();
                actions.router.set(href);
            }}
        >
            {video != "" ? 
                <PostVideo
                    poster={poster}
                    loop
                    muted
                    preload="auto"
                    onMouseEnter = {e => {
                        e.target.play();
                    }}
                    onMouseLeave = {e => {
                        e.target.pause();
                    }}
                >
                    <source type="video/mp4" src={video} />
                </PostVideo>
            : ""}
            
            <PostTitle>
                {title}
            </PostTitle>
        </Linked>
    )
}

const Linked = styled.div`
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 40px;
    @media (max-width: 1024px) {
        margin: 30px 0px;
    }
`;

const PostVideo = styled.video`
    width: 70%;
    height: auto;
    max-height: 500px;
    max-width: 500px;
    display: block;
    margin: 0px auto;
    @media (max-width: 1024px) {
        width: 50%;
    }
`;

const PostTitle = styled.p`
    font-family: HelveticaNeue;
    text-transform: uppercase;
    width: 80%;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 40px;
    position: absolute;
    margin: 0px auto;
    left: 0px;
    right: 0px;
    line-height: 32px;
    pointer-events: none;
    white-space: pre-wrap;
    @media (max-width: 1024px) {
        width: 70%;
        font-size: 20px;
        line-height: 18px;
    }
`;

export default connect(LinkPost);