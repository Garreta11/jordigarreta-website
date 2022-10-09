import React from "react";
import { connect, styled } from "frontity";
import LinkPost from "./linkpost";
import Filter from "./filter";

const Homepage = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const cats = state.source.category;

    const decode = (str) => {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    }

    return(
        <div>
            <Filter></Filter>
            <SubContainer>
                {data.items.map(item => {
                    const post = state.source.post[item.id];
                    
                    const postcat = cats[post.categories[0]].name;
                    
                    return(
                        <LinkPost
                            key={item.id}
                            href={post.link}
                            className={postcat.toLowerCase()}
                            poster={post.acf.video ? post.acf.video.imatge_preview.url : ""}
                            video={post.acf.video ? post.acf.video.video.url : ""}
                            title={decode(post.title.rendered)}
                        >
                        </LinkPost>
                    )
                })}
            </SubContainer>
        </div>
    )
}

const SubContainer = styled.div`
    -webkit-box-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    text-align: center;
    width: 95%;
    margin: 0 auto;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`;

export default connect(Homepage);