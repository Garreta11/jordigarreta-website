import React from "react";
import { connect, styled } from "frontity";
import Lab from "./lab";
import Aboutme from "./aboutme";
import Cv from "./cv";

const Page = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const isLab = page.link === "/lab/";
    const isAboutme = page.link === "/about-me/";
    const isCv = page.link === "/cv-2/";

    console.log(page.link)

    return(
        <div>
            {isLab && <Lab />}
            {isAboutme && <Aboutme />}
            {isCv && <Cv />}
        </div>
    )
}

export default connect(Page);