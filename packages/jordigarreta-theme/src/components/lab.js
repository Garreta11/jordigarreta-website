import React, { useLayoutEffect } from "react";
import { connect, styled } from "frontity";

const Lab = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    
    console.log(state);
    console.log(data);
    console.log(page);


    useLayoutEffect(() => {
        // Caluclate Everything Function
        const handleMousemove = (e) => {
            // Mouse X and Y
            const x = e.pageX;
            const y = e.pageY;

            // console.log( document.elementFromPoint(x, y) );
            let labItem = document.getElementsByClassName("lab-item-info");
            let n = labItem.length;
            for(var i = 0; i < n; i ++) {
                labItem[i].style.top = y + "px";
                labItem[i].style.left = x + "px";
            } 
        };

        window.addEventListener("mousemove", handleMousemove);

        return () => {
            window.removeEventListener("mousemove", handleMousemove);
        };
    }, []);

    return(
        <div dangerouslySetInnerHTML={{__html: page.content.rendered}}/>
    )
}

export default connect(Lab);