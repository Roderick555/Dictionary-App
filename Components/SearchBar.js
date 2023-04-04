import { Keyboard, View, Text, TextInput, Pressable, StyleSheet, ScrollView} from "react-native";
import React, { useState, useEffect } from 'react';
import DisplayCard from "./DisplayCard";
import DisplayImage from "./DisplayImage";


const CompanyText = () => {
   return (
      <>
        <Text style={styles.intro}>If Word Doesn't Exist, There Will Be an Image For You.</Text>
        <Text style={styles.companyText}>Powered By Nest Code</Text>
      </>
   )   

}


const SearchBar = () => {
  const [term, setTerm] = useState('moon')
  const [hasFetch, setHasFetch] = useState(false)

    return (  

    <>  
      <Text style={styles.header}>Touch Bait 👇 Dictionary</Text>
      <View style={styles.view}>
            <TextInput placeholder="Type to search" style={styles.textInput} placeholderTextColor={'white'}
              onChangeText={text => {
                setTerm(text) 
                if (hasFetch) {
                   setHasFetch(false)
                   setTerm('moon')
                 }

                }}
                />
              <Pressable style={styles.pressable} 
                 onPress={() => { 
                    if(hasFetch === false) {
                        setHasFetch(true)
                        Keyboard.dismiss()
                    }
                    }}>
              <Text style={styles.buttonText}>Search</Text>
              </Pressable>
      </View>
            <ScrollView style={styles.scoller}>
                    { hasFetch ? <DisplayImage searchQuery={term}/> : <Text style={styles.intro}>Type In The Search Bar ☝ and Hit Search To Begin Your Journey🚀</Text>}
                    { hasFetch ? <DisplayCard terminology={term}/> :  <CompanyText/>}
            </ScrollView>
    </>  

    );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'  
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    marginTop: 10,
  
    padding: 10,
    marginHorizontal: 5,
    color: 'white',
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  intro: {
      fontWeight: 'bold',
      backgroundColor: 'black',
      color: 'white',
      padding: 15,
      marginHorizontal: 10,
      marginVertical: 10,
      borderRadius: 10
  },
  pressable: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 3,
    backgroundColor: 'black',
    borderRadius: 10,  
    backgroundColor: '#ff4954'  
  },
  buttonText: {
    fontSize: 15,
    paddingTop: 15,
    color: 'white',
  },
  scoller: {
    height: '100%',
    color: 'red',
  },
  companyText: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    opacity: 0.2,
  },
})
 
export default SearchBar;