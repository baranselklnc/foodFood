import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'

export default function ResultsList({ title, results }) {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <ResultDetail result={item} /> 
                        </TouchableOpacity>
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        marginBottom:10,
        // width:1500
     
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom:5
    },

})