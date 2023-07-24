import React, { useContext, useState } from "react";
import styled from 'styled-components';
import { LoginContext } from "../App";
import ProgressBar from "../components/ProgressBar/progressBar";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const Block = styled.span`
    display: flex;
    padding-bottom: 0px;
`

const AvatarDiv = styled.div`
    border: 4px solid gray;
    border-radius: 100%;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: gray;
    margin-top: 20px;
`

const UserDataContainer = styled.span`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const UserDataCol = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const StyledHr = styled.hr`
    width: 20rem;
`

const UserJobCol = styled.div`
    display: flex;
    margin-bottom: 10px;
    color: rgb(96 165 250);
`

const UserLevelCol = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
`

const StyledButton = styled.button`
    border: 0px;
    border-radius: 0.3rem;
    background-color: #c0b8b8;
    font-size: 15px;
    width: 2rem;
    color: black;
    padding: 2px;
`

function Skills() {
    const [user] = useContext(LoginContext);
    const [skills, setSkills] = useState(user.skills);

    const skillsPoinst = () => {
        let i = 0;
        user.skills.forEach((skill) => {
            i = i + skill.level;
        });
        return i * 2;
    }

    const handleClickPlusButton = (id) => {
        const newSkills = [...skills];
        const skill = newSkills.find(s => s.id === id);
        if (skill.level === 50) {
            return;
        } else {
            skill.level++;
            setSkills(newSkills);
        }
    }

    return (
        <Container>
            <Block>
                <AvatarDiv>
                    {user.avatar === undefined ? user.name[0] : <img alt="avatar" src={user.avatar} />}
                </AvatarDiv>
                <UserDataContainer>
                    <UserDataCol>
                        {user.name}
                    </UserDataCol>
                    <UserLevelCol>
                        Level: {user.skills.length}
                    </UserLevelCol>
                    <UserJobCol>
                        {user.job}
                    </UserJobCol>
                </UserDataContainer>
            </Block>
            <StyledHr />
            <Block>
                <UserDataContainer>
                    <UserDataCol>
                        Skills Points: {skillsPoinst()}
                    </UserDataCol>
                    {skills.map((skill) => {
                        return (
                            <UserDataCol>
                                {skill.name}
                                <ProgressBar progress={skill.level} />
                                <StyledButton onClick={() => handleClickPlusButton(skill.id)}>+</StyledButton>
                            </UserDataCol>
                        );
                    })}
                </UserDataContainer>
            </Block>
        </Container>
    );
}

export default Skills;