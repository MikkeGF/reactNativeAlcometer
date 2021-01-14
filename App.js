import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native'

// Import components
import TextInput from './components/Textinput';
import Dropdown from './components/Dropdown';
import Radio from './components/Radio';
import Button from './components/Button';


const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const DissmissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {

  let i;
  let bottlesArray = [{ label: '1 bottle', value: 1, icon: () => <Icon name="bottle-soda" size={20} color="#705c30" /> }];
  for (i = 2; i <= 24; i++) {
    let item = { label: `${i} bottles`, value: i, icon: () => <Icon name="bottle-soda" size={20} color="#705c30" /> }
    bottlesArray.push(item)
  }

  let hoursArray = [{ label: '1 hour', value: 1, icon: () => <Icon name="clock" size={20} color="#705c30" /> }]
  for (i = 2; i <= 24; i++) {
    let item = { label: `${i} hours`, value: i, icon: () => <Icon name="clock" size={20} color="#705c30" /> }
    hoursArray.push(item)
  }

  let radioProps = [
    { label: 'male', value: 0.7 },
    { label: 'female', value: 0.6 }
  ];

  const [weight, setWeight] = useState(null)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState(0.7)

  return (
    <DissmissKeyboard>
      <Container>
        <StatusBar style="auto" />
        <TextInput placeholder='weight' weight={weight} setWeight={setWeight} />
        <Dropdown items={bottlesArray} zIndex={6000} setValue={setBottles} placeholder={'Choose bottles'} />
        <Dropdown items={hoursArray} zIndex={5000} setValue={setHours} placeholder={'Choose hours'} />
        <Radio setGender={setGender} radioProps={radioProps} />
        <Button weight={weight} bottles={bottles} hours={hours} gender={gender} />
      </Container>
    </DissmissKeyboard>
  );
}
