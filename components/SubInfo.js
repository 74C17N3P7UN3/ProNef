import { Image, Text, View } from 'react-native'

import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const EndDate = ({ date }) => (
   <View
      style={{
         alignItems: 'center',
         justifyContent: 'center',
         maxWidth: '50%',
         paddingHorizontal: SIZES.font,
         paddingVertical: SIZES.base,
         borderRadius: SIZES.font,
         backgroundColor: COLORS.white,
         ...SHADOWS.light,
         elevation: 1,
      }}
   >
      <Text
         style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary
         }}
      >
         Ending in:
      </Text>
      <Text
         style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary
         }}
      >
         {date}
      </Text>
   </View>
)

export const EthPrice = ({ price }) => (
   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
         source={assets.eth}
         resizeMode='contain'
         style={{ height: 20, width: 20, marginRight: 2 }}
      />
      <Text
         style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
         }}
      >{price}</Text>
   </View>
)

export const ImageCmp = ({ imgUrl, index }) => (
   <Image
      source={imgUrl}
      resizeMode='contain'
      style={{
         height: 48,
         width: 48,
         marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
   />
)

export const NftTitle = ({ title, titleSize, subTitle, subTitleSize }) => (
   <View>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
      <Text style={{ fontFamily: FONTS.regular, fontSize: subTitleSize, color: COLORS.primary }}>{subTitle}</Text>
   </View>
)

export const People = ({ list }) => (
   <View style={{ flexDirection: 'row' }}>
      {list.map((user, index) => (
         <ImageCmp imgUrl={user.image} index={index} key={`People-${index}`} />
      ))}
   </View>
)

export const SubInfo = ({ data }) => (
   <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
   }}>
      <People list={data.bids} />
      <EndDate date={data.ending} />
   </View>
)
