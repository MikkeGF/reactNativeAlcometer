import React from 'react'
import styled from 'styled-components/native'


const StyledView = styled.View`
    margin: 20px 0px;
    justify-content: flex-start;
`;

const ResultText = styled.Text`
    font-size: 20px;
`;

const Result = ({ result }) => {

    return (
        <StyledView>
            { result < 4.5 ?
                <ResultText>Promilles {result}</ResultText>
                :
                <ResultText>I think you are dead. Promilles {result} </ResultText>
            }
        </StyledView>
    );
}

export default Result
