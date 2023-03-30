import { FlatList, Image, SafeAreaView, StatusBar, Text, View } from 'react-native'

import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'
import {
   CircleButton,
   DetailsBid,
   DetailsDesc,
   FocusedStatusBar,
   RectButton,
   SubInfo
} from '../components'

const DetailsHeader = ({ data, navigation }) => (
   <View style={{ height: 373, width: '100%' }}>
      <Image
         source={data.image}
         resizeMode='cover'
         style={{ height: '100%', width: '100%' }}
      />

      <CircleButton
         imgUrl={assets.left}
         handlePress={() => navigation.goBack()}
         top={StatusBar.currentHeight + 10}
         left={15}
      />
      <CircleButton
         imgUrl={assets.heart}
         top={StatusBar.currentHeight + 10}
         right={15}
      />
   </View>
)

const Details = ({ route, navigation }) => {
   const { data } = route.params

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <FocusedStatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            transLucent={true}
         />

         <View style={{
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            paddingVertical: SIZES.font,
            backgroundColor: '#FFFFFF80',
         }}>
            <RectButton
               minWidth={170}
               fontSize={SIZES.large}
               {...SHADOWS.dark}
            />
         </View>

         <FlatList
            data={data.bids}
            renderItem={({ item }) => <DetailsBid bid={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
            ListHeaderComponent={
               <>
                  <DetailsHeader data={data} navigation={navigation} />
                  <SubInfo data={data} />

                  <View style={{ padding: SIZES.font }}>
                     <DetailsDesc data={data} />

                     {data.bids.length > 0 && (
                        <Text style={{
                           fontFamily: FONTS.semiBold,
                           fontSize: SIZES.font,
                           color: COLORS.primary,
                        }}>
                           Current Bids
                        </Text>
                     )}
                  </View>
               </>
            }
         />
      </SafeAreaView>
   )
}

export default Details
