import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ searchTerm, phonetics, partOfSpeech, definition, definition2, example, synonyms, antonyms }) => {

    return ( 
        <View style={styles.container}>
            <Text style={styles.header}> { searchTerm } </Text>
                <View style={styles.secondary}>
                    <Text style={styles.phonetics}> { phonetics } </Text>
                    <Text style={styles.wordPartOfSpeech}> { partOfSpeech } </Text>
                    <Text style={styles.wordDefinition}> 1: { definition } </Text>
                    <Text style={styles.wordDefinition}> 2: { definition2 }</Text>
                    <Text style={styles.wordExample}>Example: { example } </Text>
                    <Text style={styles.wordSynonym}> { `Synonyms: ${ synonyms }` } </Text>
                </View>
        </View>    
     );
}


    const styles = StyleSheet.create({
        view: {
            flex: 1,     
            marginBottom: 20,
         },
         container: {
            width: '100%',
            height: '80%',
            backgroundColor: '#ff4952',
            padding: 10,
            borderRadius: 10,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
         },
         header: {
           color: '#000',
           fontSize: 30,
           textTransform: 'capitalize'
         },
         phonetics: {
          fontSize: 20,
         },
         wordPartOfSpeech: {
          fontSize: 25,
          color: 'white',
         },
         wordDefinition: {
           fontSize: 18,
         }, 
         wordExample: {
           fontSize: 15,
         },
         wordSynonym: {
          fontSize: 12,
          color: '#fff'
         },

    })



 
export default Card;