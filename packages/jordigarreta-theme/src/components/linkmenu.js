import React, {useState, useEffect} from "react";
import { connect, styled, css } from "frontity";

let rightpos = "initial";
let leftpos = "initial";
let transformscroll = "translate3D(0, 0, 0)";
const LinkMenu = ({ href, actions, children, right, left }) => {

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event => {
          setScrollTop(window.scrollY);
          transformscroll = "translate3D(0, " + scrollTop + "px, 0)";
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);

    if (right) {
        rightpos = "0px";
        leftpos = "initial";
    }
    if (left) {
        rightpos = "initial";
        leftpos = "0px";
    }

    return(
        <Linked href={href}
            onClick={e => {
                e.preventDefault();
                actions.router.set(href);
                // if (right) actions.router.set(href);
                // if (left) {
                //     window.open(
                //         href,
                //         '_blank'
                //     );
                // }
            }}
            css={css`
                right: ${rightpos};
                left: ${leftpos};
                transform: ${transformscroll};
            `}
        >
            { children }
        </Linked>
    )
}

const Linked = styled.div`
    text-decoration: none;
    cursor: pointer;
    font-size: 40px;
    font-family: HelveticaNeue;
    text-transform: uppercase;
    -webkit-text-stroke: 1px black;
    color: transparent;
    text-align: center;
    position: fixed;
    top: -7000px;
    width: 5%;
    &:hover {
        color: black;
    }
    @media (max-width: 1024px) {
        width: 10%;
        font-size: 20px;
    }
`;

export default connect(LinkMenu);