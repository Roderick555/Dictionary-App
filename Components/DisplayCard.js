import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Linking, Alert, Pressable } from 'react-native';
import Card from './Card';


const NoDisplay = ({ word }) => {

     const link = `https://www.google.com/search?q=${word}`
  
     const handlePress = useCallback( async () => {
       
        const isAccessable = await Linking.canOpenURL(link)

        if(isAccessable) {
           await Linking.openURL(link)
        } else {
           Alert.alert('Link Could Not Be Opened!')
        }

     }, [])

    return (
        <>
           <Text style={styles.failText}> Here's An Image For You ☝</Text>
           <Text style={styles.failText}>No Definition!</Text>
           <Pressable onPress={ handlePress } ><Text style={styles.linkText}>Click To Search Google</Text></Pressable>
        </>
    )
}



const DisplayCard = ({ terminology }) => {

   const [keyword, setKeyword] = useState(terminology)
   const [searchTerm, setSearchTerm] = useState([])
   const [phonetics, setPhonetics] = useState([])
   const [partOfSpeech, setPartOfSpeech] = useState([])
   const [definition, setDefinition] = useState([])
   const [definition2, setDefinition2] = useState([])
   const [example, setExample] = useState([])
   const [synonyms, setSynonym] = useState('')
   const [success, setSuccess] = useState(false)

   const controller = new AbortController()
   
   useEffect(() => {
             
    const getData = async () => {

      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
        const data = await response.json()
        
        setSearchTerm(data[0].word)
        setPhonetics(data[0].phonetics[0].text)
        setPartOfSpeech(data[0].meanings[0].partOfSpeech)
        setDefinition(data[0].meanings[0].definitions[0].definition)
        setDefinition2(data[0].meanings[1].definitions[1].definition)
        setExample(data[0].meanings[1].definitions[0].example)
        setSynonym(data[0].meanings[0].synonyms)//map array   
         
        if (data === undefined) {
           setSuccess(false)
        }
        setSuccess(true)
      } catch(err) {
         console.log('Err ' + err)
      }
   } 
    
   getData()
   return controller.abort()
      
  },[keyword])

      
    return ( 
        <View style={styles.parent}>           
           { success ? <Card searchTerm={searchTerm} phonetics={phonetics} partOfSpeech={partOfSpeech} definition={definition} definition2={definition2} example={example} synonyms={synonyms} /> : <NoDisplay word={keyword}/> }
        </View>
     );
}
 

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 6,
    marginBottom: 130
  },
  failText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'black',
  },
  linkText: {
    color: 'white',
    padding: 20,
    fontSize: 15,
    backgroundColor: 'darkred',
    textDecorationStyle: 'solid',
    textDecorationColor: 'white',
  },

})

export default DisplayCard;