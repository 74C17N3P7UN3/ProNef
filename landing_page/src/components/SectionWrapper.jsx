import Button from './Button'

import assets from '../assets'
import { styles } from '../styles'

const SectionWrapper = ({
   banner,
   description,
   mockupImg,
   reverse,
   showBtn,
   title,
}) => (
   <div className={`${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner} min-h-screen`}>
      <div className={`${reverse ? styles.boxReverseClass : styles.boxClass} flex items-center w-11/12 sm:w-full minmd:w-3/4`}>
         <div className={`${styles.descDiv} ${reverse ? 'fadeRightMini' : 'fadeLeftMini'} ${reverse ? styles.textRight : styles.textLeft}`}>
            <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>{title}</h1>
            <p className={`${styles.descriptionText} ${reverse ? styles.blackText : styles.whiteText}`}>{description}</p>
            {showBtn && (
               <Button
                  assetUrl={assets.expo}
                  link=''
               />
            )}
         </div>
         <div className={`${styles.flexCenter} flex-1 p-8 sm:px-0`}>
            <img src={mockupImg} alt='mockup' className={`${styles.sectionImg} ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}`} />
         </div>
      </div>
   </div>
)

export default SectionWrapper
