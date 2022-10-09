import React from "react";
import { connect, styled } from "frontity";

const LinkPrevNext = ({ href, actions, children }) => {
    return(
        <div>
            <Linked href={href}
                onClick={e => {
                    e.preventDefault();
                    actions.router.set(href);
                }}
            >
                { children }
            </Linked>
        </div>
    )
}

const Linked = styled.div`
    -webkit-text-stroke: 1px black;
    color: black;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: black;
    }
`;

export default connect(LinkPrevNext);