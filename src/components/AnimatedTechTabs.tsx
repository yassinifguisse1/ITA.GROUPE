"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Technology {
  name: string;
  icon?: React.ReactNode;
}

interface TechTab {
  id: string;
  label: string;
  badge: string;
  technologies: Technology[];
}

const KotlinIcon = () => (
  <svg width="100%" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M51.1453 0L0 53.7864V101.864L51.0723 50.7074L101.873 0H51.1453Z" fill="url(#paint0_linear_kotlin)" />
    <path d="M0 101.864L51.0723 50.7074L101.873 101.864H0Z" fill="url(#paint1_linear_kotlin)" />
    <path d="M0 0.00012207H51.1463L0 53.7864V0.00012207Z" fill="url(#paint2_linear_kotlin)" />
    <defs>
      <linearGradient id="paint0_linear_kotlin" x1="-11.5457" y1="88.0534" x2="70.1353" y2="6.3714" gradientUnits="userSpaceOnUse">
        <stop offset="0.10753" stopColor="#C757BC" />
        <stop offset="0.21383" stopColor="#D0609A" />
        <stop offset="0.42537" stopColor="#E1725C" />
        <stop offset="0.60485" stopColor="#EE7E2F" />
        <stop offset="0.74303" stopColor="#F58613" />
        <stop offset="0.82323" stopColor="#F88909" />
      </linearGradient>
      <linearGradient id="paint1_linear_kotlin" x1="35.9293" y1="116.834" x2="78.9593" y2="73.8004" gradientUnits="userSpaceOnUse">
        <stop offset="0.09677" stopColor="#0095D5" />
        <stop offset="0.30073" stopColor="#238AD9" />
        <stop offset="0.62106" stopColor="#557BDE" />
        <stop offset="0.86432" stopColor="#7472E2" />
        <stop offset="1" stopColor="#806EE3" />
      </linearGradient>
      <linearGradient id="paint2_linear_kotlin" x1="-4.67232" y1="31.5654" x2="32.9383" y2="-6.04518" gradientUnits="userSpaceOnUse">
        <stop offset="0.09677" stopColor="#0095D5" />
        <stop offset="0.30073" stopColor="#238AD9" />
        <stop offset="0.62106" stopColor="#557BDE" />
        <stop offset="0.86432" stopColor="#7472E2" />
        <stop offset="1" stopColor="#806EE3" />
      </linearGradient>
    </defs>
  </svg>
);

const AndroidSDKIcon = () => (
  <svg width="100%" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g clipPath="url(#clip0_android)">
      <path d="M19.642 10.4362L21.836 6.63623C21.8665 6.55924 21.8759 6.4755 21.8632 6.39367C21.8505 6.31184 21.8161 6.23489 21.7637 6.17076C21.7113 6.10664 21.6428 6.05767 21.5651 6.02892C21.4875 6.00017 21.4035 5.99268 21.322 6.00723C21.2128 6.0271 21.1145 6.08568 21.045 6.17223L18.823 10.0312C17.0481 9.23488 15.1248 8.82317 13.1795 8.82317C11.2342 8.82317 9.31086 9.23488 7.536 10.0312L5.314 6.18123C5.24399 6.09542 5.14561 6.03747 5.03661 6.01787C4.92762 5.99826 4.81521 6.01828 4.71969 6.07431C4.62417 6.13034 4.55184 6.21869 4.51577 6.3234C4.4797 6.4281 4.48226 6.54225 4.523 6.64523L6.717 10.4372C4.82205 11.4698 3.21509 12.9594 2.04205 14.7707C0.869017 16.582 0.167081 18.6577 0 20.8092H26.363C26.1952 18.6574 25.4925 16.5816 24.3187 14.7703C23.145 12.959 21.5375 11.4696 19.642 10.4372V10.4362ZM7.108 17.0532C6.89109 17.0525 6.67923 16.9877 6.49906 16.8669C6.31889 16.7461 6.17846 16.5747 6.09542 16.3743C6.01238 16.174 5.99043 15.9535 6.03235 15.7407C6.07427 15.5278 6.17817 15.3322 6.331 15.1782C6.45872 15.0507 6.6159 14.9566 6.78864 14.9043C6.96137 14.852 7.14434 14.8431 7.32134 14.8784C7.49834 14.9137 7.66392 14.992 7.80343 15.1065C7.94293 15.221 8.05206 15.3681 8.12115 15.5349C8.19025 15.7016 8.21718 15.8828 8.19956 16.0624C8.18194 16.242 8.12032 16.4145 8.02014 16.5647C7.91997 16.7148 7.78433 16.8379 7.62523 16.9231C7.46613 17.0083 7.28848 17.053 7.108 17.0532ZM19.245 17.0532C19.1007 17.0535 18.9578 17.0253 18.8245 16.9704C18.6911 16.9154 18.5698 16.8347 18.4677 16.7329C18.3655 16.6311 18.2843 16.5101 18.2289 16.377C18.1734 16.2438 18.1448 16.101 18.1445 15.9567C18.1442 15.8125 18.1724 15.6696 18.2273 15.5362C18.2823 15.4028 18.363 15.2816 18.4648 15.1794C18.5666 15.0772 18.6876 14.9961 18.8208 14.9406C18.9539 14.8852 19.0967 14.8565 19.241 14.8562C19.5323 14.8557 19.812 14.9709 20.0183 15.1766C20.2247 15.3822 20.341 15.6614 20.3415 15.9527C20.342 16.2441 20.2268 16.5237 20.0212 16.7301C19.8155 16.9365 19.5363 17.0527 19.245 17.0532Z" fill="#00DE7A" />
    </g>
    <defs>
      <clipPath id="clip0_android">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MVVMIcon = () => (
  <img
    src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6399f143ef55e9a98edb836a_MVVM-logo.png"
    loading="lazy"
    width="42"
    title="MVVM logo"
    alt="MVVM"
    className="w-full h-full object-contain"
  />
);

const Retrofit2Icon = () => (
  <svg width="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" d="M18 5C10.8203 5 5 10.8203 5 18V82C5 89.1797 10.8203 95 18 95H82C89.1797 95 95 89.1797 95 82V18C95 10.8203 89.1797 5 82 5H18ZM26 21C23.2386 21 21 23.2386 21 26V73C21 75.7614 23.2386 78 26 78H73C75.7614 78 78 75.7614 78 73V26C78 23.2386 75.7614 21 73 21H26Z" fill="white" />
    <rect x="38" y="38" width="23" height="23" rx="2" fill="white" />
  </svg>
);

const JavaIcon = () => (
  <svg width="100%" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.22544 17.0135C5.22544 17.0135 4.38521 17.5025 5.82409 17.6676C7.56752 17.8666 8.45841 17.838 10.3791 17.4749C10.3791 17.4749 10.8851 17.7914 11.5905 18.0656C7.28346 19.9109 1.84276 17.9586 5.22544 17.0135Z" fill="#0074BD" />
    <path fillRule="evenodd" clipRule="evenodd" d="M4.6992 14.6051C4.6992 14.6051 3.75667 15.3029 5.19662 15.4518C7.05915 15.644 8.52946 15.6598 11.0752 15.1699C11.0752 15.1699 11.4264 15.5267 11.9796 15.7217C6.77298 17.2447 0.973816 15.8415 4.6992 14.6051Z" fill="#0074BD" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.13526 10.519C10.1971 11.7413 8.85684 12.8403 8.85684 12.8403C8.85684 12.8403 11.5514 11.4496 10.3142 9.70714C9.15823 8.08299 8.27201 7.27619 13.0698 4.49377C13.0699 4.49377 5.53846 6.3743 9.13526 10.519Z" fill="#EA2D2E" />
    <path fillRule="evenodd" clipRule="evenodd" d="M14.8317 18.7952C14.8317 18.7952 15.4537 19.3079 14.1466 19.7045C11.6612 20.4573 3.7999 20.6844 1.61642 19.7346C0.83206 19.3929 2.30364 18.9194 2.76666 18.8194C3.24943 18.715 3.52508 18.7341 3.52508 18.7341C2.65215 18.1193 -2.11709 19.9413 1.10284 20.4639C9.88372 21.8872 17.1091 19.8228 14.8317 18.7952Z" fill="#0074BD" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.63034 12.1093C5.63034 12.1093 1.63213 13.0592 4.21453 13.4045C5.30524 13.5504 7.47826 13.5169 9.50386 13.3469C11.1588 13.208 12.8197 12.911 12.8197 12.911C12.8197 12.911 12.2365 13.1611 11.8144 13.4492C7.75342 14.5173 -0.0900902 14.0199 2.16829 12.9279C4.07733 12.0043 5.63034 12.1093 5.63034 12.1093Z" fill="#0074BD" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.8032 16.1183C16.931 13.9739 15.0222 11.9129 13.69 12.1905C13.3643 12.2585 13.2181 12.3174 13.2181 12.3174C13.2181 12.3174 13.3395 12.1273 13.5706 12.0455C16.2062 11.1193 18.2326 14.7779 12.7207 16.2268C12.7207 16.2268 12.7841 16.1694 12.8032 16.1183Z" fill="#0074BD" />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.3142 0C10.3142 0 12.5998 2.28685 8.14579 5.80238C4.57399 8.62354 7.3314 10.2315 8.14452 12.0696C6.0594 10.1885 4.53 8.53229 5.55584 6.99111C7.06227 4.72914 11.2362 3.63209 10.3142 0Z" fill="#EA2D2E" />
    <path fillRule="evenodd" clipRule="evenodd" d="M6.03592 21.931C9.99724 22.1843 16.082 21.7901 16.226 19.9155C16.226 19.9155 15.9492 20.6261 12.9519 21.19C9.57049 21.8266 5.39897 21.7524 2.92578 21.3441C2.92578 21.3441 3.43245 21.7634 6.03592 21.931Z" fill="#0074BD" />
  </svg>
);

const RxJavaIcon = () => (
  <img
    src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6399e0337b883955dbb39713_RxSwift-logo.png"
    loading="lazy"
    title="RxJava logo"
    alt="RxJava"
    className="w-full h-full object-contain"
  />
);

const HiltIcon = () => (
  <svg width="100%" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g clipPath="url(#clip0_3299_4155)">
      <path d="M19.642 10.4362L21.836 6.63623C21.8665 6.55924 21.8759 6.4755 21.8632 6.39367C21.8505 6.31184 21.8161 6.23489 21.7637 6.17076C21.7113 6.10664 21.6428 6.05767 21.5651 6.02892C21.4875 6.00017 21.4035 5.99268 21.322 6.00723C21.2128 6.0271 21.1145 6.08568 21.045 6.17223L18.823 10.0312C17.0481 9.23488 15.1248 8.82317 13.1795 8.82317C11.2342 8.82317 9.31086 9.23488 7.536 10.0312L5.314 6.18123C5.24399 6.09542 5.14561 6.03747 5.03661 6.01787C4.92762 5.99826 4.81521 6.01828 4.71969 6.07431C4.62417 6.13034 4.55184 6.21869 4.51577 6.3234C4.4797 6.4281 4.48226 6.54225 4.523 6.64523L6.717 10.4372C4.82205 11.4698 3.21509 12.9594 2.04205 14.7707C0.869017 16.582 0.167081 18.6577 0 20.8092H26.363C26.1952 18.6574 25.4925 16.5816 24.3187 14.7703C23.145 12.959 21.5375 11.4696 19.642 10.4372V10.4362ZM7.108 17.0532C6.89109 17.0525 6.67923 16.9877 6.49906 16.8669C6.31889 16.7461 6.17846 16.5747 6.09542 16.3743C6.01238 16.174 5.99043 15.9535 6.03235 15.7407C6.07427 15.5278 6.17817 15.3322 6.331 15.1782C6.45872 15.0507 6.6159 14.9566 6.78864 14.9043C6.96137 14.852 7.14434 14.8431 7.32134 14.8784C7.49834 14.9137 7.66392 14.992 7.80343 15.1065C7.94293 15.221 8.05206 15.3681 8.12115 15.5349C8.19025 15.7016 8.21718 15.8828 8.19956 16.0624C8.18194 16.242 8.12032 16.4145 8.02014 16.5647C7.91997 16.7148 7.78433 16.8379 7.62523 16.9231C7.46613 17.0083 7.28848 17.053 7.108 17.0532ZM19.245 17.0532C19.1007 17.0535 18.9578 17.0253 18.8245 16.9704C18.6911 16.9154 18.5698 16.8347 18.4677 16.7329C18.3655 16.6311 18.2843 16.5101 18.2289 16.377C18.1734 16.2438 18.1448 16.101 18.1445 15.9567C18.1442 15.8125 18.1724 15.6696 18.2273 15.5362C18.2823 15.4028 18.363 15.2816 18.4648 15.1794C18.5666 15.0772 18.6876 14.9961 18.8208 14.9406C18.9539 14.8852 19.0967 14.8565 19.241 14.8562C19.5323 14.8557 19.812 14.9709 20.0183 15.1766C20.2247 15.3822 20.341 15.6614 20.3415 15.9527C20.342 16.2441 20.2268 16.5237 20.0212 16.7301C19.8155 16.9365 19.5363 17.0527 19.245 17.0532Z" fill="#00DE7A" />
    </g>
    <defs>
      <clipPath id="clip0_3299_4155">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="100%" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M5.87699 1.31362C4.91593 2.3308 4.34766 3.91011 4.34766 5.95642V79.0435C4.34766 81.0914 4.91609 82.6691 5.87699 83.6863L6.12153 83.9245L47.0635 42.9829V42.5001V42.017L6.12153 1.07373L5.87699 1.31362Z" fill="url(#paint0_linear_3299_4106)" />
    <path d="M60.709 56.6361L47.0625 42.9829V42.5002V42.0171L60.7121 28.3674L61.0198 28.5429L77.189 37.7304C81.8077 40.3543 81.8077 44.6478 77.189 47.2733L61.0198 56.4608L60.709 56.6361Z" fill="url(#paint1_linear_3299_4106)" />
    <path d="M61.0209 56.4589L47.0634 42.5001L5.87695 83.6863C7.39981 85.298 9.91263 85.4975 12.7445 83.8891L61.0209 56.4589Z" fill="url(#paint2_linear_3299_4106)" />
    <path d="M61.0209 28.541L12.7445 1.11078C9.91263 -0.497577 7.39981 -0.298027 5.87695 1.31365L47.0634 42.5001L61.0209 28.541Z" fill="url(#paint3_linear_3299_4106)" />
    <defs>
      <linearGradient id="paint0_linear_3299_4106" x1="43.4328" y1="5.18582" x2="-12.0281" y2="60.6465" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A0FF" />
        <stop offset="0.0066" stopColor="#00A2FF" />
        <stop offset="0.2601" stopColor="#00BEFF" />
        <stop offset="0.5122" stopColor="#00D2FF" />
        <stop offset="0.7604" stopColor="#00DFFF" />
        <stop offset="1" stopColor="#00E3FF" />
      </linearGradient>
      <linearGradient id="paint1_linear_3299_4106" x1="83.2026" y1="42.5016" x2="3.23918" y2="42.5016" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE000" />
        <stop offset="0.4087" stopColor="#FFBD00" />
        <stop offset="0.7754" stopColor="#FFA600" />
        <stop offset="1" stopColor="#FF9C00" />
      </linearGradient>
      <linearGradient id="paint2_linear_3299_4106" x1="53.4367" y1="50.0848" x2="-21.7725" y2="125.294" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF3743" />
        <stop offset="1" stopColor="#E30864" />
      </linearGradient>
      <linearGradient id="paint3_linear_3299_4106" x1="-4.4934" y1="-23.0149" x2="29.0907" y2="10.5692" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A06F" />
        <stop offset="0.0685" stopColor="#00A86E" />
        <stop offset="0.4762" stopColor="#00CF6E" />
        <stop offset="0.8009" stopColor="#00E76D" />
        <stop offset="1" stopColor="#00EF6D" />
      </linearGradient>
    </defs>
  </svg>
);

const FirebaseIcon = () => (
  <svg width="100%" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M9.58984 45.2201L16.0898 3.70007C16.1391 3.39316 16.3075 3.11807 16.5584 2.93457C16.8093 2.75108 17.1224 2.674 17.4298 2.72007C17.6114 2.75337 17.7835 2.82616 17.9338 2.9333C18.0841 3.04044 18.2091 3.1793 18.2998 3.34007L25.0098 15.8701L27.6698 10.7701C27.7426 10.6301 27.8423 10.5059 27.9631 10.4045C28.084 10.3031 28.2236 10.2266 28.3741 10.1792C28.5246 10.1318 28.6829 10.1146 28.84 10.1285C28.9972 10.1423 29.15 10.1871 29.2898 10.2601C29.5018 10.3822 29.6777 10.5582 29.7998 10.7701L47.8998 45.2201H9.58984Z" fill="#FFA000" />
    <path opacity="0.12" d="M31.76 3.00004L0 0.290039V57.81L9.59 45.22L31.76 3.00004Z" fill="url(#paint0_linear_firebase)" />
    <path d="M32.0298 29.0501L25.0298 15.8401L9.58984 45.2201L32.0298 29.0501Z" fill="#F57C00" />
    <path opacity="0.2" d="M0 0.290039H57.52V57.81H0V0.290039Z" fill="url(#paint1_linear_firebase)" />
    <path d="M47.9398 45.2201L42.9398 14.4601C42.8882 14.145 42.7142 13.8632 42.4558 13.6759C42.1973 13.4886 41.8753 13.411 41.5598 13.4601C41.3127 13.4952 41.0841 13.6113 40.9098 13.7901L9.58984 45.2201L26.9398 55.0001C27.4747 55.2933 28.0749 55.447 28.6848 55.447C29.2948 55.447 29.895 55.2933 30.4298 55.0001L47.9398 45.2201Z" fill="#FFCA28" />
    <defs>
      <linearGradient id="paint0_linear_firebase" x1="17.06" y1="31.01" x2="14.67" y2="29.76" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A52714" />
        <stop offset="0.4" stopColor="#A52714" stopOpacity="0.5" />
        <stop offset="0.8" stopColor="#A52714" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_firebase" x1="27.24" y1="27.52" x2="26.17" y2="26.45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A52714" stopOpacity="0.8" />
        <stop offset="0.5" stopColor="#A52714" stopOpacity="0.21" />
        <stop offset="1" stopColor="#A52714" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const RealmIcon = () => (
  <svg width="100%" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.6505 1.29838C16.2626 0.130002 13.5885 -0.262559 10.9806 0.172442C8.37267 0.60744 5.95342 1.84959 4.04173 3.73514C1.54817 6.22526 23.0615 3.46834 18.6505 1.29838Z" fill="#FCC397" />
    <path fillRule="evenodd" clipRule="evenodd" d="M23.2168 5.06917C23.2168 5.06917 22.185 6.58103 18.9176 7.0079C12.3655 7.89723 1.12735 7.95059 1.14455 7.89723C1.84571 6.33189 2.82919 4.91928 4.04223 3.73518C5.46579 4.1963 6.97562 4.29695 8.44464 4.02866C10.8522 3.55731 12.9846 2.13439 15.3664 1.54743C16.4425 1.29109 17.5503 1.20711 18.651 1.29842C20.4271 2.18522 21.9876 3.47396 23.2168 5.06917Z" fill="#FC9F95" />
    <path fillRule="evenodd" clipRule="evenodd" d="M25.9406 11.3834C25.9406 11.4368 11.1771 12.8775 3.98016 12.4595C2.57544 12.4229 1.24111 11.8159 0.265625 10.7698C0.459678 9.7855 0.762617 8.82767 1.16846 7.91506C3.27507 6.71354 5.64154 6.08328 8.04722 6.08305C11.0223 6.08305 13.9372 7.14135 16.9208 7.06131C19.1516 6.9805 21.3224 6.29342 23.2149 5.06921C24.6443 6.88957 25.5844 9.06749 25.9406 11.3834Z" fill="#F77C88" />
    <path fillRule="evenodd" clipRule="evenodd" d="M26.1049 13.5V13.7223C23.024 14.4367 19.8725 14.774 16.7154 14.7272C11.1252 14.572 5.54628 14.1238 0 13.3844C0.00939608 12.5061 0.0986398 11.6307 0.266552 10.7697C2.06416 11.9243 4.17963 12.4338 6.28547 12.2193C7.92616 11.9653 9.52223 11.465 11.0232 10.7342C12.5225 10.0066 14.0787 9.41161 15.675 8.95551C17.4603 8.52588 19.3167 8.52117 21.1041 8.94174C22.8915 9.36231 24.5632 10.1972 25.9931 11.3834C26.0868 12.0845 26.1242 12.7925 26.1049 13.5Z" fill="#F25192" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.2984 17.8844C7.38609 18.6759 0.662102 17.7865 0.644905 17.7154C0.2152 16.3545 -0.00248079 14.9316 2.13267e-05 13.5V13.3844C0.609715 12.8902 1.27002 12.4667 1.96907 12.1215C3.65861 11.2823 5.53725 10.9349 7.40329 11.1166C9.23113 11.3885 11.0084 11.9463 12.6741 12.7707C14.0759 13.4416 15.511 14.0353 16.9734 14.5494C17.1969 14.6116 15.6148 17.0573 11.2984 17.8844Z" fill="#D34CA3" />
    <path fillRule="evenodd" clipRule="evenodd" d="M25.6321 17.1017C25.357 17.582 22.7603 19.1917 19.2349 19.4674C14.5659 19.832 9.05432 18.3735 10.8858 17.6353C13.7577 16.4614 16.2598 14.3626 19.2349 13.4822C21.4977 12.8338 23.8982 12.9176 26.1137 13.7223C26.0954 14.8656 25.9335 16.0016 25.6321 17.1017Z" fill="#9A50A5" />
    <path fillRule="evenodd" clipRule="evenodd" d="M24.3677 20.2322C22.1149 24.2787 5.76921 25.2925 3.37884 22.5711C2.15311 21.1651 1.22214 19.5119 0.644531 17.7154C2.64638 16.5198 4.97289 16.0386 7.26534 16.3458C10.1888 16.7549 12.8027 18.4447 15.6918 19.1028C18.0285 19.648 20.4664 19.5 22.7254 18.6759C23.7522 18.2938 24.7286 17.7799 25.6316 17.1462C25.3374 18.2258 24.9127 19.2626 24.3677 20.2322Z" fill="#59569E" />
    <path fillRule="evenodd" clipRule="evenodd" d="M24.3849 20.1966C23.3622 22.0477 21.9301 23.622 20.2059 24.7905C18.4817 25.959 16.5144 26.6885 14.4651 26.9193C12.4159 27.1501 10.3429 26.8756 8.41593 26.1183C6.48899 25.3609 4.76287 24.1423 3.37891 22.5622C3.77444 22.7223 4.23875 22.8557 4.62568 22.9802C6.91156 23.6221 9.3242 23.6006 11.599 22.918C13.0522 22.4733 14.4107 21.7707 15.8295 21.246C18.5817 20.2267 21.5219 19.8679 24.4279 20.1966H24.3849Z" fill="#39477F" />
  </svg>
);

const BurpSuiteIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#FF6633"/>
    <path d="M14 12h20v4H14z" fill="white"/>
    <path d="M14 20h20v4H14z" fill="white"/>
    <path d="M14 28h20v4H14z" fill="white"/>
  </svg>
);

const SwaggerIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="20" fill="#85EA2D"/>
    <path d="M24 14l-8 8 8 8 8-8z" fill="#173647"/>
  </svg>
);

const PostmanIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="20" fill="#FF6C37"/>
    <path d="M24 10l8 14h-16z" fill="white"/>
    <circle cx="24" cy="32" r="4" fill="white"/>
  </svg>
);

const JMeterIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#D22128"/>
    <path d="M16 20l8-8 8 8-8 8z" fill="#FFF"/>
    <rect x="20" y="30" width="8" height="6" fill="#FFF"/>
  </svg>
);

const BrowserDevToolsIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#4285F4"/>
    <path d="M12 16h24v2H12zm0 6h24v2H12zm0 6h24v2H12z" fill="white"/>
  </svg>
);

const TestFairyIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="20" fill="#7B68EE"/>
    <path d="M20 18c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="white"/>
    <path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

const TestFlightIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="20" fill="#0D96F6"/>
    <path d="M24 12l-8 16h16z" fill="white"/>
    <path d="M16 30h16v2H16z" fill="white"/>
  </svg>
);

const AppTesterIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#00BCD4"/>
    <rect x="14" y="12" width="20" height="24" rx="2" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="32" r="2" fill="white"/>
  </svg>
);

const SwiftIcon = () => (
  <svg width="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M59.3867 16.4501C59.3832 15.8528 59.3766 15.2558 59.3601 14.6578C59.3253 13.357 59.2484 12.0444 59.0172 10.7575C58.7826 9.4506 58.3991 8.2354 57.7947 7.0482C57.2014 5.8823 56.4258 4.8154 55.5006 3.8902C54.5756 2.965 53.5087 2.1895 52.3423 1.5959C51.1561 0.9922 49.9407 0.6088 48.635 0.3742C47.3474 0.1423 46.0348 0.0659 44.733 0.0307C44.1353 0.0145 43.5382 0.0077 42.9407 0.004C42.2315 0 41.5218 0 40.8128 0H25.0912H18.5781C17.8684 0 17.1595 0 16.4505 0.0041C15.8528 0.0078 15.255 0.0146 14.6582 0.0308C14.3328 0.0396 14.0067 0.051 13.6804 0.0667C12.7016 0.1139 11.7213 0.2004 10.7561 0.3743C9.77684 0.5503 8.84824 0.8099 7.94484 1.1834C7.64374 1.3078 7.34534 1.445 7.04874 1.5959C6.17394 2.0411 5.35494 2.5886 4.61004 3.2248C4.36174 3.4369 4.12164 3.6588 3.89044 3.8901C2.96504 4.8153 2.18944 5.8822 1.59614 7.0481C0.991738 8.2353 0.608738 9.4505 0.373938 10.7574C0.142938 12.0443 0.0661381 13.3569 0.0311381 14.6577C0.0147381 15.2557 0.00783811 15.8527 0.00393811 16.45C-0.000561889 17.1594 3.81111e-05 17.8689 3.81111e-05 18.5781V28.26V40.8125C3.81111e-05 41.5224 -0.000661889 42.2312 0.00393811 42.9411C0.00783811 43.5384 0.0147381 44.1354 0.0311381 44.7324C0.0661381 46.0339 0.142838 47.3468 0.373938 48.6331C0.608738 49.9396 0.991738 51.1559 1.59614 52.3428C2.18944 53.509 2.96504 54.5756 3.89044 55.5004C4.81514 56.426 5.88234 57.2014 7.04884 57.7954C8.23514 58.3992 9.45044 58.7821 10.7564 59.0167C12.0432 59.2483 13.3568 59.3253 14.6583 59.3601C15.2551 59.376 15.8529 59.3831 16.4506 59.3865C17.1596 59.3916 17.8685 59.3909 18.5782 59.3909H40.8128C41.5218 59.3909 42.2315 59.3916 42.9406 59.3865C43.5381 59.3831 44.1352 59.376 44.7329 59.3601C46.0347 59.3253 47.3473 59.2482 48.6349 59.0167C49.9406 58.7821 51.156 58.3991 52.3422 57.7954C53.5086 57.2015 54.5755 56.426 55.5005 55.5004C56.4257 54.5755 57.2014 53.509 57.7946 52.3428C58.399 51.1559 58.7825 49.9397 59.0171 48.6331C59.2483 47.3468 59.3252 46.0339 59.36 44.7324C59.3764 44.1354 59.383 43.5385 59.3866 42.9411C59.3912 42.2312 59.3908 41.5224 59.3908 40.8125V18.5781C59.3909 17.8689 59.3912 17.1594 59.3867 16.4501Z" fill="#F05138"></path>
    <path d="M47.06 36.6607C47.0586 36.6589 47.0573 36.6576 47.0558 36.6559C47.1215 36.4323 47.1893 36.2101 47.2468 35.9809C49.7118 26.16 43.6957 14.549 33.5152 8.43549C37.9765 14.4834 39.9491 21.8088 38.1965 28.215C38.0402 28.7864 37.8523 29.3348 37.6446 29.8678C37.4192 29.7197 37.1352 29.5516 36.7538 29.3413C36.7538 29.3413 26.6269 23.0886 15.651 12.0291C15.363 11.7388 21.5038 20.8061 28.4729 28.169C25.1895 26.3263 16.0391 19.6686 10.2463 14.3667C10.958 15.5536 11.8045 16.6965 12.735 17.7968C17.5725 23.9317 23.8812 31.5012 31.4393 37.3137C26.1289 40.5635 18.6252 40.8162 11.1541 37.3171C9.30624 36.4511 7.56904 35.4062 5.96094 34.219C9.12344 39.2775 13.9941 43.6419 19.9222 46.1898C26.9917 49.2279 34.0218 49.0219 39.2578 46.2396L39.2537 46.2456C39.2776 46.2305 39.308 46.214 39.3328 46.1987C39.5478 46.0831 39.7612 45.9654 39.9699 45.8411C42.4856 44.5353 47.4546 43.2105 50.1217 48.3999C50.7749 49.6699 52.1629 42.9395 47.06 36.6607Z" fill="white"></path>
  </svg>
);
const ARKitIcon = () => (
  <img src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6399e12c0e4711248faad1bd_arkit-logo.png"
    loading="lazy"
    title="RxJava logo"
    alt="ARKit"
    className="w-full h-full object-contain" />
);

const GoogleMapsIcon = () => (
  <svg width="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_3275_4379)">
      <path d="M34.2012 74.0801C37.2886 77.9387 40.4331 82.7906 42.0787 85.7212C44.0827 89.5311 44.9136 92.1035 46.4044 96.7111C47.276 99.2347 48.107 100 49.8503 100C51.7565 100 52.6282 98.7137 53.2962 96.7111C54.6892 92.3884 55.7645 89.0996 57.4671 85.9654C64.033 73.5916 74.7373 64.7997 80.7656 52.7515C80.7656 52.7515 84.7328 45.3924 84.7328 35.0863C84.7328 25.4803 80.8226 18.8049 80.8226 18.8049L34.2256 74.1615L34.2012 74.0801Z" fill="#34A853"></path>
      <path d="M18.3988 51.449C22.1543 59.9967 29.3149 67.4861 34.2027 74.0801L60.108 43.3898C60.108 43.3898 56.4503 48.1765 49.8436 48.1765C42.4794 48.1765 36.4837 42.3152 36.4837 34.9072C36.4837 29.8111 39.5222 26.2781 39.5222 26.2781C20.4598 29.111 21.5189 33.7268 18.3418 51.4327L18.3988 51.449Z" fill="#FBBC04"></path>
      <path d="M60.4317 1.60376C69.0668 4.37973 76.3985 10.2329 80.7975 18.7806L60.1059 43.4468C60.1059 43.4468 63.1445 39.8975 63.1445 34.8177C63.1445 27.255 56.7577 21.5484 49.8659 21.5484C43.3244 21.5484 39.6016 26.2781 39.6016 26.2781C41.1901 22.6637 57.605 2.833 60.4562 1.6119L60.4317 1.60376Z" fill="#4285F4"></path>
      <path d="M23.123 12.4552C28.2715 6.33344 37.2977 0 49.7615 0C55.7817 0 60.3518 1.59557 60.3518 1.59557L39.5786 26.2618C38.1775 25.5023 24.5079 14.8649 23.123 12.5366L39.6019 26.3758L18.4215 51.449H18.397Z" fill="#1A73E8"></path>
      <path d="M18.397 51.449C18.397 51.449 15 44.7085 15 35.0049C15 25.8059 18.6007 17.7466 23.1463 12.5366L39.6019 26.3758L18.4215 51.449H18.397Z" fill="#EA4335"></path>
    </g>
    <defs>
      <clipPath id="clip0_3275_4379">
        <rect width="100" height="100" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

const MapKitIcon = () => (
  <img src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6399e27da01227574ff74b7b_MapKit-logo.png"
    loading="lazy"
    title="RxJava logo"
    alt="ARKit"
    className="w-full h-full object-contain" />
);

const MapBoxIcon = () => (
  <svg width="100%" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.5 0C12.7593 0 0 12.7593 0 28.5C0 44.2407 12.7593 57 28.5 57C44.2407 57 57 44.2407 57 28.5C57 12.7593 44.2407 0 28.5 0ZM42.0287 35.4888C32.2829 45.2345 14.8751 42.1249 14.8751 42.1249C14.8751 42.1249 11.7334 24.7492 21.5112 14.9713C26.9291 9.55343 35.9055 9.77784 41.5799 15.4201C47.2542 21.0624 47.4466 30.0709 42.0287 35.4888Z" fill="white"></path>
    <path d="M31.7697 16.7025L28.9807 22.441L23.2422 25.2301L28.9807 28.0192L31.7697 33.7576L34.5588 28.0192L40.2973 25.2301L34.5588 22.441L31.7697 16.7025Z" fill="white"></path>
  </svg>
);

const CoreDataIcon = () => (
  <img src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6399eb81d7a136d257117ea7_CoreData-logo.png"
    loading="lazy"
    title="RxJava logo"
    alt="ARKit"
    className="w-full h-full object-contain" />
);

const SwinjectIcon = () => (
  <img src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6399eef62bd42350ddaf133a_Swinject-logo.png"
    loading="lazy"
    title="RxJava logo"
    alt="ARKit"
    className="w-full h-full object-contain" />
);

const CoreLocationIcon = () => (
  <img src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6399edcc3cb0845c77558457_CoreLocation-logo.png"
    loading="lazy"
    title="RxJava logo"
    alt="ARKit"
    className="w-full h-full object-contain" />
);

const ReactNativeIcon = () => (
  <svg viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-full h-full">
    <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
    <path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" fill="#00d8ff" />
    <path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" fill="#00d8ff" />
    <path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" fill="#00d8ff" />
  </svg>
);

const techTabs: TechTab[] = [
  {
    id: "android",
    label: "Android",
    badge: "01",
    technologies: [
      { name: "Kotlin", icon: <KotlinIcon /> },
      { name: "Clean Architecture" },
      { name: "Android SDK", icon: <AndroidSDKIcon /> },
      { name: "MVVM", icon: <MVVMIcon /> },
      { name: "Retrofit2", icon: <Retrofit2Icon /> },
      { name: "Okhttp3" },
      { name: "Java", icon: <JavaIcon /> },
      { name: "Kotlin Coroutines", icon: <KotlinIcon /> },
      { name: "RxJava", icon: <RxJavaIcon /> },
      { name: "Kotlin Flow", icon: <KotlinIcon /> },
      { name: "Android Jetpack", icon: <AndroidSDKIcon /> },
      { name: "Realm", icon: <RealmIcon /> },
      { name: "Unit Testing" },
      { name: "Room" },
      { name: "Dagger2" },
      { name: "Hilt", icon: <HiltIcon /> },
      { name: "Google Play Services", icon: <GooglePlayIcon /> },
      { name: "Firebase", icon: <FirebaseIcon /> },
      { name: "CameraX", icon: <AndroidSDKIcon /> },
      { name: "Android NDK" },
    ],
  },
  {
    id: "ios",
    label: "iOS",
    badge: "02",
    technologies: [
      { name: "Swift", icon: <SwiftIcon /> },
      { name: "Clean Architecture" },
      { name: "SwiftUI", icon: <SwiftIcon /> },
      { name: "RxSwift", icon: <RxJavaIcon /> },
      { name: "ARKit", icon: <ARKitIcon /> },
      { name: "MapKit", icon: <MapKitIcon /> },
      { name: "Google Maps", icon: <GoogleMapsIcon /> },
      { name: "MapBox", icon: <MapBoxIcon /> },
      { name: "CoreData", icon: <CoreDataIcon /> },
      { name: "CoreMotion" },
      { name: "CoreGraphics" },
      { name: "MVVM", icon: <MVVMIcon /> },
      { name: "Swinject", icon: <SwinjectIcon /> },
      { name: "Unit Testing" },
      { name: "CoreLocation", icon: <CoreLocationIcon /> },
    ],
  },
  {
    id: "crossPlatform",
    label: "Cross-Platform",
    badge: "03",
    technologies: [
      { name: "React Native", icon: <ReactNativeIcon/> },
      { name: "Flutter", icon: "🐦" },
      { name: "Dart", icon: "🎯" },
      { name: "Redux", icon: "🔄" },
      { name: "Redux Toolkit", icon: "⚡" },
      { name: "React Query", icon: "🔍" },
      { name: "React Navigation", icon: "🧭" },
      { name: "BLoC", icon: "🧱" },
      { name: "Realm", icon: "💎" },
      { name: "Material UI", icon: "🎨" },
      { name: "Cupertino UI", icon: "🍎" },
      { name: "Plugins", icon: "🔌" },
    ],
  },
];

const translations = {
  en: {
    androidTitle: "ANDROID TECHNOLOGIES AND SERVICES",
    androidSubtitle: "Our technology stack for Android app development.",
    iosTitle: "IOS TECHNOLOGIES AND SERVICES",
    iosSubtitle: "Our technology stack for iOS app development.",
    crossPlatformTitle: "CROSS-PLATFORM TECHNOLOGIES AND SERVICES",
    crossPlatformSubtitle: "Our technology stack for cross-platform app development.",
  },
  fr: {
    androidTitle: "TECHNOLOGIES ET SERVICES ANDROID",
    androidSubtitle: "Notre pile technologique pour le développement d'applications Android.",
    iosTitle: "TECHNOLOGIES ET SERVICES IOS",
    iosSubtitle: "Notre pile technologique pour le développement d'applications iOS.",
    crossPlatformTitle: "TECHNOLOGIES ET SERVICES MULTI-PLATEFORMES",
    crossPlatformSubtitle: "Notre pile technologique pour le développement d'applications multi-plateformes.",
  },
  pl: {
    androidTitle: "TECHNOLOGIE I USŁUGI ANDROID",
    androidSubtitle: "Nasz stos technologiczny do tworzenia aplikacji Android.",
    iosTitle: "TECHNOLOGIE I USŁUGI IOS",
    iosSubtitle: "Nasz stos technologiczny do tworzenia aplikacji iOS.",
    crossPlatformTitle: "TECHNOLOGIE I USŁUGI WIELOPLATFORMOWE",
    crossPlatformSubtitle: "Nasz stos technologiczny do tworzenia aplikacji wieloplatformowych.",
  },
};

interface TechnologyStack {
  title: string;
  subtitle: string;
  technologies: Technology[];
}

interface AnimatedTechTabsProps {
  technologyStacks?: {
    android?: TechnologyStack;
    ios?: TechnologyStack;
    crossPlatform?: TechnologyStack;
  };
}

export default function AnimatedTechTabs({ technologyStacks }: AnimatedTechTabsProps = {}) {
  const [activeTab, setActiveTab] = useState<TechTab["id"]>("android");
  const { language } = useLanguage();
  const t = translations[language];

  const currentTab = techTabs.find(tab => tab.id === activeTab);
  
  // Get current technology stack with translation fallback
  const getCurrentStack = () => {
    if (!currentTab) return null;
    
    // Use provided technologyStacks if available, otherwise use translations
    const providedStack = technologyStacks?.[activeTab as keyof typeof technologyStacks];
    
    if (providedStack) {
      return providedStack;
    }
    
    // Fallback to translations
    const titleKey = `${activeTab}Title` as keyof typeof t;
    const subtitleKey = `${activeTab}Subtitle` as keyof typeof t;
    
    return {
      title: t[titleKey],
      subtitle: t[subtitleKey],
      technologies: currentTab.technologies,
    };
  };

  const currentStack = getCurrentStack();
  
  // Safety check
  if (!currentTab || !currentStack) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex items-center gap-4 p-2 rounded-2xl bg-[#263a52] border border-[#344865] flex-wrap justify-center">
          {techTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === tab.id
                ? "text-white bg-[#239D89] shadow-lg"
                : "text-neutral-400 hover:text-white"
                }`}
            >
              {tab.label}
              <span className="ml-2 text-xs opacity-70">[{tab.badge}]</span>

              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#239D89] rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title & Subtitle */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase"
            >
              {currentStack.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-neutral-400"
            >
              {currentStack.subtitle}
            </motion.p>
          </div>

          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {currentStack.technologies.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + index * 0.03,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group relative px-6 py-4 bg-[#263a52] hover:bg-[#2d4259] border border-[#344865] rounded-xl transition-all duration-300 hover:scale-105 hover:border-[#239D89]/50 cursor-pointer"
                style={{ display: "flex" }}
              >
                <div className={`flex items-center ${tech.icon ? "gap-3" : "justify-center"}`}>
                  {tech.icon && (
                    <div className="w-12 h-12 flex items-center justify-center p-2 shrink-0">
                      {typeof tech.icon === 'string' ? (
                        <span className="text-xl">{tech.icon}</span>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">{tech.icon}</div>
                      )}
                    </div>
                  )}
                  <span className="text-white font-semibold whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#163C2E] rounded-full text-[#239D89] font-bold">
              [{currentTab?.badge}]
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}