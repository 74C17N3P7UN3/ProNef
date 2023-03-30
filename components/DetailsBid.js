import { Image, Text, View } from 'react-native'

import { EthPrice } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsBid = ({ bid }) => (
   <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,
   }}>
      <Image
         source={bid.image}
         resizeMode='contain'
         style={{ height: 48, width: 48 }}
      />

      <View>
         <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
         }}>
            Bid placed by {bid.name}
         </Text>
         <Text style={{
            marginTop: 3,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
         }}>
            {bid.date}
         </Text>
      </View>

      <EthPrice price={bid.price} />
   </View>
)

export default DetailsBid
