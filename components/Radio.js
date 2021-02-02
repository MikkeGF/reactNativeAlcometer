import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import styled from 'styled-components/native'

const StyledView = styled.View`
    width: 80%;
`;

const Radio = ({ setGender, radioProps }) => {

    return (
        <StyledView>
            <RadioForm
                radio_props={radioProps}
                initial={0}
                onPress={value => setGender(value)}
                buttonColor='#1360a4'
                selectedButtonColor='#1360a4'
            />
        </StyledView>
    );
};

export default Radio;