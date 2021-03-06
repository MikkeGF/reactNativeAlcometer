import React, { useState } from 'react'
import AwesomeButtonBlue from 'react-native-really-awesome-button/src/themes/blue';
import styled from 'styled-components/native'

// import components
import Result from './Result';


const StyledView = styled.View`
    width: 60%;
    margin: 20px 0px;
`;

const Button = ({ weight, bottles, hours, gender }) => {

    const handleCalculate = (weight, bottles, hours, gender) => {
        let litres = bottles * 0.33
        let burning = weight / 10 * hours
        let grams = litres * 8 * 4.5
        let gramsLeft = grams - burning
        let result = gramsLeft / (weight * gender)
        handleResult(result)
    }
    const handleResult = (result) => {
        (result > 0) ? setValue(result.toFixed(2)) : setValue(0)
    }

    const [value, setValue] = useState(0)

    return (
        <>
            <StyledView>
                <AwesomeButtonBlue
                    stretch
                    progress
                    onPress={next => {
                    handleCalculate(weight, bottles, hours, gender)
                    next();
                    }}
                >
                    Calculate
                </AwesomeButtonBlue>
            </StyledView>
            <Result result={value} />
        </>
    );
}

export default Button;