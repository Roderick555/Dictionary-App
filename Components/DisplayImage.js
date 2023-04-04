import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { REACT_APP_ACCESS_KEY } from "@env"


const DisplayImage = ({ searchQuery }) => {
    
    const [image, setImage] = useState(searchQuery)
    const [stopAnimating, setStopAnimating] = useState(true)
    const Access_Key = REACT_APP_ACCESS_KEY
    

    const controller = new AbortController()

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${Access_Key}`)
           .then(res => res.json())
           .then(data => {setImage(`${data.results[0].urls.full}.png`); setStopAnimating(false)})
           .catch(err => console.log(err))
       return controller.abort()
    }, [])

    return (  
       <View>
           <ActivityIndicator size='large' color='#00ff00' animating={stopAnimating}/>
           <Image source={{uri: image}} style={styles.image} />
       </View>
    )
}
 

const styles = StyleSheet.create({
    image: {
        width: '97%', 
        height: 200,
        marginHorizontal: 5, 
        borderRadius: 10, 
        flexDirection: 'row',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    }
})


export default DisplayImage;
