import { StyleSheet, View, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList'

function SearchScreens() {
  const [searchApi, results,errorMessage] = useResult()
  const [term, setTerm] = useState('')
  // console.log(results)
  const filterResultByPrice = (price) => {

    return results.filter(result => {
      return result.price === price
    })

  }

  
  return (
    <View style={styles.dev}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length==0?<></>:  <ScrollView style={styles.scrool}>
        <ResultsList title={"Ucuz Restaurantlar"}
          results={filterResultByPrice('₺')}/>

        <ResultsList title={"Orta Kesim Restaurantlar"}
          results={filterResultByPrice('₺₺')} />

        <ResultsList title={"Lüks Restaurantlar"}
          results={filterResultByPrice('₺₺₺')} />



      </ScrollView>
      
      
      }


    
    </View>

  )
}

export default SearchScreens;
const styles = StyleSheet.create({
  dev: {

    width: '100%',
    height: '100%'
  }
,
}) 