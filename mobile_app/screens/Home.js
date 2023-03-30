import { useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TextInput, View } from 'react-native'

import { assets, COLORS, FONTS, NFT_DATA, SIZES } from '../constants'
import { FocusedStatusBar, NftCard } from '../components'

const HomeHeader = ({ onSearch }) => (
   <View style={{
      padding: SIZES.font,
      backgroundColor: COLORS.primary,
   }}>
      <View style={{
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
      }}>
         <Image
            source={assets.logo}
            resizeMode='contain'
            style={{ height: 25, width: 90 }}
         />

         <View style={{ height: 45, width: 45 }}>
            <Image
               source={assets.person01}
               resizeMode='contain'
               style={{ height: '100%', width: '100%' }}
            />
            <Image
               source={assets.badge}
               resizeMode='contain'
               style={{ position: 'absolute', bottom: -5, right: -5, height: 25, width: 25 }}
            />
         </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
         <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
         }}>
            Hello, Victoria 👋
         </Text>
         <Text style={{
            marginTop: SIZES.base / 2,
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
         }}>
            Let's find a masterpiece
         </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
         <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
         }}>
            <Image
               source={assets.search}
               resizeMode='contain'
               style={{
                  height: 20,
                  width: 20,
                  marginRight: SIZES.base,
               }}
            />

            <TextInput
               placeholder='Search NFTs'
               style={{ flex: 1 }}
               onChangeText={onSearch}
            />
         </View>
      </View>
   </View>
)

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
