import React from "react";
import { connect, styled } from "frontity";

const Cv = ( {state} ) => {

    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];

    console.log("CV PAGE")

    return(
        <div>
            <Columns>
                <div>
                    <Title>Work Experience</Title>
                    <WorkExperience dangerouslySetInnerHTML={{__html: page.acf.work_experience}} />
                </div>
                <div>
                    <div>
                        <Title>Education</Title>
                        <Education dangerouslySetInnerHTML={{__html: page.acf.education}} />
                    </div>
                    <div>
                        <Title>Skills</Title>
                        <Skills dangerouslySetInnerHTML={{__html: page.acf.skills}} />
                    </div>
                    <div>
                        <Title>Languages</Title>
                        <Languages dangerouslySetInnerHTML={{__html: page.acf.languages}} />
                    </div>
                </div>
            </Columns>
            <div>
                <Title>Contact</Title>
                <Contact dangerouslySetInnerHTML={{__html: page.acf.contact}} />
            </div>
        </div>
    )
}

const WorkExperience = styled.div`
    margin-bottom: 50px;
    font-family: FugueMono;
    width: 70%;
    @media (max-width: 1024px) {
        width: 100%;
    }
}`

const Education = styled.div`
    margin-bottom: 50px;
    font-family: FugueMono;
    width: 70%;
    @media (max-width: 1024px) {
        width: 100%;
    }
}`

const Skills = styled.div`
    margin-bottom: 50px;
    font-family: FugueMono;
    width: 70%;
    @media (max-width: 1024px) {
        width: 100%;
    }
}`

const Languages = styled.div`
    margin-bottom: 50px;
    font-family: FugueMono;
    width: 70%;
    @media (max-width: 1024px) {
        width: 100%;
    }
}`

const Contact = styled.div`
    margin-bottom: 50px;
    font-family: FugueMono;
    width: 70%;
    @media (max-width: 1024px) {
        width: 100%;
    }
}`

const Columns = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
}`

const Title = styled.div`
    font-family: HelveticaNeue;
}`

export default connect(Cv);