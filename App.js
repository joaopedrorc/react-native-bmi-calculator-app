import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput, Button } from 'react-native';

const App = () => {
  // BMI = Body Mass Index
  const [height, setHeight] = useState(0);
  const [weigth, setWeigth] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [subTitle, setSubTitle] = useState('Undefined');
  const [color, setColor] = useState('#E0DEDE');


  bmiMath = () => {
    const result = weigth / (height * height);
    const finalResult = Math.round(result)
    setBMI(finalResult)

    if( finalResult < 18.5 ) {
      setColor('#e74c3c')
      setSubTitle('Underweight')
    } else if(finalResult >= 18.5 && finalResult < 25 ) {
      setColor('#2ECC71')
      setSubTitle('In Shape')
    } else if( finalResult >= 25   &&  finalResult <= 30) {
      setColor('#F39C12')
      setSubTitle('Overweight')
    } else if( finalResult >= 30  &&  finalResult < 40) {
      setColor('#d35400')
      setSubTitle('Obesity')
    } else if(finalResult >= 40) {
      setColor('#C0392B')
      setSubTitle('High-Risk Obesity')

      alert("You'd better see a doctor")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your BMI:</Text>

      <View style={[styles.results, { backgroundColor: color} ]}>
        <Text style={styles.bmiIndex}>{bmi}</Text>
        <Text style={styles.bmiResult}>{subTitle}</Text>
      </View>

      <View>
        <TextInput
          style={styles.heightInput}
          placeholder='Heigth'
          onChangeText={value => { 
            setHeight(value);
          }}
        /> 

        <TextInput
          style={styles.weigthIput}
          placeholder= "Weigth"
          onChangeText={value => {
            setWeigth(value);
          }}


        />

        <View style={styles.button}>
          <Button 
            mode='contained'
            title='CALCULATE'
            color=  '#fff'
            accessibilityLabel='Press the button to calculate your BIM'
            onPress={bmiMath}
          >
          </Button>
        </ View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40,
  },
  results: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0DEDE',
    width: 280,
    height: 146,
    borderRadius: 8,
  },
  bmiIndex: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 42,
    color: '#fff',
  },
  bmiResult: {
    fontSize: 36,
    lineHeight: 44,
    color: '#fff',
    textAlign: 'center',
  },
  heightInput: {
    fontSize: 18,
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderBottomColor: '#000',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    height: 57,
    width: 307,
    marginTop: 50,
    padding: 15,
  },
  weigthIput: {
    fontSize: 18,
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5',
    borderBottomColor: '#000',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderWidth: 1,
    height: 57,
    width: 307,
    padding: 15,
    marginTop: 14,
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 307,
    height: 57,
    borderRadius: 8,
    backgroundColor: '#2C3E50',
    marginTop: 30,
  },
});

export default App;
