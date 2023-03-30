import { useState } from 'react'
import { Text, View } from 'react-native'

import { EthPrice, NftTitle } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDesc = ({ data }) => {
   const [text, setText] = useState(data.description.slice(0, 100))
   const [readMore, setReadMore] = useState(false)

   return (
      <>
         <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
         }}>
            <NftTitle
               title={data.name}
               subTitle={data.creator}
               titleSize={SIZES.extraLarge}
               subTitleSize={SIZES.font}
            />

            <EthPrice price={data.price} />
         </View>

         <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
            <Text style={{
               fontFamily: FONTS.semiBold,
               fontSize: SIZES.font,
               color: COLORS.primary,
            }}>
               Description
            </Text>
            <View style={{ marginTop: SIZES.base }}>
               <Text style={{
                  lineHeight: SIZES.large,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                  color: COLORS.secondary,
               }}>
                  {text}
                  {!readMore && '...'}

                  <Text
                     style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.small,
                        color: COLORS.primary,
                     }}
                     onPress={() => {
                        if (!readMore) {
                           setText(data.description)
                           setReadMore(true)
                        } else {
                           setText(data.description.slice(0, 100))
                           setReadMore(false)
                        }
                     }}
                  >
                     {readMore ? ' Show Less' : ' Read More'}
                  </Text>
               </Text>
            </View>
         </View>
      </>
   )
}

export default DetailsDesc
