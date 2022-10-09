import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Filter = ( {state} ) => {

    const [filters, setFilters] = useState(true);

    const cats = state.source.category;
    var array = Object.keys(cats)
    .map(function(key) {
        return cats[key].name;
    });

    const handleClickAll = (e) => {
        console.log("filter: ALL");
        let filterCat = document.querySelectorAll(".filter-category");
        [...filterCat].map(cat => {
            cat.classList.remove("selected");
        });
        e.target.classList.add("selected");
        let elements = document.querySelectorAll(".project");
        [...elements].map(proj => {
            proj.classList.remove('hide');
        })
    };

    const handleFilters = () => {
        setFilters(!filters);
    }

    return(
        <div>
            {/* <FilterBtn 
                onClick={handleFilters}
            />
            <FilterContainer show={filters}> */}
            <FilterContainer>
                <Category
                    onClick={handleClickAll}
                    className="selected filter-category"
                >
                    All
                </Category>
                {array.map(cat => {
                    const handleClick = (e) => {

                        let filterCat = document.querySelectorAll(".filter-category");
                        [...filterCat].map(cat => {
                            cat.classList.remove("selected");
                        });
                        e.target.classList.add("selected");

                        console.log("filter: ", e.target.id);
                        let elements = document.querySelectorAll(".project");
                        [...elements].map(proj => {
                            if (!proj.classList.contains(e.target.id)) {
                                proj.classList.add('hide');
                            } else {
                                proj.classList.remove('hide');
                            }
                        })
                    }
                    return(
                        <Category
                            className="filter-category"
                            onClick={handleClick}
                            id={cat.toLowerCase()}
                            key={cat.toLowerCase()}
                        >
                            {cat}
                        </Category>
                    )
                })}
            </FilterContainer>
        </div>
    )
}

const Category = styled.p`
    font-size: 15px;
    cursor: pointer;
    -webkit-text-stroke: 1px black;
    color: transparent;
    font-family: HelveticaNeue;
    text-transform: uppercase;
    &:focus {
        outline: 0;
    }
    &:hover {
        color: black;
    }
    @media (max-width: 1024px) {
        margin: 10px 0px;
    }
`;

const FilterContainer = styled.div`
    // display: ${(props) => (props.show ? "flex" : "none")};
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    @media (max-width: 1024px) {
        display: block;
        text-align: center;
    }
`;

const FilterBtn = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    cursor: pointer;
`;

export default connect(Filter);