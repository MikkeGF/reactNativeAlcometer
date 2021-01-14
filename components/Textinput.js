import React, { useState } from 'react'
import { TextInput, Text } from 'react-native';
import styled from 'styled-components/native'





const Input = styled(TextInput)`
 height: 50px;
 font-size: 20px;
 justify-content: center;
 width: 80%;
 border-color: gray;
 border-width: 1px;
 border-radius: 10px;
 margin-bottom: 10px;
`;

const StyledText = styled(Text)`
    font-size: 20px;
    margin: 20px 0px;
`;

const Textinput = ({ placeholder, weight, setWeight }) => {

    return (
        <>
                <Input
                    onChangeText={text => setWeight(text)}
                    value={weight}
                    placeholder={placeholder}
                    textAlign='center'
                    keyboardType='numeric'
                    clearTextOnFocus
                />
                <StyledText> Person weight {weight} kg</StyledText>
        </>
    );
}

export default Textinput
