"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Install this package if you haven't yet
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger menu icon
import { IoClose } from 'react-icons/io5'; // Close menu icon
const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};
const menuVariants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 }
};
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    console.log("clicked")
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    console.log("clicked")
    setIsMenuOpen(false);
  };
  return (<>
    <nav className="flex md:justify-between md:items-center">
      <ul className="flex gap-6">
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="cursor-pointer uppercase hidden md:block"
        >
          <Link href="#about">à propos</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="cursor-pointer uppercase hidden md:block"
        >
          <Link href="#contact">Contact</Link>
        </motion.li>
        <div className="md:hidden hover:cursor-pointer" onClick={openMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </ul>
    </nav>
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center z-10 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu}
        >
          <motion.nav
            className="min-h-0 bg-browney p-8 rounded-md text-honolulu flex flex-col justify-center items-center gap-10 pb-12 w-3/4 h-1/2"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ damping: 300 }}
          >
            <button onClick={closeMenu} className="hover:cursor-pointer self-end z-50">
              <IoClose size={30} />{" "}
            </button>
            <ul className="flex flex-col gap-6 mt-4">
              <motion.li
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                animate="visible"
                className="cursor-pointer"
              >
                <Link href="#about" className='uppercase'>à propos</Link>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                animate="visible"
                className="cursor-pointer"
              >
                <Link href="#contact">Contact</Link>
              </motion.li>
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
};

export default Navbar;
