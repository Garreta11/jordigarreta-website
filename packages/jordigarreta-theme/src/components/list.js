import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const List = ( {state} ) => {

    const data = state.source.get(state.router.link);

    console.log("ITEMS: ", data.items);

    return(
        <div>
            {data.items.map(item => {
                const post = state.source.post[item.id];
                console.log("Item: ", item);
                return(
                    <Link key={item.id} href={post.link}>
                        {post.title.rendered}
                    </Link>
                )
            })}
        </div>
    )
}

export default connect(List);