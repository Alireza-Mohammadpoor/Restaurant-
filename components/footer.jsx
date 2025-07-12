// // import styles from './footer.module.css';
// import styles from '@/styles/footer.module.css'
// // import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'


// export default function Footer() {
//   return (
// 	<div>
// 		<hr /> 
// 		<footer className={styles.footer}>
		
//       <div className={styles.overlay} />

//       <div className={styles.content}>
//         <div className={styles.column}>
//           <h3>درباره ما</h3>
//           <p>
//             رستوران ما تلفیقی از طعم‌های اصیل و فضای دلنشین است. با استفاده از مواد اولیه تازه و تیمی مجرب، لحظاتی خوش برای شما رقم می‌زنیم.
//           </p>
//         </div>

//         <div className={styles.column}>
//           <h3>ارتباط با ما</h3>
// 				<ul>
// 				<li>
// 					<FontAwesomeIcon icon={faPhoneAlt} /> ۰۲۱-۱۲۳۴۵۶۷۸
// 				</li>
// 				<li>
// 					<FontAwesomeIcon icon={faMapMarkerAlt} /> تهران، خیابان ولیعصر، پلاک ۵۵
// 				</li>
// 				<li>
// 					<FontAwesomeIcon icon={faInstagram} /> @resto_iran
// 				</li>
// 				</ul>

//         </div>

//         <div className={styles.column}>
//           <h3>ساعات کاری</h3>
//           <p>هر روز هفته<br />۱۲ ظهر تا ۱۲ شب</p>
//         </div>
//       </div>

//       <div className={styles.bottom}>
//         © {new Date().getFullYear()} تمامی حقوق محفوظ است.
//       </div>
//     </footer>
// 	</div>
    
//   );
// }







'use client'

import styles from '@/styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
      <hr />
      <footer className={styles.footer}>
        <div className={styles.overlay} />

        <div className={styles.content}>
          <div className={`${styles.column} ${styles.about}`}>
            <h3>درباره ما</h3>
            <p>
              رستوران ما تلفیقی از طعم‌های اصیل و فضای دلنشین است. با استفاده از مواد اولیه تازه و تیمی مجرب، لحظاتی خوش برای شما رقم می‌زنیم.
            </p>
          </div>

          <div className={`${styles.column} ${styles.contact}`}>
            <h3>ارتباط با ما</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} /> ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> تهران، خیابان ولیعصر، پلاک ۵۵
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} /> @resto_iran
              </li>
            </ul>
          </div>

          <div className={`${styles.column} ${styles.hours}`}>
            <h3>ساعات کاری</h3>
            <p>هر روز هفته<br />۱۲ ظهر تا ۱۲ شب</p>
          </div>
        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} تمامی حقوق محفوظ است.
          <br />
          <span className={styles.creator}>
				طراحی و پیاده‌سازی شده توسط <strong className={styles.gradientText}>Mystery Dev <FontAwesomeIcon icon={faStar} /></strong>
				</span>

        </div>
      </footer>
    </div>
  )
}
