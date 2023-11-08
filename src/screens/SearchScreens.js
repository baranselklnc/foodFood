import { StyleSheet, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList'

function SearchScreens() {
  const [searchApi, results] = useResult()
  console.log(results)
  const filterResultByPrice = (price) => {

    return results.filter(result => {
      return result.price === price
    })

  }
  return (
    <View>
      <SearchBar />
      <ResultsList title={"Gariban Restoranlar"}
        results={filterResultByPrice('₺')} />

      <ResultsList title={"Orta Kesim Restoranlar"}
        results={filterResultByPrice('₺₺')} />

      <ResultsList title={"Lüks Restoranlar"}
        results={filterResultByPrice('₺₺₺')} />

    </View>
  )
}

export default SearchScreens;
const styles = StyleSheet.create({}) 