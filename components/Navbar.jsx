'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/logo.png"
        alt="search"
        className="w-[64px] h-[64px] object-contain"
      />
      <h2 className="font-extrabold text-[44px] leading-[30.24px] pt-[15px] text-white">
        $FEET
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[44px] h-[44px] pt-[15px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
