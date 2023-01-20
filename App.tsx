import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Form, FormItem } from "react-native-form-component";




export default function App() {

  const [email, setEmail] = useState('')

    const handleButtonPress = () => {
        console.log("someone pressed a button")
        setEmail("")
    }


  return (
  <View className="flex-1 items-center justify-center bg-white">
  <Text className="border" >OUR APP</Text>
  <Text> You can write more things here</Text>
      <StatusBar style="auto" />


      <View>
        <Text> Search for something: </Text>
        <Form onButtonPress={handleButtonPress}>
            <FormItem className="border"
            label='email'
            isRequired
            value={email}
            onChangeText={(text) => setEmail(text) }
            textArea
            />
        </Form>
        </View>



    </View>
  );
}




