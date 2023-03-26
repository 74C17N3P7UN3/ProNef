import { Image, Text, TouchableOpacity } from 'react-native'

import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => (
   <TouchableOpacity
      style={{
         position: 'absolute',
         alignItems: 'center',
         justifyContent: 'center',
         height: 40,
         width: 40,
         borderRadius: SIZES.extraLarge,
         backgroundColor: COLORS.white,
         ...SHADOWS.light,
         ...props,
      }}
      onPress={handlePress}
   >
      <Image
         source={imgUrl}
         resizeMode='contain'
         style={{ height: 24, width: 24 }}
      />
   </TouchableOpacity>
)

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => (
   <TouchableOpacity
      style={{
         minWidth: minWidth,
         padding: SIZES.small,
         borderRadius: SIZES.extraLarge,
         backgroundColor: COLORS.primary,
         ...props,
      }}
      onPress={handlePress}
   >
      <Text
         style={{
            textAlign: 'center',
            fontFamily: FONTS.semiBold,
            fontSize: fontSize,
            color: COLORS.white,
         }}
      >
         Place a bid
      </Text>
   </TouchableOpacity>
)
