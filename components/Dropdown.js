import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native'

const StyledView = styled.View`
    width: 80%;
`;

const Dropdown = ({ items, zIndex, setValue, placeholder }) => {
    return (
        <StyledView
            style={{zIndex: zIndex}}>
            <DropDownPicker
                items={items}
                containerStyle={{height: 40, marginBottom: 20, zIndex: 1}}
                itemStyle={{justifyContent: 'flex-start'}}
                placeholder={placeholder}
                onChangeItem={item => setValue(item.value)}
                labelStyle={{color: '#0e4f88'}}
            />
        </StyledView>
    )
}

export default Dropdown;
