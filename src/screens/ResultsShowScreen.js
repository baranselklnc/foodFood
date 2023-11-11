import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import yelp from '../api/yelp.js'
import Icon from 'react-native-vector-icons/FontAwesome5';



//delivery-dining

export default function ResultsShowScreen({ route }) {
    // const icon = <FontAwesome5 name={'comments'} />;

    const [result, setResult] = useState(null)
    const id = route.params.id;


    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id);
    }, [])
    if (!result) {
        return null
    }
    return (
        <View>
            <Text style={styles.productName}>{result.name}</Text>
            <Text style={styles.productPhone}>{result.phone}</Text>
           <View style={styles.icons}>
           {
                result.is_closed ? <Icon name="door-closed" size={25} color="#469624" /> :<Icon name="door-open" size={25} color="#469624" /> 

            }
           
           </View>


            <FlatList data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={styles.productImage} source={{ uri: item }} />
                }} />





        </View>
    )
}

const styles = StyleSheet.create({

    productImage: {
        height: 180,
        margin: 10,
        borderRadius: 10,
    },
    productPhone: {
        alignSelf: 'center',
        fontSize:18,


    },
    productName: {
        color: 'black',
        fontSize:25,
        alignSelf: 'center',
        marginVertical:10
    },
    
    icons:{
        marginTop: 10,
        alignSelf: 'center',


    }

})