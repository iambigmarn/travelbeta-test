import React from "react";
import { Img, Text, Button, Input, SelectBox, Grid, List } from "components";

const FooterNav = () => {
  return (
    <div className="bg-prim-100 text-white">
  <div className="lg:px-52 flex flex-col lg:flex-row justify-between items-start py-24 lg:py-28">
    <div className="w-full lg:w-2/5 flex justify-center lg:justify-start space-x-20 lg:space-x-0 px-11 lg:px-0">
      <div className="w-1/2 lg:w-1/3">
        <p className="text-prim-light-200 text-base leading-none font-bold">Services</p>
        <ul className="flex flex-col space-y-8 lg:space-y-3 mt-8 lg:mt-4">
          <li><a className="text-prim-light-200 text-base leading-none" href="/?tab=flights">Flights</a></li>
          <li><a className="text-prim-light-200 text-base leading-none" href="/?tab=hotels">Hotels</a></li>
          <li><a className="text-prim-light-200 text-base leading-none" href="/visa">Visa</a></li>
          <li><a className="text-prim-light-200 text-base leading-none" href="/deals">Deals</a></li>
          <li><a className="text-prim-light-200 text-base leading-none" href="/packages">Packages</a></li>
        </ul>
      </div>
      <div className="w-1/2 lg:w-2/3 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <p className="text-prim-light-200 text-base leading-none font-bold">Account</p>
          <ul className="flex flex-col space-y-8 lg:space-y-3 mt-8 lg:mt-4">
            <li><a className="text-prim-light-200 text-base leading-none" href="/user/login">My Account</a></li>
            <li><a className="text-prim-light-200 text-base leading-none" href="/affiliate">Affiliates</a></li>
          </ul>
        </div>
        <div className="mt-14 lg:mt-0">
          <p className="text-prim-light-200 text-base leading-none font-bold">Travelbeta</p>
          <ul className="flex flex-col space-y-8 lg:space-y-3 mt-8 lg:mt-4">
            <li><a className="text-prim-light-200 text-base leading-none" href="/about">About us</a></li>
            <li><a className="text-prim-light-200 text-base leading-none" href="/contact">Contact us</a></li>
            <li><a className="text-prim-light-200 text-base leading-none" href="/feedback">Feedback</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-2/6 flex justify-start lg:justify-end lg:items-center mt-14 lg:mt-0 lg:ml-24 px-11 lg:px-0">
      <div className="flex flex-col items-start lg:items-end">
        <div className="flex items-center space-x-3.5">
          <a target="_blank" href="https://www.facebook.com/travelbeta">
            <span className="w-7 lg:w-6 h-7 lg:h-6 rounded-full bg-prim-light-200 flex justify-center items-center">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(33, 37, 41)'}}>
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </span>
          </a>
          <a target="_blank" href="https://www.instagram.com/travelbeta">
            <span className="w-7 lg:w-6 h-7 lg:h-6 rounded-full bg-prim-light-200 flex justify-center items-center">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(33, 37, 41)'}}>
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>
          <a target="_blank" href="https://www.twitter.com/travelbeta">
            <span className="w-7 lg:w-6 h-7 lg:h-6 rounded-full bg-prim-light-200 flex justify-center items-center">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(33, 37, 41)'}}>
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </span>
          </a>
        </div>
        <div className="mt-12 lg:mt-10 flex items-center space-x-3.5">
          <span>
            <svg width={80} height={20} viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2186_13731)">
                <path d="M36.4098 7.89033C35.9549 7.64882 35.341 7.47727 34.604 7.47727C32.8773 7.47727 31.8389 8.28873 31.4214 8.61715L32.0432 4.94922H29.5942L27.89 14.9937H30.339L31.2668 9.52002C31.8784 9.05053 32.6211 8.65214 33.4337 8.65214C33.8557 8.65214 34.2203 8.77967 34.4595 8.99297C34.9065 9.39136 34.8241 9.98839 34.7078 10.6746L33.9754 14.9971H36.4244L37.2415 10.178C37.3497 9.53808 37.5203 8.53025 36.4143 7.89823L36.4098 7.89033ZM42.8879 7.3915C40.1003 7.3915 39.1522 8.64424 38.6218 9.34396L39.2064 9.58548C39.6387 9.20176 40.414 8.50429 41.9828 8.50429C42.6802 8.50429 43.6982 8.68938 44.0029 9.45795C44.1248 9.76154 44.1214 10.0866 44.0901 10.406H44.1428L43.7591 12.6632H43.7171L43.5737 13.5073C43.0557 13.7489 42.4226 14.0344 41.5536 14.0344C40.3234 14.0344 39.9735 13.3663 40.0864 12.7365C40.2433 11.8111 41.2714 11.3709 42.3549 11.3709C42.6878 11.3709 42.9733 11.4073 43.2352 11.4631L43.4146 10.4068C42.9654 10.3125 42.5106 10.2476 41.9023 10.2476C39.7128 10.2476 37.7716 11.1866 37.4895 12.866C37.2683 14.1751 38.3066 15.2022 40.2207 15.2022C41.97 15.2022 43.0083 14.4911 43.4598 14.1639L43.3209 14.9889H45.691L46.4359 10.5873C46.5487 9.91921 46.6943 8.95087 45.8986 8.22857C45.4382 7.80197 44.4766 7.3889 42.8853 7.3889L42.8879 7.3915ZM64.3312 14.3662C64.1484 14.3662 63.4125 14.3662 63.0784 13.7263C62.9362 13.4848 62.8764 13.1857 62.98 12.5751L63.5421 9.25706H66.2168L66.4787 7.71089H63.8039L64.1391 5.73585H61.69L61.3549 7.71089H58.7817L56.547 11.3337L56.1554 12.0176C56.0189 11.6328 56.011 11.5617 55.8857 11.2208L54.6104 7.71089H53.8023L50.631 12.0108C50.5628 11.6553 50.5402 11.5696 50.4673 11.2423L49.5215 7.70976H46.9709L49.2168 15.0456H50.1163L53.3102 10.8021L55.0708 15.0456H55.9523L59.7331 9.25593H61.0874L60.4757 12.8787C60.367 13.5186 60.3504 14.154 60.9429 14.6732C61.5659 15.2285 62.5342 15.2702 62.9744 15.2702C64.182 15.2702 64.9043 14.9429 65.5024 14.6867L65.2858 14.2319C64.9799 14.3031 64.7102 14.3741 64.3242 14.3741L64.3312 14.3662ZM69.376 10.4274C69.3433 10.4761 69.2731 10.6294 69.192 11.1057C69.1599 11.2919 69.1434 11.4307 69.1352 11.538H75.6584C75.7747 10.7412 75.9857 9.39362 74.8549 8.3666C73.8651 7.48404 72.4171 7.38472 71.6045 7.38472C68.2752 7.38472 66.2211 9.12276 65.86 11.2558C65.4819 13.4904 66.9581 15.2962 70.3405 15.2962C73.5683 15.2962 74.584 13.8064 75.1145 13.0051L74.5468 12.7771C73.7951 13.4171 73.0006 14.0863 71.2964 14.0863C68.8022 14.0863 68.4749 12.6079 68.4298 11.8517C68.4185 11.822 68.3765 11.67 68.459 11.1655C68.5436 10.6497 68.652 10.4522 68.6735 10.4161C69.0696 9.57984 69.5989 8.58781 71.3482 8.58781C73.1878 8.58781 73.1878 9.78412 73.1878 10.4387H69.3845L69.376 10.4274ZM25.9251 5.73246H23.4873L22.2798 12.8765C22.1712 13.5164 22.1545 14.1518 22.7481 14.6709C23.3711 15.2262 24.3394 15.268 24.7796 15.268C25.9872 15.268 26.7095 14.9407 27.3076 14.6845L27.091 14.2296C26.7851 14.3009 26.5165 14.3719 26.1305 14.3719C25.9466 14.3719 25.2118 14.3719 24.8778 13.7319C24.7356 13.4904 24.6746 13.1913 24.7787 12.5808L25.3407 9.26271H27.3158L27.5765 7.72782H25.6014L25.9251 5.73246Z" fill="white" />
                <path d="M9.97757 0.780273C4.8199 0.780273 0.632812 4.96736 0.632812 10.125C0.632812 15.2827 4.8199 19.4698 9.97757 19.4698C15.1352 19.4698 19.3223 15.2827 19.3223 10.125C19.3223 4.96736 15.1352 0.780273 9.97757 0.780273ZM9.97757 17.5963C5.84692 17.5963 2.49499 14.2444 2.49499 10.1137C2.49499 5.98309 5.84692 2.63117 9.97757 2.63117C14.1082 2.63117 17.4601 5.98309 17.4601 10.1137C17.46 14.2444 14.1082 17.5963 9.97757 17.5963ZM10.8816 5.52037H8.43253L7.22493 12.6644C7.11636 13.3043 7.09966 13.9397 7.69217 14.4588C8.31402 15.0141 9.28349 15.0559 9.72364 15.0559C10.9312 15.0559 11.6535 14.7286 12.2517 14.4724L12.035 14.0164C11.7291 14.0876 11.4594 14.1598 11.0734 14.1598C10.8906 14.1598 10.1548 14.1598 9.8207 13.5187C9.67849 13.2772 9.61755 12.9781 9.72206 12.3675L10.2841 9.04948H12.2591L12.5198 7.51459H10.5448L10.8816 5.52037Z" fill="white" />
                <path d="M76.9269 6.41204H76.3141V7.99207H75.8062V6.41204H75.1934V6.03058H76.9314V6.41204H76.9269ZM79.2969 7.99207H78.7891V6.67162L78.4268 7.52596H78.0781L77.7158 6.67162V7.99207H77.2373V6.02832H77.8275L78.2677 7.01471L78.7056 6.02832H79.2969V7.99207Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2186_13731"><rect width={79} height="18.7347" fill="white" transform="translate(0.464844 0.780273)" /></clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg width={31} height={21} viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2186_13735)">
                <path d="M4.73772 20.0083L5.9615 13.9032H7.95274L6.73587 20.0083H4.73772ZM10.746 18.0101H12.0113L11.6863 15.77L10.746 18.0101ZM7.95274 20.0083L10.9673 13.9032H12.9308L14.1685 20.0083H12.3224L12.2118 19.2823H10.2482L9.93707 20.0083H7.95274ZM16.0007 20.0083L16.6852 15.4174H14.9428L15.2401 13.8755H20.5916L20.2943 15.4174H18.6349L17.9643 20.0083H16.0007ZM22.6935 18.0101H23.9587L23.6338 15.77L22.6935 18.0101ZM19.9071 20.0083L22.9147 13.9032H24.8783L26.1159 20.0083H24.256L24.1662 19.2823H22.2026L21.8914 20.0083H19.9071ZM30.4648 7.00298H21.0963C20.7506 8.71766 19.5614 10.1489 17.1899 11.1376C17.4595 11.9534 18.3791 12.7071 19.3332 12.7071H24.4151C25.1894 12.7071 25.8048 12.0571 26.0537 11.5317H20.8889C20.5709 11.4764 20.557 11.2205 20.8751 11.1929H25.95C26.6068 11.1929 27.2014 10.6329 27.5471 10.0244H21.6356C21.3383 9.97602 21.3383 9.72711 21.6356 9.67871H27.5955C28.197 9.67871 28.7432 8.9804 28.9714 8.51024H22.4307C22.1058 8.46876 22.1058 8.16454 22.4307 8.15763H29.0889C29.6075 8.15763 30.1122 7.59068 30.4648 7.00298ZM0.464844 7.00298H9.83336C10.1721 8.71766 11.3683 10.1489 13.7329 11.1376C13.4632 11.9534 12.5437 12.7071 11.5895 12.7071H6.51462C5.74025 12.7071 5.1249 12.0571 4.876 11.5317H10.0408C10.3519 11.4764 10.3727 11.2205 10.0546 11.1929H4.97279C4.31596 11.1929 3.72135 10.6329 3.38257 10.0244H9.30098C9.59828 9.97602 9.59828 9.72711 9.30098 9.67871H3.34108C2.73956 9.67871 2.19335 8.9804 1.96519 8.51024H8.50587C8.83083 8.46876 8.83083 8.16454 8.50587 8.15763H1.84765C1.32218 8.15763 0.81746 7.59068 0.464844 7.00298ZM12.4261 1.85894C12.7718 2.15624 13.159 2.41898 13.5739 2.58491C13.9265 1.89351 14.4174 1.2989 14.9843 0.773438C14.0509 0.89789 13.1728 1.25051 12.4261 1.85894ZM10.7668 5.26756H12.8548C12.9032 4.41022 13.083 3.65659 13.4217 2.88222C12.9585 2.6748 12.5575 2.42589 12.1703 2.09402C11.3061 2.95827 10.829 4.07143 10.7668 5.26756ZM15.3024 3.31089V5.26756H13.2143C13.2282 4.5001 13.4079 3.7119 13.7329 2.99976C14.2307 3.17952 14.77 3.29706 15.3024 3.31089ZM18.5036 1.85894C18.1648 2.15624 17.7638 2.41898 17.3558 2.58491C16.9825 1.87968 16.5192 1.31273 15.9385 0.780352C16.8788 0.89789 17.7568 1.25051 18.5036 1.85894ZM20.156 5.26756H18.0749C18.0472 4.42405 17.8536 3.63585 17.5218 2.88222C17.9643 2.6748 18.386 2.41206 18.7525 2.09402C19.6513 2.99284 20.1145 4.09909 20.156 5.26756ZM15.6412 3.31089V5.26756H17.7154C17.7154 4.47936 17.5218 3.72573 17.1968 2.99976C16.699 3.17952 16.1666 3.29706 15.6412 3.31089ZM12.4261 9.02188C12.7718 8.75223 13.1728 8.45493 13.5739 8.30974C13.9472 9.00805 14.4105 9.58192 14.9843 10.1005C14.0509 9.97602 13.159 9.6234 12.4261 9.02188ZM10.7668 5.60635H12.8548C12.9032 6.4706 13.083 7.23115 13.4217 8.01243C12.9585 8.21985 12.5575 8.46876 12.1703 8.79372C11.3199 7.93638 10.829 6.82322 10.7668 5.60635ZM15.3024 7.56993V5.60635H13.2143C13.2282 6.39455 13.4079 7.17583 13.7329 7.87415C14.2307 7.69439 14.77 7.58376 15.3024 7.56993ZM18.5036 9.02188C18.1786 8.73841 17.7638 8.47567 17.3558 8.30974C16.9825 9.00805 16.5192 9.58192 15.9385 10.1005C16.8788 9.97602 17.7568 9.6234 18.5036 9.02188ZM20.156 5.60635H18.0749C18.0472 6.4706 17.8606 7.23806 17.5218 8.01243C17.9643 8.21985 18.3653 8.46876 18.7525 8.79372C19.6098 7.93638 20.1145 6.79556 20.156 5.60635ZM15.6412 7.56993V5.60635H17.7154C17.7154 6.39455 17.5218 7.16201 17.1968 7.87415C16.7128 7.69439 16.1528 7.58376 15.6412 7.56993ZM15.3024 0.973945C14.7354 1.43027 14.2307 2.05253 13.8988 2.70245C14.3482 2.85456 14.8253 2.97901 15.3024 2.97901V0.973945ZM15.6412 0.973945C16.1943 1.43027 16.699 2.03179 17.0309 2.70245C16.5815 2.86839 16.1044 2.97901 15.6412 2.97901V0.973945ZM15.3024 9.90688C14.7354 9.45747 14.2307 8.8352 13.8988 8.17146C14.3482 8.01243 14.8253 7.92255 15.3024 7.92255V9.90688ZM15.6412 9.92071C16.1943 9.45747 16.699 8.8352 17.0309 8.17146C16.5815 8.02626 16.1044 7.92255 15.6412 7.92255V9.92071Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2186_13735"><rect width={30} height="19.2279" fill="white" transform="translate(0.464844 0.780273)" /></clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <p className="w-36 lg:w-full text-sm text-prim-light-200 mt-2">© 2023 Travelbeta All Rights Reserved.</p>
        <p className="w-40 lg:w-full text-sm flex flex-col lg:flex-row"><a className="text-prim-light-200 lg:pl-2" href="/terms">Terms and Conditions</a></p>
      </div>
    </div>
  </div>
</div>


    /* <footer className="bg-gray_901 sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between max-w-[1002px] mb-[138px] sm:mb-[73px] md:mb-[94px] ml-[auto] mr-[auto] sm:mt-[50px] md:mt-[64px] mt-[94px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                    <Text
                      className="font-bold text-gray_52 w-[auto]"
                      variant="body1"
                    >
                      Services
                    </Text>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-white_A700_b2"
                            variant="body1"
                          >
                            Flights
                          </Text>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Hotels
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Visas
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal leading-[18.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Vacation
                            <br />
                            Packages
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal leading-[18.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Protocol
                            <br />
                            Services
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Blue Ribbon
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                    <Text
                      className="font-bold text-gray_52 w-[auto]"
                      variant="body1"
                    >
                      Account
                    </Text>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-white_A700_b2 w-[auto]"
                        variant="body1"
                      >
                        My Account
                      </Text>
                      <Text
                        className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700_b2 w-[auto]"
                        variant="body1"
                      >
                        Affiliate
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                    <Text
                      className="font-bold text-gray_52 w-[auto]"
                      variant="body1"
                    >
                      Travelbeta
                    </Text>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[auto]">
                          <Text
                            className="cursor-pointer font-normal not-italic text-white_A700_b2"
                            variant="body1"
                          >
                            About us
                          </Text>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Contact us
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            FAQ’s
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Feedback
                          </a>
                        </li>
                        <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                            rel="noreferrer"
                          >
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start sm:mt-[46px] md:mt-[59px] mt-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                  <Img
                    src="images/img_eye.svg"
                    className="max-w-[100%] w-[37%]"
                    alt="eye"
                  />
                  <div className="flex flex-col items-end justify-start sm:mt-[20px] md:mt-[26px] mt-[39px] w-[100%]">
                    <Img
                      src="images/img_frame1278.svg"
                      className="max-w-[100%] sm:w-[100%] w-[47%]"
                      alt="Frame1278"
                    />
                    <Text
                      className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700_b2 w-[100%]"
                      variant="body1"
                    >
                      <span className="text-white_A700_b2 text-[14px] font-roboto">
                        ©{" "}
                      </span>
                      <span className="text-white_A700_b2 text-[14px] font-metropolis">
                        2021 Travelbeta All Rights Reserved.
                        <br />
                        Privacy Policy | Terms and Conditions
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
    </footer> */
  );
};

export default FooterNav;
