import { Image, Text, TextInput, View } from 'react-native'

import { assets, COLORS, FONTS, SIZES } from '../constants'

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

export default HomeHeader
