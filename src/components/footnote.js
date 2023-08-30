import React from "react";
import * as styles from "./index.module.css"

function Footnote(){
    return(
        <>
            <div className={styles.footer__container__text}>
                <div className={styles.footer__text}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="44" viewBox="0 0 49 44" fill="none">
                        <path d="M24.302 0C18.4299 0 13.6699 4.75999 13.6699 10.6321C13.6699 15.3795 20.6187 24.032 23.281 27.1727C23.8202 27.8089 24.7847 27.8089 25.323 27.1727C27.9853 24.032 34.9341 15.3795 34.9341 10.6321C34.9341 4.75999 30.1741 0 24.302 0ZM24.302 14.1762C22.3443 14.1762 20.758 12.5898 20.758 10.6321C20.758 8.67446 22.3443 7.08808 24.302 7.08808C26.2597 7.08808 27.846 8.67446 27.846 10.6321C27.846 12.5898 26.2597 14.1762 24.302 14.1762ZM1.69776 18.2223C1.19669 18.4227 0.767142 18.7686 0.464531 19.2155C0.161919 19.6623 0.000120009 20.1896 0 20.7293L0 41.8518C0 42.807 0.964486 43.4601 1.85134 43.1057L13.5011 37.8031V18.1354C12.7552 16.7869 12.1451 15.474 11.708 14.2184L1.69776 18.2223ZM24.302 30.3497C23.1147 30.3497 21.9916 29.8282 21.2212 28.9185C19.5623 26.9609 17.7978 24.7315 16.2013 22.4448V37.8023L32.4027 43.2027V22.4456C30.8062 24.7315 29.0426 26.9617 27.3828 28.9194C26.6124 29.8282 25.4893 30.3497 24.302 30.3497ZM46.7527 13.599L35.1029 18.9016V43.2036L46.9062 38.4824C47.4074 38.2821 47.837 37.9361 48.1396 37.4893C48.4422 37.0424 48.604 36.5151 48.604 35.9754V14.8529C48.604 13.8977 47.6395 13.2446 46.7527 13.599Z" fill="#AC5100"/>
                    </svg>
                    <p style={{width:'15rem'}}>161 Midland Ave, Kearny, NJ 07032, USA</p>
                </div>
                <div className={styles.footer__text}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                        <path d="M22.5431 11.9616C16.1475 11.9616 10.9887 17.1204 10.9887 23.516C10.9887 29.9116 16.1475 35.0704 22.5431 35.0704C28.9388 35.0704 34.0975 29.9116 34.0975 23.516C34.0975 17.1204 28.9388 11.9616 22.5431 11.9616ZM22.5431 31.0279C18.4101 31.0279 15.0313 27.6591 15.0313 23.516C15.0313 19.3729 18.4001 16.0041 22.5431 16.0041C26.6862 16.0041 30.055 19.3729 30.055 23.516C30.055 27.6591 26.6762 31.0279 22.5431 31.0279ZM37.2652 11.489C37.2652 12.9873 36.0585 14.184 34.5702 14.184C33.0718 14.184 31.8752 12.9773 31.8752 11.489C31.8752 10.0007 33.0819 8.79394 34.5702 8.79394C36.0585 8.79394 37.2652 10.0007 37.2652 11.489ZM44.9179 14.2242C44.7469 10.6141 43.9223 7.41627 41.2776 4.78158C38.6429 2.1469 35.4451 1.3223 31.8349 1.14129C28.1142 0.930116 16.962 0.930116 13.2413 1.14129C9.64124 1.31225 6.44341 2.13684 3.79867 4.77153C1.15393 7.40621 0.339392 10.604 0.158383 14.2142C-0.0527942 17.9349 -0.0527942 29.087 0.158383 32.8078C0.329336 36.4179 1.15393 39.6157 3.79867 42.2504C6.44341 44.8851 9.63118 45.7097 13.2413 45.8907C16.962 46.1019 28.1142 46.1019 31.8349 45.8907C35.4451 45.7197 38.6429 44.8952 41.2776 42.2504C43.9122 39.6157 44.7368 36.4179 44.9179 32.8078C45.129 29.087 45.129 17.9449 44.9179 14.2242ZM40.1111 36.8C39.3267 38.771 37.8082 40.2895 35.8272 41.0839C32.8606 42.2605 25.8214 41.989 22.5431 41.989C19.2649 41.989 12.2156 42.2504 9.2591 41.0839C7.28812 40.2995 5.76966 38.7811 4.97523 36.8C3.79867 33.8335 4.07019 26.7943 4.07019 23.516C4.07019 20.2377 3.80873 13.1884 4.97523 10.232C5.7596 8.26097 7.27806 6.74251 9.2591 5.94808C12.2256 4.77153 19.2649 5.04304 22.5431 5.04304C25.8214 5.04304 32.8707 4.78158 35.8272 5.94808C37.7982 6.73245 39.3166 8.25092 40.1111 10.232C41.2876 13.1985 41.0161 20.2377 41.0161 23.516C41.0161 26.7943 41.2876 33.8436 40.1111 36.8Z" fill="#AC5100"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path d="M41.1705 0H5.75342C4.47254 0 3.24411 0.508831 2.33838 1.41456C1.43266 2.32028 0.923828 3.54871 0.923828 4.8296L0.923828 40.2466C0.923828 41.5275 1.43266 42.756 2.33838 43.6617C3.24411 44.5674 4.47254 45.0762 5.75342 45.0762H19.5631V29.7513H13.2242V22.5381H19.5631V17.0404C19.5631 10.7871 23.2859 7.33294 28.9878 7.33294C31.7185 7.33294 34.574 7.81992 34.574 7.81992V13.9575H31.4278C28.3278 13.9575 27.3608 15.8813 27.3608 17.8544V22.5381H34.2812L33.1745 29.7513H27.3608V45.0762H41.1705C42.4514 45.0762 43.6798 44.5674 44.5855 43.6617C45.4912 42.756 46.0001 41.5275 46.0001 40.2466V4.8296C46.0001 3.54871 45.4912 2.32028 44.5855 1.41456C43.6798 0.508831 42.4514 0 41.1705 0Z" fill="#AC5100"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="37" viewBox="0 0 49 37" fill="none">
                        <path d="M48.0717 12.1352C48.4449 11.8385 49 12.116 49 12.585V32.1562C49 34.6924 46.9424 36.75 44.4062 36.75H4.59375C2.05762 36.75 0 34.6924 0 32.1562V12.5945C0 12.116 0.545508 11.848 0.92832 12.1447C3.07207 13.81 5.91445 15.925 15.6762 23.0166C17.6955 24.4904 21.1025 27.5912 24.5 27.5721C27.9166 27.6008 31.3906 24.433 33.3334 23.0166C43.0951 15.925 45.9279 13.8004 48.0717 12.1352ZM24.5 24.5C26.7203 24.5383 29.9168 21.7055 31.5246 20.5379C44.2244 11.3217 45.191 10.5178 48.1195 8.2209C48.6746 7.79023 49 7.12031 49 6.41211V4.59375C49 2.05762 46.9424 0 44.4062 0H4.59375C2.05762 0 0 2.05762 0 4.59375V6.41211C0 7.12031 0.325391 7.78066 0.880469 8.2209C3.80898 10.5082 4.77559 11.3217 17.4754 20.5379C19.0832 21.7055 22.2797 24.5383 24.5 24.5Z" fill="#AC5100"/>
                    </svg>
                </div>
                <div className={styles.footer__text}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <path d="M42.02 2.09591L33.1631 0.0520183C32.2008 -0.169404 31.2129 0.333054 30.8211 1.23577L26.7333 10.774C26.3757 11.6085 26.6141 12.5879 27.321 13.1585L32.4818 17.3826C29.416 23.9145 24.0592 29.3479 17.391 32.4733L13.167 27.3125C12.5879 26.6056 11.617 26.3672 10.7824 26.7249L1.24426 30.8126C0.33302 31.2129 -0.169438 32.2008 0.0519844 33.1631L2.09588 42.02C2.30879 42.9398 3.12634 43.604 4.08868 43.604C25.8988 43.604 43.604 25.9328 43.604 4.08871C43.604 3.13489 42.9482 2.30882 42.02 2.09591Z" fill="#AC5100"/>
                    </svg>
                    <p>Phone: +1 201 458 2225 </p>
                </div>
            </div>
            <p >copyright © 2020 all rights reserved</p>
        </>
    )
}
export default Footnote;