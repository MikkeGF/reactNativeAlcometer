import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
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



const radioProps = [
  { label: 'male', value: 0.7 },
  { label: 'female', value: 0.6 }
];

export default function App() {

  const [weight, setWeight] = useState(null)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState(0.7)

  // Dropdown items
  const [bottleArray, setBottleArray] = useState([{ label: '1 bottle', value: 1, icon: () => <Icon name="bottle-soda" size={20} color="#705c30" /> }])
  const [hourArray, setHourArray] = useState([{ label: '1 hour', value: 1, icon: () => <Icon name="clock" size={20} color="#705c30" /> }])

  const initDropdown = () => {
    let i;
    for (i = 2; i <= 24; i++) {
      bottleArray.push({ label: `${i} bottles`, value: i, icon: () => <Icon name="bottle-soda" size={20} color="#705c30" /> })
    }
    setBottleArray(bottleArray)

    hoursArr = []
    for (i = 2; i <= 24; i++) {
      hourArray.push({ label: `${i} hours`, value: i, icon: () => <Icon name="clock" size={20} color="#705c30" /> })
    }
    setHourArray(hourArray)
  }

  useEffect(() => {
    initDropdown();
  }, [])


  return (
    <DissmissKeyboard>
      <Container>
        <StatusBar style="auto" />
        <TextInput placeholder='Insert weight' weight={weight} setWeight={setWeight} />
        <Dropdown items={bottleArray} zIndex={6000} setValue={setBottles} placeholder={'Choose bottles'} />
        <Dropdown items={hourArray} zIndex={5000} setValue={setHours} placeholder={'Choose hours'} />
        <Radio setGender={setGender} radioProps={radioProps} />
        <Button weight={weight} bottles={bottles} hours={hours} gender={gender} />
      </Container>
    </DissmissKeyboard>
  );
}
