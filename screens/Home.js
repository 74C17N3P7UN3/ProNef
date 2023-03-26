import { useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'

import { COLORS, NFT_DATA } from '../constants'
import {
   FocusedStatusBar,
   HomeHeader,
   NftCard
} from '../components'

const Home = () => (
   <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
         <View style={{ zIndex: 0 }}>
            <FlatList
               data={NFT_DATA}
               renderItem={({ item }) => <NftCard data={item} />}
               keyExtractor={(item) => item.id}
               showsVerticalScrollIndicator={false}
               ListHeaderComponent={<HomeHeader />}
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

export default Home
