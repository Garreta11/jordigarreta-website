import React from "react";
import { connect, styled } from "frontity";
import Lab from "./lab";
import Aboutme from "./aboutme";

const Page = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const isLab = page.link === "/lab/";
    const isAboutme = page.link === "/about-me/";

    return(
        <div>
            {isLab && <Lab />}
            {isAboutme && <Aboutme />}
        </div>
    )
}

export default connect(Page);