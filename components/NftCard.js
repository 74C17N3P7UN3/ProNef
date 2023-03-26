import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { assets, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton, RectButton } from './Button'
import { EthPrice, NftTitle, SubInfo } from './SubInfo'

const NftCard = ({ data }) => {
   const navigation = useNavigation()

   return (
      <View style={{
         margin: SIZES.base,
         marginBottom: SIZES.extraLarge,
         borderRadius: SIZES.font,
         backgroundColor: COLORS.white,
         ...SHADOWS.dark,
      }}>
         <View style={{ height: 250, width: '100%' }}>
            <Image
               source={data.image}
               resizeMode='cover'
               style={{
                  height: '100%',
                  width: '100%',
                  borderTopRightRadius: SIZES.font,
                  borderTopLeftRadius: SIZES.font,
               }}
            />

            <CircleButton imgUrl={assets.heart} top={10} right={10} />
         </View>

         <SubInfo data={data} />

         <View style={{ width: '100%', padding: SIZES.font }}>
            <NftTitle
               title={data.name}
               subTitle={data.creator}
               titleSize={SIZES.large}
               subTitleSize={SIZES.small}
            />

            <View
               style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: SIZES.font,
               }}
            >
               <EthPrice price={data.price} />
               <RectButton
                  minWidth={120}
                  fontSize={SIZES.font}
                  handlePress={() => navigation.navigate('Details', { data })}
               />
            </View>
         </View>
      </View>
   )
}

export default NftCard
