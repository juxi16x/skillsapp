import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from 'styled-components';
import { loginContext } from "../App";

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

function Skills() {
    const [user] = useContext(loginContext);

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
            <StyledHr/>
            <Block>

            </Block>
        </Container>
    );
}

export default Skills;