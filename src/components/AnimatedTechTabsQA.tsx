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
  title: string;
  subtitle: string;
  technologies: Technology[];
}

interface AnimatedTechTabsQAProps {
  technologyStacks?: {
    manualTesting: {
      title?: string;
      subtitle?: string;
      technologies: Technology[];
    };
    automationWeb: {
      title?: string;
      subtitle?: string;
      technologies: Technology[];
    };
    automationMobile: {
      title?: string;
      subtitle?: string;
      technologies: Technology[];
    };
  };
}

// Icons for technologies
const BurpSuiteIcon = () => (
  <svg width="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0C1.79297 0 0 1.79297 0 4V38C0 40.207 1.79297 42 4 42H20V34.5859L28.5859 26H20V17H8.58594L20 5.58594V0H4ZM22 0V6.41406L13.4141 15H22V24H33.4141L22 35.4141V42H38C40.207 42 42 40.207 42 38V4C42 1.79297 40.207 0 38 0H22Z" fill="#FF6633"></path>
  </svg>
);

const SwaggerIcon = () => (
  <svg width="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.9363 35.0201C8.5192 35.0201 0.849609 27.3511 0.849609 17.9347C0.849609 8.5184 8.5192 0.849426 17.9363 0.849426C27.3534 0.849426 35.023 8.5184 35.023 17.9347C35.023 27.3511 27.3534 35.0201 17.9363 35.0201Z" fill="#85EA2D"></path>
    <path d="M17.9362 1.72309C26.8921 1.72309 34.1734 8.9795 34.1734 17.959C34.1734 26.9142 26.9164 34.1949 17.9362 34.1949C8.98022 34.1949 1.69896 26.9385 1.69896 17.959C1.69896 8.9795 8.98022 1.72309 17.9362 1.72309ZM17.9362 0C8.03365 0 0 8.05728 0 17.9347C0 27.8122 8.05793 35.8695 17.9362 35.8695C27.8144 35.8695 35.8723 27.8122 35.8723 17.9347C35.8723 8.05728 27.8144 0 17.9362 0Z" fill="#173647"></path>
    <path d="M11.2862 12.1587C11.2376 12.7654 11.3104 13.3964 11.2619 14.0274C11.2134 14.6584 11.1406 15.2651 11.0192 15.8719C10.8493 16.7455 10.2911 17.4008 9.53867 17.959C10.9949 18.9055 11.1648 20.3859 11.2619 21.8906C11.3104 22.6914 11.2862 23.5166 11.3833 24.3175C11.4561 24.9484 11.6745 25.0941 12.3298 25.1183C12.5968 25.1183 12.8638 25.1183 13.155 25.1183V27.0356C11.2619 27.3511 9.6843 26.8171 9.29597 25.2154C9.17461 24.6329 9.07753 24.0262 9.05326 23.4195C9.00472 22.7885 9.07753 22.1332 9.02899 21.5023C8.88336 19.7549 8.66492 19.1482 6.99023 19.0754V16.8912C7.11159 16.8669 7.23294 16.8426 7.3543 16.8183C8.27659 16.7698 8.66492 16.4786 8.88336 15.5806C8.98045 15.071 9.02899 14.5613 9.05326 14.0274C9.12607 13.0324 9.1018 12.0131 9.2717 11.0181C9.5144 9.58621 10.3882 8.90669 11.8687 8.80961C12.2813 8.78534 12.6939 8.80961 13.1793 8.80961V10.7754C12.9851 10.7997 12.8152 10.8239 12.6211 10.8239C11.4318 10.7511 11.3833 11.1637 11.2862 12.1587ZM13.5919 16.697H13.5676C12.8881 16.6727 12.2813 17.2067 12.257 17.8862C12.2327 18.59 12.7667 19.1724 13.4463 19.221H13.5191C14.1987 19.2695 14.7812 18.7356 14.8297 18.0561V17.9833C14.8297 17.2795 14.2715 16.697 13.5919 16.697ZM17.9121 16.697C17.2325 16.6727 16.6743 17.2067 16.6743 17.8619C16.6743 17.9105 16.6743 17.9347 16.6743 17.9833C16.6743 18.7356 17.184 19.221 17.9607 19.221C18.7131 19.221 19.1985 18.7356 19.1985 17.9347C19.1742 17.1824 18.6645 16.6727 17.9121 16.697ZM22.3294 16.697C21.6256 16.6727 21.0431 17.2309 21.0188 17.9347C21.0188 18.6385 21.577 19.1967 22.2809 19.1967H22.3051C22.9362 19.3181 23.5915 18.6871 23.6158 17.959C23.6643 17.2795 23.0333 16.697 22.3294 16.697ZM28.4214 16.7941C27.6205 16.7698 27.2321 16.5029 27.0137 15.7263C26.8923 15.2409 26.8195 14.7312 26.7953 14.2458C26.7467 13.3236 26.7467 12.4014 26.6739 11.4549C26.5283 9.27072 24.9507 8.49412 22.6449 8.88242V10.7754C23.009 10.7754 23.3002 10.7754 23.5672 10.7754C24.0526 10.7754 24.441 10.9695 24.4895 11.5035C24.5381 11.9888 24.5381 12.4985 24.5866 13.0081C24.6837 14.0032 24.7322 15.0225 24.9021 16.0175C25.0478 16.8426 25.606 17.4493 26.3098 17.9347C25.0963 18.7599 24.7322 19.9248 24.6594 21.2353C24.6351 22.1332 24.6109 23.0555 24.5623 23.9534C24.5138 24.7786 24.2225 25.0455 23.3973 25.0698C23.1546 25.0698 22.9362 25.0941 22.6692 25.1183V27.0598C23.1546 27.0598 23.6158 27.0841 24.0526 27.0598C25.4361 26.987 26.2856 26.3075 26.5525 24.9484C26.6739 24.1961 26.7467 23.4438 26.771 22.6914C26.8195 22.0119 26.8195 21.3081 26.8923 20.6286C26.9894 19.5607 27.4748 19.1239 28.5428 19.0511C28.6398 19.0268 28.7369 19.0268 28.834 18.9783V16.7941C28.6641 16.8184 28.5428 16.7941 28.4214 16.7941Z" fill="#173647"></path>
  </svg>
);

const PostmanIcon = () => (
  <svg width="100%" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.7914 20.4934C38.0641 10.5302 31.0275 1.42141 21.0816 0.148726C11.1357 -1.12395 1.98988 5.91215 0.717097 15.8572C-0.555684 25.8023 6.48098 34.9292 16.4269 36.2201C26.3909 37.4928 35.5004 30.4567 36.7914 20.4934Z" fill="#FF6C37"></path>
    <path d="M25.3172 11.6756L17.6442 19.348L15.4805 17.1845C23.0262 9.63928 23.7717 10.2938 25.3172 11.6756Z" fill="white"></path>
    <path d="M17.645 19.5298C17.5904 19.5298 17.5541 19.5116 17.5177 19.4752L15.3358 17.3117C15.2631 17.239 15.2631 17.1299 15.3358 17.0571C23.0088 9.3847 23.8089 10.1119 25.4271 11.5664C25.4635 11.6028 25.4817 11.6392 25.4817 11.6937C25.4817 11.7483 25.4635 11.7846 25.4271 11.821L17.7541 19.4752C17.7359 19.5116 17.6814 19.5298 17.645 19.5298ZM15.7358 17.1844L17.645 19.0934L25.0453 11.6937C23.6998 10.4938 22.7907 10.1301 15.7358 17.1844Z" fill="#FF6C37"></path>
    <path d="M19.8449 21.5479L17.7539 19.4571L25.427 11.7847C27.4816 13.8573 24.4087 17.2208 19.8449 21.5479Z" fill="white"></path>
    <path d="M19.8445 21.7297C19.7899 21.7297 19.7536 21.7116 19.7172 21.6752L17.6262 19.5844C17.5898 19.548 17.5898 19.5116 17.5898 19.4571C17.5898 19.4026 17.608 19.3662 17.6444 19.3298L25.3174 11.6574C25.3902 11.5847 25.4993 11.5847 25.572 11.6574C26.0447 12.0937 26.2993 12.7119 26.2811 13.3482C26.2448 15.3663 23.9537 17.9299 19.9899 21.6752C19.9354 21.7116 19.8809 21.7297 19.8445 21.7297ZM18.008 19.4571C19.1717 20.6389 19.6627 21.1116 19.8445 21.2934C22.8992 18.3844 25.8629 15.4027 25.8811 13.3482C25.8993 12.8755 25.7175 12.4028 25.4084 12.0392L18.008 19.4571Z" fill="#FF6C37"></path>
    <path d="M15.5177 17.239L17.0633 18.7844C17.0996 18.8208 17.0996 18.8571 17.0633 18.8935C17.0451 18.9117 17.0451 18.9117 17.0269 18.9117L13.8268 19.6025C13.6631 19.6207 13.5177 19.5116 13.4813 19.348C13.4631 19.2571 13.4995 19.1662 13.554 19.1117L15.4086 17.2572C15.445 17.2208 15.4996 17.2026 15.5177 17.239Z" fill="white"></path>
    <path d="M13.7716 19.7843C13.4988 19.7843 13.2988 19.5661 13.2988 19.2934C13.2988 19.1662 13.3534 19.0389 13.4443 18.948L15.2989 17.0935C15.408 17.0026 15.5535 17.0026 15.6626 17.0935L17.2081 18.6389C17.3172 18.7298 17.3172 18.8934 17.2081 19.0025C17.1717 19.0389 17.1354 19.0571 17.0808 19.0753L13.8807 19.7661C13.8443 19.7661 13.8079 19.7843 13.7716 19.7843ZM15.4626 17.4389L13.6807 19.2207C13.6443 19.2571 13.6261 19.3116 13.6625 19.3662C13.6807 19.4207 13.7352 19.4389 13.7898 19.4207L16.7899 18.7662L15.4626 17.4389Z" fill="#FF6C37"></path>
    <path d="M29.3717 7.42118C28.208 6.29395 26.3352 6.33031 25.2079 7.51208C24.0805 8.69386 24.1169 10.5483 25.2988 11.6756C26.2625 12.6028 27.7171 12.7664 28.8626 12.0756L26.7898 10.0029L29.3717 7.42118Z" fill="white"></path>
    <path d="M27.3364 12.6755C25.609 12.6755 24.209 11.2756 24.209 9.54836C24.209 7.82115 25.609 6.4212 27.3364 6.4212C28.1364 6.4212 28.9183 6.73028 29.5001 7.2939C29.5365 7.33026 29.5547 7.36662 29.5547 7.42117C29.5547 7.47571 29.5365 7.51207 29.5001 7.54843L27.0455 10.0029L28.9728 11.9301C29.0456 12.0028 29.0456 12.1119 28.9728 12.1846C28.9546 12.2028 28.9546 12.2028 28.9365 12.221C28.4637 12.5119 27.9 12.6755 27.3364 12.6755ZM27.3364 6.80301C25.8091 6.80301 24.5726 8.03932 24.5908 9.56654C24.5908 11.0938 25.8272 12.3301 27.3546 12.3119C27.7728 12.3119 28.191 12.221 28.5728 12.021L26.6636 10.1302C26.6273 10.0938 26.6091 10.0574 26.6091 10.0029C26.6091 9.94834 26.6273 9.91198 26.6636 9.87562L29.1001 7.43935C28.6092 7.02118 27.991 6.80301 27.3364 6.80301Z" fill="#FF6C37"></path>
    <path d="M29.4275 7.47569L29.3911 7.43933L26.791 10.0029L28.8456 12.0573C29.0457 11.9301 29.2457 11.7846 29.4093 11.621C30.573 10.4756 30.573 8.6211 29.4275 7.47569Z" fill="white"></path>
    <path d="M28.864 12.2574C28.8095 12.2574 28.7731 12.2392 28.7367 12.2028L26.6639 10.1302C26.6276 10.0938 26.6094 10.0575 26.6094 10.0029C26.6094 9.94837 26.6276 9.91201 26.6639 9.87564L29.2458 7.29392C29.3186 7.2212 29.4277 7.2212 29.5004 7.29392L29.555 7.33029C30.7732 8.54842 30.7732 10.512 29.5731 11.7483C29.3913 11.9301 29.1913 12.0937 28.9731 12.221C28.9186 12.2392 28.8822 12.2574 28.864 12.2574ZM27.0458 10.0029L28.8822 11.8392C29.0277 11.7483 29.1731 11.621 29.2822 11.5119C30.3186 10.4756 30.3732 8.78478 29.3731 7.69391L27.0458 10.0029Z" fill="#FF6C37"></path>
    <path d="M25.6262 12.0028C25.1898 11.5665 24.4807 11.5665 24.0443 12.0028L17.1895 18.8571L18.335 20.0025L25.5898 13.6391C26.0626 13.2391 26.0989 12.5301 25.6989 12.0573C25.6625 12.0392 25.6444 12.021 25.6262 12.0028Z" fill="white"></path>
    <path d="M18.3176 20.1843C18.263 20.1843 18.2267 20.1661 18.1903 20.1298L17.0448 18.9843C16.9721 18.9116 16.9721 18.8025 17.0448 18.7298L23.8996 11.8755C24.4087 11.3664 25.2269 11.3664 25.7361 11.8755C26.2452 12.3846 26.2452 13.2027 25.7361 13.7118C25.7179 13.73 25.6997 13.7482 25.6815 13.7664L18.4267 20.1298C18.4085 20.1661 18.3721 20.1843 18.3176 20.1843ZM17.4448 18.8571L18.3357 19.7479L25.4633 13.4936C25.8633 13.1664 25.8997 12.5664 25.5724 12.1664C25.2451 11.7664 24.6451 11.7301 24.2451 12.0573C24.2269 12.0755 24.2087 12.0937 24.1724 12.1119L17.4448 18.8571Z" fill="#FF6C37"></path>
    <path d="M11.9359 26.6568C11.8631 26.6932 11.8268 26.7659 11.8449 26.8386L12.1541 28.1476C12.2268 28.3295 12.1177 28.5476 11.9177 28.6022C11.7722 28.6567 11.6086 28.6022 11.5177 28.4931L9.51758 26.5113L16.0451 19.9843L18.2998 20.0207L19.8271 21.5479C19.4635 21.857 17.2634 23.9842 11.9359 26.6568Z" fill="white"></path>
    <path d="M11.7894 28.784C11.6439 28.784 11.4985 28.7294 11.4075 28.6203L9.42564 26.6386C9.38928 26.6022 9.37109 26.5659 9.37109 26.5113C9.37109 26.4568 9.38928 26.4204 9.42564 26.3841L15.9532 19.857C15.9896 19.8207 16.0441 19.8025 16.0805 19.8025L18.3351 19.8389C18.3897 19.8389 18.426 19.857 18.4624 19.8934L19.9897 21.4206C20.0261 21.457 20.0443 21.5115 20.0443 21.5661C20.0443 21.6206 20.0261 21.657 19.9715 21.6933L19.8443 21.8024C17.9169 23.4933 15.2986 25.1841 12.0439 26.8022L12.353 28.0931C12.4076 28.3294 12.2985 28.584 12.0803 28.7112C11.9712 28.7658 11.8803 28.784 11.7894 28.784ZM9.78929 26.5113L11.6621 28.3658C11.7166 28.4567 11.8257 28.4931 11.9167 28.4385C12.0076 28.384 12.0439 28.2749 11.9894 28.184L11.6803 26.875C11.6439 26.7113 11.7166 26.5659 11.8621 26.4931C15.0804 24.875 17.6805 23.2024 19.5897 21.5479L18.2442 20.2025L16.1532 20.1661L9.78929 26.5113Z" fill="#FF6C37"></path>
    <path d="M7.97119 28.0749L9.53489 26.5114L11.8623 28.8385L8.15302 28.584C7.98937 28.5658 7.88028 28.4204 7.89846 28.2567C7.89846 28.184 7.91664 28.1113 7.97119 28.0749Z" fill="white"></path>
    <path d="M11.8623 29.0021L8.1349 28.7476C7.86216 28.7294 7.68033 28.4931 7.69852 28.2204C7.7167 28.1113 7.75306 28.0022 7.84398 27.9295L9.40768 26.3659C9.48041 26.2932 9.5895 26.2932 9.66224 26.3659L11.9896 28.6931C12.0442 28.7476 12.0623 28.8203 12.026 28.8931C11.9896 28.9658 11.9351 29.0021 11.8623 29.0021ZM9.53496 26.7659L8.09853 28.2022C8.04398 28.2385 8.04398 28.3294 8.09853 28.3658C8.11672 28.384 8.1349 28.4022 8.17126 28.4022L11.3896 28.6203L9.53496 26.7659Z" fill="#FF6C37"></path>
    <path d="M15.4084 20.8207C15.2993 20.8207 15.2266 20.7298 15.2266 20.6389C15.2266 20.5843 15.2447 20.548 15.2811 20.5116L17.0448 18.748C17.1176 18.6753 17.2266 18.6753 17.2994 18.748L18.4449 19.8934C18.4994 19.948 18.5176 20.0025 18.4994 20.0752C18.4812 20.1298 18.4267 20.1843 18.354 20.2025L15.4448 20.8207C15.4266 20.8207 15.4084 20.8207 15.4084 20.8207ZM17.1721 19.1298L15.972 20.3298L17.9358 19.9116L17.1721 19.1298Z" fill="#FF6C37"></path>
    <path d="M18.2988 20.0207L16.2987 20.4571C16.1532 20.4934 16.0078 20.4025 15.9714 20.2571C15.9532 20.1662 15.9714 20.0753 16.0441 20.0025L17.1533 18.8935L18.2988 20.0207Z" fill="white"></path>
    <path d="M16.2632 20.6389C16.0086 20.6389 15.8086 20.4389 15.8086 20.1843C15.8086 20.0571 15.8631 19.948 15.9359 19.8571L17.045 18.748C17.1177 18.6753 17.2268 18.6753 17.2996 18.748L18.4451 19.8934C18.4996 19.948 18.5178 20.0025 18.4996 20.0752C18.4814 20.1298 18.4269 20.1843 18.3542 20.2025L16.3541 20.6389C16.3177 20.6389 16.2813 20.6389 16.2632 20.6389ZM17.1723 19.1298L16.1904 20.1116C16.1541 20.148 16.1541 20.1843 16.1722 20.2207C16.1904 20.2571 16.2268 20.2752 16.2813 20.2752L17.9541 19.9116L17.1723 19.1298Z" fill="#FF6C37"></path>
    <path d="M29.4442 9.22113C29.4079 9.11204 29.2806 9.0575 29.1715 9.09386C29.0624 9.13022 29.0078 9.25749 29.0442 9.36658C29.0442 9.38476 29.0624 9.40294 29.0624 9.42112C29.1715 9.63929 29.1351 9.91201 28.9897 10.112C28.9169 10.2029 28.9351 10.3302 29.0078 10.4029C29.0988 10.4756 29.226 10.4574 29.2988 10.3665C29.5715 10.0211 29.6261 9.58475 29.4442 9.22113Z" fill="#FF6C37"></path>
  </svg>
);

const JMeterIcon = () => (
  <img
    src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/6398853164d52c3b5cd7b4af_JM-icon.png"
    loading="lazy"
    width="42"
    title="MVVM logo"
    alt="MVVM"
    className="w-full h-full object-contain"
  />
);

const BrowserDevToolsIcon = () => (
  <svg width="100%" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.1641 1.0022H3.92895C2.31134 1.0022 1 2.32133 1 3.94856V35.3694C1 36.9966 2.31134 38.3157 3.92895 38.3157H35.1641C36.7817 38.3157 38.0931 36.9966 38.0931 35.3694V3.94856C38.0931 2.32133 36.7817 1.0022 35.1641 1.0022Z" fill="#2879FF"></path>
    <path d="M1.11914 1.09229L38.1191 38.0923M38.1191 1.09229L1.11914 38.0923M24.9601 1.09229V38.0923M14.2716 1.09229V38.0923M38.1191 24.9399H1.11914M38.1191 14.2447H1.11914" stroke="white" stroke-opacity="0.2" stroke-width="0.5"></path>
    <path d="M19.5454 29.2336C24.8021 29.2336 29.0634 24.9469 29.0634 19.659C29.0634 14.3711 24.8021 10.0844 19.5454 10.0844C14.2887 10.0844 10.0273 14.3711 10.0273 19.659C10.0273 24.9469 14.2887 29.2336 19.5454 29.2336Z" stroke="white" stroke-opacity="0.2" stroke-width="0.5"></path>
    <path d="M1.11914 19.5923H38.1191M19.6191 1.09229V38.0923" stroke="white" stroke-opacity="0.2" stroke-width="0.5"></path>
    <path d="M19.547 34.3886C27.6339 34.3886 34.1896 27.7939 34.1896 19.6589C34.1896 11.5239 27.6339 4.9292 19.547 4.9292C11.46 4.9292 4.9043 11.5239 4.9043 19.6589C4.9043 27.7939 11.46 34.3886 19.547 34.3886Z" fill="url(#paint0_radial_3246_4394)"></path>
    <path opacity="0.2" d="M35.1662 1.00211H3.92895C2.31509 1.00909 1.00798 2.3229 1 3.94636V4.19154C1.00798 2.56808 2.31509 1.25427 3.92895 1.24729H35.1662C36.7809 1.25427 38.0882 2.56935 38.0952 4.19365V3.94636C38.0882 2.32206 36.7809 1.00697 35.1662 1V1.00211V1.00211Z" fill="#F1F3F4"></path>
    <path opacity="0.1" d="M35.1662 38.0706H3.92895C2.31425 38.0637 1.00693 36.7486 1 35.1243V35.3758C1.00693 37.0001 2.31425 38.3152 3.92895 38.3221H35.1662C36.7801 38.3141 38.0861 36.9992 38.0931 35.3758V35.1306C38.0861 36.7549 36.7788 38.07 35.1641 38.077L35.1662 38.0706V38.0706Z" fill="black"></path>
    <path d="M13.0726 17.5665C12.8093 18.432 12.7219 19.342 12.8158 20.2422C12.9097 21.1424 13.1828 22.0144 13.6189 22.8061L7.10547 11.5554L13.0726 17.5665Z" fill="url(#paint1_radial_3246_4394)"></path>
    <path d="M21.0038 26.2872C21.8988 26.0801 22.7417 25.6899 23.4802 25.1408C24.2187 24.5917 24.837 23.8956 25.2964 23.0957L18.8145 34.5092L21.0038 26.2872V26.2872Z" fill="url(#paint2_radial_3246_4394)"></path>
    <path d="M19.6185 12.9081H32.6139L24.4574 15.0999C26.5837 17.4477 26.7854 20.9728 24.9411 23.5505C23.0963 26.1283 19.7093 27.0549 16.8211 25.7715C13.9329 24.4881 12.3325 21.3456 12.9845 18.238C13.6362 15.1301 16.3624 12.906 19.5198 12.906L19.6185 12.9081Z" fill="url(#paint3_radial_3246_4394)"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5474 34.1414C27.4997 34.1414 33.9463 27.6564 33.9463 19.6569C33.9463 11.6573 27.4997 5.17236 19.5474 5.17236C11.5951 5.17236 5.14844 11.6573 5.14844 19.6569C5.14844 27.6564 11.5951 34.1414 19.5474 34.1414Z" stroke="white" stroke-width="2"></path>
    <path d="M19.5481 26.2873C23.1871 26.2873 26.1372 23.3197 26.1372 19.659C26.1372 15.9983 23.1871 13.0308 19.5481 13.0308C15.909 13.0308 12.959 15.9983 12.959 19.659C12.959 23.3197 15.909 26.2873 19.5481 26.2873Z" stroke="white" stroke-width="2"></path>
    <path d="M19.5473 24.3236C22.1083 24.3236 24.1845 22.2351 24.1845 19.6589C24.1845 17.0826 22.1083 14.9941 19.5473 14.9941C16.9863 14.9941 14.9102 17.0826 14.9102 19.6589C14.9102 22.2351 16.9863 24.3236 19.5473 24.3236Z" stroke="white" stroke-width="2"></path>
    <path d="M19.5462 12.7855H32.4807V13.2758H19.5462V12.7855ZM18.5728 34.1183L25.04 22.8502L25.4621 23.0954L18.9949 34.3635L18.5728 34.1183V34.1183ZM7.16016 11.827L7.58248 11.5818L14.0497 22.85L13.6274 23.0952L7.16016 11.827Z" fill="#F1F3F4"></path>
    <defs>
      <radialGradient id="paint0_radial_3246_4394" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.21363 8.87735) scale(0.245704 0.247164)">
        <stop stop-color="white" stop-opacity="0.12"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient id="paint1_radial_3246_4394" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.42052 5.08523) scale(0.331991 0.333965)">
        <stop stop-color="#1A237E" stop-opacity="0.2"></stop>
        <stop offset="1" stop-color="#1A237E" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient id="paint2_radial_3246_4394" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.2109 12.2125) scale(0.374008 0.376233)">
        <stop stop-color="#1A237E" stop-opacity="0.12"></stop>
        <stop offset="1" stop-color="#1A237E" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient id="paint3_radial_3246_4394" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.1877 13.197) scale(0.0936504 0.0942071)">
        <stop stop-color="#1A237E" stop-opacity="0.15"></stop>
        <stop offset="1" stop-color="#1A237E" stop-opacity="0"></stop>
      </radialGradient>
    </defs>
  </svg>
);

const TestFairyIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="20" fill="#7B68EE" />
    <path d="M20 18c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="white" />
    <path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

const TestFlightIcon = () => (
   <img
    src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/63988430613a27359a81a70b_testflight-icon.png"
    loading="lazy"
    width="42"
    title="MVVM logo"
    alt="MVVM"
    className="w-full h-full object-contain"
  />
);

const AppTesterIcon = () => (
  <svg width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#00BCD4" />
    <rect x="14" y="12" width="20" height="24" rx="2" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="24" cy="32" r="2" fill="white" />
  </svg>
);

export default function AnimatedTechTabsQA({ technologyStacks }: AnimatedTechTabsQAProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("manual");

  // Translations
  const translations = {
    en: {
      manualLabel: "Manual Testing",
      automationWebLabel: "Automation - Web",
      automationMobileLabel: "Automation - Mobile",
      manualTitle: "MANUAL TESTING SERVICES FOR WEB & MOBILE APPLICATIONS",
      manualSubtitle: "Our technology stack for manual testing.",
      automationWebTitle: "AUTOMATION TESTING SERVICES FOR WEB APPLICATIONS",
      automationWebSubtitle: "Our technology stack for automation testing of web apps.",
      automationMobileTitle: "AUTOMATION TESTING SERVICES FOR MOBILE APPLICATIONS",
      automationMobileSubtitle: "Our technology stack for automation testing of mobile apps."
    },
    fr: {
      manualLabel: "Tests Manuels",
      automationWebLabel: "Automatisation - Web",
      automationMobileLabel: "Automatisation - Mobile",
      manualTitle: "SERVICES DE TESTS MANUELS POUR LES APPLICATIONS WEB ET MOBILES",
      manualSubtitle: "Notre pile technologique pour les tests manuels.",
      automationWebTitle: "SERVICES DE TESTS AUTOMATISÉS POUR LES APPLICATIONS WEB",
      automationWebSubtitle: "Notre pile technologique pour les tests automatisés d'applications web.",
      automationMobileTitle: "SERVICES DE TESTS AUTOMATISÉS POUR LES APPLICATIONS MOBILES",
      automationMobileSubtitle: "Notre pile technologique pour les tests automatisés d'applications mobiles."
    },
    pl: {
      manualLabel: "Testowanie Manualne",
      automationWebLabel: "Automatyzacja - Web",
      automationMobileLabel: "Automatyzacja - Mobilne",
      manualTitle: "USŁUGI TESTOWANIA MANUALNEGO DLA APLIKACJI WEB I MOBILNYCH",
      manualSubtitle: "Nasz stos technologiczny do testowania manualnego.",
      automationWebTitle: "USŁUGI TESTOWANIA AUTOMATYCZNEGO DLA APLIKACJI WEBOWYCH",
      automationWebSubtitle: "Nasz stos technologiczny do automatycznego testowania aplikacji webowych.",
      automationMobileTitle: "USŁUGI TESTOWANIA AUTOMATYCZNEGO DLA APLIKACJI MOBILNYCH",
      automationMobileSubtitle: "Nasz stos technologiczny do automatycznego testowania aplikacji mobilnych."
    }
  };

  const t = translations[language];

  const techTabs: TechTab[] = [
    {
      id: "manual",
      label: t.manualLabel,
      badge: "01",
      title: t.manualTitle,
      subtitle: t.manualSubtitle,
      technologies: technologyStacks?.manualTesting?.technologies || []
    },
    {
      id: "automation-web",
      label: t.automationWebLabel,
      badge: "02",
      title: t.automationWebTitle,
      subtitle: t.automationWebSubtitle,
      technologies: technologyStacks?.automationWeb?.technologies || []
    },
    {
      id: "automation-mobile",
      label: t.automationMobileLabel,
      badge: "03",
      title: t.automationMobileTitle,
      subtitle: t.automationMobileSubtitle,
      technologies: technologyStacks?.automationMobile?.technologies || []
    }
  ];

  const currentTab = techTabs.find(tab => tab.id === activeTab);

  if (!currentTab) return null;

  // Add icons to technologies dynamically
  const technologiesWithIcons = currentTab.technologies.map(tech => {
    let icon = tech.icon;

    // Assign icons based on technology name
    if (tech.name === "Burp Suite") icon = <BurpSuiteIcon />;
    if (tech.name === "Swagger") icon = <SwaggerIcon />;
    if (tech.name === "Postman") icon = <PostmanIcon />;
    if (tech.name === "JMeter") icon = <JMeterIcon />;
    if (tech.name === "Browsers DevTools") icon = <BrowserDevToolsIcon />;
    if (tech.name === "TestFairy") icon = <TestFairyIcon />;
    if (tech.name === "TestFlight") icon = <TestFlightIcon />;
    if (tech.name === "App Tester") icon = <AppTesterIcon />;

    return { ...tech, icon };
  });

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
              {currentTab.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-neutral-400"
            >
              {currentTab.subtitle}
            </motion.p>
          </div>

          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {technologiesWithIcons.map((tech, index) => (
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
              [{currentTab.badge}]
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}