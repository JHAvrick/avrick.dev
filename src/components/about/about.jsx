import React, { useState } from 'react';
import './about.css';
import Variants from "../variants";
import Tilt from 'react-tilt';
import { motion } from "framer-motion";
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


console.log(Variants.Page);

function About() {

    function handleButtonClicked(){
        window.location = "/skills"
    }

    return (
      <section className="about">

            <motion.div className="about__content" initial="initial" animate="enter" exit="exit" variants={Variants.Page} transition={{duration: 1.5, staggerChildren: 0.5}} > 
            
                    <hr className="about__border" style={{top: "-1px"}} />
                    <div className="about__header-container">
                        <h1 className="about__header">JOSHUA H. AVRICK</h1>
                        <div className="about__section-divider" style={{height: "50px"}}></div>
                        <h2 className="about__subheader"> FULL-STACK DEVELOPER </h2>
                    </div>
                    <hr className="about__border" style={{position: "initial"}} />

                    <div className="about__info-container">

                        <p> 
                            <a target="_blank" rel="noopener noreferrer" alt="Call Josh's Phone" href="tel:1-301-659-6235"> 
                                <MdPhone style={{marginRight: "10px"}} color="var(--fc-primary)" size={23} />
                                (301) 659-6235 
                            </a>
                         </p>

                        <div className="about__section-divider"></div>

                        <p> 
                            <a target="_blank" rel="noopener noreferrer" alt="Send Josh Email" href="mailto:josh@avrick.dev">
                                <MdEmail style={{marginRight: "10px"}} color="var(--fc-primary)" size={23} />
                                josh@avrick.dev
                            </a> 
                        </p>
                        
                        <div className="about__section-divider"></div>

                        <p> 
                            <a target="_blank" rel="noopener noreferrer" alt="Visit Josh's LinkedIn Profile" href="http://linkedin.com/in/JoshAvrick"> 
                                <FaLinkedin style={{marginRight: "10px"}} color="var(--fc-primary)" size={23} />
                                linkedin.com/in/JoshAvrick 
                            </a> 
                        </p>
                        
                        <div className="about__section-divider"></div>

                        <p> 
                            <a target="_blank" rel="noopener noreferrer" alt="Visit Josh's Github Profile" href="https://github.com/jhavrick"> 
                            <FaGithub style={{marginRight: "10px"}} color="var(--fc-primary)" size={23} />
                            github.com/jhavrick 
                            </a> 
                        </p> 
                    
                    </div>

                    <hr className="about__border" style={{position: "initial"}} />

                    <div className="about__description">
                        <div style={{width: "50%"}}>

                        <Tilt className="Tilt" options={{ max : 10, scale: 1.02 }} >
                            <svg id="baltimore-svg" width="479" height="476" viewBox="0 0 479 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M216.485 25.6269L227.333 99.2145" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M128.825 176.613H328.756C331.518 176.613 333.756 178.852 333.756 181.613V210.622" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M3.63855 280.105L6.75275 279.644C9.42731 279.247 11.9323 281.049 12.4076 283.711L13.5753 290.25C14.073 293.037 16.7833 294.855 19.5509 294.259L43.3171 289.137C46.1271 288.531 47.8478 285.687 47.1012 282.911C45.9599 278.667 44.8138 274.241 44.9766 274.241C45.2111 274.241 100.387 266.423 127.946 262.514H156.661C159.423 262.514 161.661 260.276 161.661 257.514V248.165C161.661 245.403 163.9 243.165 166.661 243.165H326.704C329.466 243.165 331.704 240.926 331.704 238.165V218.538C331.704 217.566 332.492 216.779 333.463 216.779V216.779" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M330.532 56.9969C369.179 73.0764 387.469 92.1416 412.563 120.2C414.264 122.101 417.126 122.426 419.203 120.944L467.739 86.3147" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M244.924 97.4554C220.104 98.5966 186.4 104.457 157.59 128.274C156.263 129.371 154.293 129.242 153.159 127.946V127.946" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M40.5789 3.05224L148.761 132.05" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M310.889 162.834V162.834C310.889 160.729 309.182 159.023 307.077 159.023H265.446H248.149" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M244.924 174.854H236.437C233.676 174.854 231.437 172.616 231.437 169.854V145.582C231.437 144.24 230.898 142.955 229.94 142.014L216.232 128.555C215.629 127.963 215.186 127.228 214.944 126.419L191.565 48.2016" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M428.16 116.219C447.509 144.95 460.996 173.975 466.859 213.847" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M446.043 166.645H437.152C436.442 166.645 435.741 166.796 435.094 167.088L389.132 187.837C386.692 188.938 385.562 191.768 386.49 194.278C397.116 223.027 398.346 249.498 391.887 280.088C391.225 283.222 393.054 286.372 396.132 287.259L468.032 307.957" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M340.793 130.584C352.077 139.048 359.29 147.24 366.871 158.034C367.456 158.866 367.765 159.861 367.765 160.878V245.51" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M333.463 212.967V294.183C333.463 295.495 333.978 296.754 334.898 297.689L342.195 305.11C345.333 308.301 350.761 306.079 350.761 301.604V220.02C350.761 217.258 348.522 215.02 345.761 215.02H337.861" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M250.494 366.006H260.446C263.208 366.006 265.446 363.767 265.446 361.006V285.985C265.446 283.223 263.208 280.985 260.446 280.985H254.321C251.56 280.985 249.321 278.746 249.321 275.985V264.567" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M244.924 3.34542V3.34542C244.924 5.28843 246.499 6.86355 248.442 6.86355H259.245C262.129 6.86355 264.415 9.29695 264.235 12.1754L262.823 34.771C262.652 37.5028 260.316 39.5895 257.583 39.4528L250.174 39.0824C247.318 38.9396 244.924 41.2167 244.924 44.0762V176.907" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M2.46582 139.966L55.4639 162.524C57.8309 163.532 60.5783 162.574 61.8114 160.316C73.5299 138.862 81.7898 123.992 97.5222 107.203C99.4053 105.194 102.566 105.169 104.536 107.093L110.398 112.822C112.333 114.714 112.413 117.801 110.577 119.79L110.308 120.081C108.404 122.144 108.571 125.369 110.677 127.224L115.533 131.502C117.552 133.281 117.801 136.338 116.098 138.42L114.586 140.267C112.767 142.491 113.192 145.787 115.515 147.477L116.837 148.438C119.082 150.071 119.567 153.219 117.919 155.451L114.852 159.607C113.188 161.861 113.701 165.042 115.989 166.66L126.712 174.24C128.037 175.177 128.825 176.699 128.825 178.322V220.574C128.825 223.335 131.064 225.574 133.825 225.574H144.95" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M3.05212 332.291L19.1912 326.381C21.777 325.434 23.1104 322.574 22.1738 319.985L20.6997 315.909C19.7166 313.191 21.236 310.208 24.0125 309.405L126.679 279.715C127.13 279.585 127.598 279.519 128.068 279.519H157.541C160.302 279.519 162.541 277.28 162.541 274.519V266.048C162.541 263.287 164.779 261.048 167.541 261.048H178.665" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M3.05212 349.881L126.419 297.218C127.039 296.953 127.707 296.816 128.382 296.816H141.416C144.177 296.816 146.416 294.578 146.416 291.816V211.786C146.416 210.476 146.93 209.219 147.848 208.284L160.508 195.384C161.434 194.441 162.697 193.902 164.019 193.887L210.82 193.346C212.016 193.332 213.168 192.89 214.066 192.1L216.482 189.974C218.462 188.231 221.455 188.326 223.321 190.192L229.972 196.843" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M182.184 474.482L206.598 390.142C207.364 387.496 210.126 385.968 212.775 386.725L219.029 388.512C221.895 389.33 224.836 387.476 225.333 384.537L227.219 373.377C227.624 370.98 226.247 368.64 223.955 367.83L203.312 360.531C200.828 359.653 198.089 360.849 197.033 363.264C194.302 369.51 189.474 380.336 188.927 380.079C147.882 360.729 144.364 349.881 144.657 347.243C144.718 346.699 144.921 198.615 144.947 178.796C144.949 177.374 145.557 176.072 146.617 175.125L161.368 161.954" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M149.348 475.361L166.051 436.651C167.058 434.319 169.654 433.112 172.087 433.846L211.808 445.832C214.734 446.715 217.761 444.79 218.201 441.765L221.418 419.643C221.782 417.141 223.956 415.305 226.484 415.364L246.976 415.846" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M467.152 88.3669L367.519 159.658C367.293 159.821 367.08 160.002 366.883 160.199L318.206 209.159C317.275 210.096 316.752 211.363 316.752 212.685V255.169C316.752 257.93 314.513 260.169 311.752 260.169H216.485" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M83.6763 474.482L161.135 366.916C161.29 366.701 161.462 366.498 161.65 366.31L226.463 301.211C227.396 300.274 227.92 299.006 227.92 297.683V264.567" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M127.946 227.626L127.379 310.996C127.367 312.749 126.438 314.367 124.931 315.262L104.936 327.127C102.579 328.526 101.781 331.566 103.217 333.901C129.827 377.174 169.476 402.263 219.523 413.394C219.841 413.465 220.168 413.504 220.494 413.511L242.669 413.983C245.388 414.041 247.562 416.262 247.562 418.982V473.895" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M456.891 3.34542L285.813 190.426C284.97 191.348 284.502 192.551 284.502 193.8V196.843" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M456.012 364.247L389.509 325.615C387.189 324.267 386.346 321.328 387.599 318.956L391.051 312.423C392.408 309.853 391.296 306.671 388.634 305.506L368.416 296.661C366.596 295.865 365.42 294.067 365.42 292.08V283.932C365.42 281.171 363.181 278.932 360.42 278.932H297.37C296.074 278.932 294.829 278.429 293.897 277.529L279.799 263.917C278.867 263.017 277.622 262.514 276.326 262.514H184.252C181.491 262.514 179.252 260.276 179.252 257.514V196.859C179.252 194.097 177.013 191.859 174.252 191.859H166.954C164.193 191.859 161.954 189.62 161.954 186.859V162.541" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M1 421.123L126.352 332.042C127.198 331.441 128.21 331.118 129.248 331.118H367.576C368.651 331.118 369.697 331.464 370.559 332.105L409.447 361.015C411.789 362.757 415.119 362.13 416.668 359.655L435.487 329.591C436.828 327.45 439.554 326.644 441.843 327.714L463.801 337.977C464.463 338.287 465.186 338.447 465.918 338.447H467.446" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M4.22522 71.3626L127.131 159.236C127.471 159.479 127.877 159.609 128.294 159.609H158.198C158.727 159.609 159.233 159.818 159.608 160.19L202.558 202.859C203.302 203.599 204.492 203.637 205.282 202.947L218.566 191.355C219.371 190.652 220.586 190.706 221.325 191.478L226.156 196.52C226.534 196.913 227.055 197.136 227.6 197.136H296.869C297.973 197.136 298.869 198.031 298.869 199.136V273.362" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M3.93164 177.2L13.4406 179.973C15.9974 180.719 17.5209 183.338 16.9052 185.929L12.2267 205.618C11.5495 208.467 13.4562 211.286 16.3534 211.719L122.6 227.572C122.841 227.608 123.084 227.626 123.328 227.627L263.681 227.909C266.439 227.915 268.671 230.152 268.671 232.909V242.269C268.671 245.031 270.91 247.269 273.671 247.269H361.637C364.381 247.269 366.612 249.481 366.637 252.224L366.853 276.517C366.873 278.662 368.257 280.555 370.294 281.224L380.663 284.626C383.377 285.516 386.284 283.956 387.042 281.202L391.219 266.032" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M282.157 3.93178L265.446 121.203L265.164 174.552C265.157 175.872 265.672 177.142 266.598 178.083L280.723 192.452C281.642 193.387 282.157 194.646 282.157 195.957V204.805C282.157 206.092 281.661 207.33 280.771 208.26L264.486 225.297C263.597 226.227 263.101 227.465 263.101 228.752V242.269C263.101 245.031 260.862 247.269 258.101 247.269H216.485" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M435.782 164.3L370.787 193.187C370.148 193.471 369.456 193.618 368.756 193.618H355.677C352.948 193.618 350.724 195.805 350.678 198.533L350.551 206C350.505 208.728 348.28 210.915 345.552 210.915H232.888C231.582 210.915 230.328 210.404 229.394 209.492L221.485 201.767C219.646 199.971 216.744 199.862 214.776 201.516L204.98 209.744C204.08 210.5 202.941 210.915 201.764 210.915H166.954C164.193 210.915 161.954 213.154 161.954 215.915V218.815C161.954 221.576 159.716 223.815 156.954 223.815H149.055" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M55.5309 437.541L195.081 298.281C196.021 297.343 196.549 296.07 196.549 294.742V269.567C196.549 266.805 198.788 264.567 201.549 264.567H259.86C262.621 264.567 264.86 262.328 264.86 259.567V196.565C264.86 193.804 262.621 191.565 259.86 191.565H230.862C229.541 191.565 228.273 191.042 227.336 190.11L174.204 137.246C172.282 135.334 169.186 135.302 167.225 137.174L160.532 143.563C159.049 144.978 158.99 147.326 160.399 148.814L161.552 150.031C162.405 150.931 162.321 152.365 161.368 153.159V153.159" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M215.313 473.309L230.212 371.35C230.247 371.11 230.265 370.869 230.265 370.627V160.801C230.265 159.475 229.738 158.203 228.8 157.265L196.932 125.397C196.485 124.95 196.128 124.423 195.877 123.844L155.726 30.8908C154.524 28.1074 156.056 24.9031 158.977 24.0909L209.893 9.93362C212.057 9.33206 213.554 7.36194 213.554 5.11637V3.63861" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M291.539 405.292L301.119 437.31C301.959 440.116 300.218 443.039 297.351 443.638L281.414 446.966C278.516 447.571 275.731 445.54 275.419 442.597L272.692 416.788C272.411 414.129 270.088 412.162 267.419 412.322L253.156 413.182C250.282 413.355 247.856 411.07 247.856 408.191V103.961C247.856 100.769 250.806 98.394 253.924 99.0761L300.14 109.186C302.469 109.695 304.834 108.49 305.789 106.305L312.297 91.4296C313.445 88.8075 316.554 87.6816 319.114 88.9615L330.825 94.8168" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M353.4 3.34542L299.861 127.88C299.593 128.504 299.455 129.176 299.455 129.855V140.227C299.455 141.561 298.922 142.84 297.974 143.779L269.546 171.941C268.61 172.868 267.345 173.388 266.028 173.388H249.924C247.162 173.388 244.924 175.627 244.924 178.388V236.112C244.924 238.874 242.685 241.112 239.924 241.112H166.059C163.63 241.112 161.661 239.144 161.661 236.715V236.715C161.661 234.286 159.693 232.317 157.264 232.317H148.762" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M103.026 100.387C150.93 53.9255 228.377 19.8764 322.504 54.6945C325.017 55.6243 327.866 54.4748 328.945 52.0219L350.761 2.46589" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M468.325 182.184L416.923 197.255C414.354 198.008 412.841 200.648 413.411 203.264C422.766 246.15 417.479 298.026 389.41 338.541C387.851 340.791 384.747 341.259 382.532 339.651L372.173 332.133C370.028 330.576 369.471 327.615 370.903 325.385L380.475 310.474C382.122 307.909 381.111 304.482 378.337 303.221L365.209 297.253C364.575 296.965 363.887 296.812 363.191 296.805L340.465 296.573C337.723 296.546 335.516 294.315 335.516 291.574V266.928C335.516 264.167 333.277 261.928 330.516 261.928H289.487C288.515 261.928 287.728 261.14 287.728 260.169V260.169" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M467.152 243.458H368.932C367.621 243.458 366.362 242.943 365.427 242.023L315.866 193.293C314.931 192.374 313.672 191.859 312.361 191.859H284.796" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M264.86 230.851V230.851C265.993 230.851 266.912 231.77 266.912 232.903V246.942C266.912 248.277 267.446 249.557 268.394 250.496L294.475 276.313C295.411 277.24 296.675 277.76 297.993 277.76H313.218C315.979 277.76 318.218 275.521 318.218 272.76V218.538C318.218 217.728 317.562 217.072 316.752 217.072V217.072" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M149.055 230.265H191.256C194.018 230.265 196.256 232.503 196.256 235.265V240.51C196.256 243.272 198.495 245.51 201.256 245.51H364.817C367.579 245.51 369.817 247.749 369.817 250.51V258.208C369.817 260.683 371.628 262.786 374.076 263.153L387.756 265.205C390.7 265.647 392.608 268.547 391.848 271.426L389.706 279.543C388.593 283.761 391.065 288.094 395.262 289.282L467.446 309.716" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M478 212.088L382.077 226.071C379.469 226.451 377.013 224.741 376.465 222.164L375.351 216.927C374.859 214.618 372.821 212.967 370.46 212.967H289.78C288.646 212.967 287.728 212.049 287.728 210.915V210.915" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M4.51807 2.46589L193.327 190.693C194.264 191.627 195.533 192.152 196.857 192.152H210.187C211.411 192.152 212.593 191.702 213.509 190.889L215.07 189.501C217.841 187.038 222.05 187.162 224.671 189.783L230.265 195.377" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M127.653 125.014C184.53 73.1217 250.494 63.1536 313.821 88.6601" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M5.39795 69.8967L22.2474 81.9998C24.4528 83.584 27.5197 83.111 29.1897 80.9697C49.759 54.5959 70.493 36.8864 85.4845 25.6753C87.7085 24.0121 90.8502 24.5405 92.4581 26.8049L157.337 118.176C158.801 120.238 158.495 123.069 156.623 124.77L147.755 132.832C145.607 134.785 145.568 138.152 147.672 140.154L160.55 152.409C161.447 153.262 161.955 154.446 161.955 155.684V155.684C161.955 156.883 162.431 158.033 163.279 158.881L176.029 171.631C176.966 172.568 178.238 173.095 179.564 173.095H210.036" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M3.34534 192.445L43.124 201.343C45.7814 201.937 48.4259 200.296 49.0725 197.651L49.9244 194.165C50.5885 191.449 53.3518 189.805 56.056 190.518L79.1689 196.611C81.5839 197.248 84.0983 196.005 85.0589 193.699L96.7596 165.618C97.536 163.755 99.3565 162.541 101.375 162.541H102.04C103.063 162.541 104.062 162.855 104.901 163.44L128.825 180.131" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M3.34534 245.217H5.96796C8.72938 245.217 10.968 242.978 10.968 240.217V217.901C10.968 214.842 13.6908 212.5 16.7158 212.957L41.6039 216.722C44.0487 217.092 45.8561 219.193 45.8561 221.666V240.217C45.8561 242.978 48.0947 245.217 50.8561 245.217H138.777C141.539 245.217 143.777 242.978 143.777 240.217V227.626" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M314.993 474.775L295.656 409.413C294.85 406.686 291.939 405.189 289.212 405.994C279.741 408.791 267.895 411.05 254.869 410.776C252.239 410.72 250.201 408.527 250.201 405.897V331.118" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M212.381 363.661V315.286" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M433.437 218.831C423.096 150.467 378.422 90.5467 302.722 65.8144C300.116 64.9631 298.606 62.2071 299.371 59.5751L302.68 48.2016" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M304.439 48.7879L292.349 88.211C291.567 90.7609 292.924 93.4756 295.433 94.3804L308.836 99.2145" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M127.653 125.307V159.609" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M199.188 245.51V245.51C199.188 246.482 199.976 247.269 200.947 247.269H208.261C211.022 247.269 213.261 249.508 213.261 252.269V253.41C213.261 256.171 215.499 258.41 218.261 258.41H292.696C295.457 258.41 297.696 260.648 297.696 263.41V265.097C297.696 269.51 292.396 271.76 289.222 268.693L280.398 260.169" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M109.476 3.63861L174.561 116.512" stroke="black" stroke-width="0.5"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-path" d="M375.388 1L380.83 4.57175C383.043 6.02357 383.741 8.94768 382.423 11.2423L354.191 60.3958C352.91 62.6261 353.53 65.4645 355.624 66.9575L381.544 85.4351" stroke="black" stroke-width="0.5"/>
                                    <rect className="baltimore-label-container" x="163" y="221" width="155" height="31" fill="#5B5B5B"/>
                                    <motion.path animate={{ pathLength: 1, pathOffset: 0 }} initial={{ pathLength: 0, pathOffset: 1 }} transition={{ duration: 2 }} className="baltimore-label" d="M183.08 243.779C183.891 242.979 184.301 242.002 184.301 240.85V239.268C184.301 238.652 184.164 238.057 183.9 237.49C183.715 237.139 183.5 236.807 183.246 236.514C183.5 236.24 183.715 235.918 183.9 235.547C184.164 234.98 184.301 234.385 184.301 233.76V232.188C184.301 231.035 183.891 230.059 183.08 229.248C182.26 228.438 181.283 228.027 180.15 228.027H177.396H176.791V228.643V232.188V233.76V235.732V237.305V239.268V240.85V244.385V245H177.396H180.15C181.283 245 182.26 244.6 183.08 243.779ZM180.15 242.207H179.584V240.85V239.268V237.91H180.15C180.521 237.91 180.834 238.047 181.107 238.311C181.371 238.584 181.508 238.896 181.508 239.268V240.85C181.508 241.221 181.371 241.543 181.107 241.807C180.834 242.08 180.521 242.207 180.15 242.207ZM179.584 235.117V233.76V232.188V230.83H180.15C180.521 230.83 180.834 230.967 181.107 231.23C181.371 231.504 181.508 231.816 181.508 232.188V233.76C181.508 234.131 181.371 234.453 181.107 234.717C180.834 234.99 180.521 235.117 180.15 235.117H179.584ZM197.029 239.697H195.711L196.365 235.127L197.029 239.697ZM197.537 242.373L197.957 244.492L198.054 245H198.65H200.476H201.316L201.17 244.287L198.054 228.535L197.957 228.027H197.361H195.379H194.783L194.685 228.535L191.57 244.287L191.423 245H192.263H194.089H194.685L194.783 244.492L195.203 242.373H197.537ZM196.365 236.484L195.798 239.375L196.365 236.484ZM209.239 228.027H208.634V228.643V244.385V245H209.239H214.581H215.196V244.385V242.812V242.207H214.581H211.427V228.643V228.027H210.821H209.239ZM224.458 230.83V244.385V245H225.073H226.645H227.261V244.385V230.83H229.009H229.614V230.215V228.643V228.027H229.009H226.645H225.073H222.71H222.095V228.643V230.215V230.83H222.71H224.458ZM237.684 228.027H237.079V228.643V244.385V245H237.684H239.266H239.871V244.385V228.643V228.027H239.266H237.684ZM248.107 245H250.9V237.344L253.391 245H255.334L257.824 237.344V245H260.617V228.027H257.912L254.367 238.945L250.812 228.027H248.107V245ZM271.939 228.027C270.894 228.027 270.005 228.398 269.283 229.141C268.541 229.873 268.179 230.762 268.179 231.797V241.24C268.179 242.275 268.541 243.164 269.283 243.896C270.005 244.639 270.884 245 271.939 245C272.974 245 273.853 244.639 274.595 243.896C275.328 243.154 275.699 242.275 275.699 241.24V231.797C275.699 230.762 275.328 229.883 274.595 229.141C273.853 228.398 272.964 228.027 271.939 228.027ZM271.939 230.83C272.193 230.83 272.418 230.928 272.613 231.113C272.798 231.309 272.896 231.533 272.896 231.797V241.24C272.896 241.514 272.798 241.738 272.613 241.924C272.408 242.119 272.183 242.207 271.939 242.207C271.675 242.207 271.451 242.119 271.255 241.924C271.06 241.738 270.972 241.514 270.972 241.24V231.797C270.972 231.533 271.06 231.309 271.255 231.113C271.441 230.928 271.666 230.83 271.939 230.83ZM285.614 245H286.22V244.385V238.877H286.591C286.962 238.877 287.275 239.014 287.548 239.277C287.812 239.541 287.948 239.863 287.948 240.234V243.438C287.948 243.711 287.968 243.994 287.997 244.277C288.017 244.57 288.095 244.805 288.212 245H291.005C290.81 244.648 290.722 244.121 290.751 243.438V240.234C290.751 239.189 290.4 238.271 289.696 237.48C290.4 236.699 290.751 235.781 290.751 234.727V232.188C290.751 231.045 290.341 230.068 289.53 229.248C288.71 228.438 287.734 228.027 286.591 228.027H285.614H284.032H283.427V228.643V233.154V236.689V244.385V245H284.032H285.614ZM286.22 230.83H286.591C286.962 230.83 287.275 230.967 287.548 231.23C287.812 231.494 287.948 231.816 287.948 232.188V234.727C287.948 235.098 287.812 235.42 287.548 235.684C287.275 235.957 286.962 236.084 286.591 236.084H286.22V230.83ZM299.124 228.027H298.518V228.643V244.385V245H299.124H304.593H305.208V244.385V242.812V242.207H304.593H301.311V237.91H303.02H303.626V237.305V235.732V235.117H303.02H301.311V230.83H304.593H305.208V230.215V228.643V228.027H304.593H299.124Z" fill="#E7E7E7"/>
                            </svg>
                            </Tilt>

                        </div>
                        <div style={{width: "50%"}}>
                            <p>Full-Stack Developer with a focus on web design patterns and application development. 
                                Proficient in modern JavaScript, including familiarity with current build/testing tools, 
                                component-based UI/UX libraries, and design best practices. </p>

                            <p>Capable of meeting and surpassing project requirements and seeking opportunities where 
                                I can utilize and extend current skills to solve challenging and unique problems. </p>

                            <p> Currently based in Charm City, Baltimore. </p>

                            <motion.button onClick={handleButtonClicked} style={{marginTop: "3.5rem", }} className="button" value="See More" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}> 
                                Learn More About Me
                            </motion.button>

                        </div>
                    </div>
                    <hr className="about__border" style={{top: "100%"}} />

            </motion.div>
      </section>
  );
}

export default About;
