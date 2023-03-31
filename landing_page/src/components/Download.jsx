import assets from '../assets'
import { styles } from '../styles'

const Download = () => (
   <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
         <div>
            <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
            <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on GitHub</p>
         </div>
         <button onClick={() => window.open('https://github.com/74C17N3P7UN3/ProNef/tree/main/mobile_app', '_blank')} className={styles.btnPrimary}>Source Code</button>
         <div className={styles.flexCenter}>
            <img src={assets.scene} alt='download_png' className={styles.fullImg} />
         </div>
      </div>
   </div>
)

export default Download
