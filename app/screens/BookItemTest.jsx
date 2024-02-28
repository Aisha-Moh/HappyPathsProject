import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function BookItemTest({item, removeFav}) {
    const [readMore, setReadMore] = useState(false)

    console.log(item)
  return (
    <View style={styles.container}>
        <View key={item.id} style={styles.bookContainer}>
      <Image source={{ uri: item.image }} style={styles.bookImage} />
       <Text style={styles.bookText}>Title: {item.bookTitle}</Text>
        <Text style={styles.bookText}>Author: {item.bookAuthor}</Text>
        <Text style={styles.bookText}>Condition: {item.bookCondition}</Text>
        <Text style={styles.bookText}>Rating: {item.bookRating}</Text>


        {readMore ? 
          <Text style={styles.bookText}>Preview: {item.bookPreview} <Text onPress={() => setReadMore(!readMore)} style={{color: 'blue'}}>show less...</Text></Text>
        : 
        <Text style={styles.bookText}>Preview: {item.bookPreview.slice(0,100)}...<Text onPress={() => setReadMore(!readMore)} style={{color: 'blue'}}>show more...</Text></Text>
        }
        {/* <Text style={styles.bookText}>Preview: {item.bookPreview.slice(0,100)}...</Text> */}

       

         <AntDesign name="heart" size={24} color="red" onPress={() => removeFav(item.id)} /> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00592e",
    },
    bookContainer: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      padding: 20,
      marginVertical: 10,
      width: '90%', 
      alignSelf: 'center', 
      backgroundColor: 'green', 
      justifyContent: 'center',
      alignItems: 'center'
    },
    bookImage: { 
      width: 100, 
      height: 150,
      resizeMode: 'contain'
    },
    bookText: {
      textAlign: 'center',
      color: 'white',
      marginBottom: 10,
    },
    centered: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

