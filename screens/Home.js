import { useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'

import { COLORS, NFT_DATA } from '../constants'
import {
   FocusedStatusBar,
   HomeHeader,
   NftCard
} from '../components'

const Home = () => {
   const [nftData, setNftData] = useState(NFT_DATA)

   const handleSearch = (value) => {
      if (value.length == 0) return setNftData(NFT_DATA)

      const filteredData = nftData.filter((item) => (
         item.name.toLowerCase().includes(value.toLowerCase())
      ))

      filteredData.length > 0
         ? setNftData(filteredData)
         : setNftData(NFT_DATA)
   }

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <FocusedStatusBar backgroundColor={COLORS.primary} />

         <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
               <FlatList
                  data={nftData}
                  renderItem={({ item }) => <NftCard data={item} />}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
               />
            </View>

            <View style={{
               position: 'absolute',
               top: 0,
               right: 0,
               bottom: 0,
               left: 0,
               zIndex: -1,
            }}>
               <View style={{ height: 300, backgroundColor: COLORS.primary }} />
               <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
         </View>
      </SafeAreaView>
   )
}

export default Home
