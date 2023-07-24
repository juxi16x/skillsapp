import React from "react";
import styled from 'styled-components';

const ProgressBarDiv = styled.div`
    width: 15rem;
    height: 1rem;
    border: 1px solid #f5e5e5;
    border-radius: 1rem;
    margin-left: 10px;
`

const ProgressDiv = styled.div`
    border-radius: 1rem;
    background-color: red;
    height: 1rem;
    text-align: end;
`

function ProgressBar(props) {

    return (
        <ProgressBarDiv>
            <ProgressDiv style={{ width: props.progress * 2 + '%' }}>{props.progress === 0? '' : props.progress * 2}</ProgressDiv>
        </ProgressBarDiv>
    );
}

export default ProgressBar;