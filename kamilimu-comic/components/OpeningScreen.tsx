import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, Variants } from 'framer-motion'; // <-- 1. IMPORT THE 'Variants' TYPE

const OpeningScreen: FC = () => {
  const router = useRouter();
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleStart = () => {
    router.push('/comic');
  };
  
  // 2. EXPLICITLY TYPE YOUR VARIANT OBJECTS WITH 'Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#fdf6e3] relative overflow-hidden">
      
      
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/opening-bg.png')" }}
        animate={{
          x: -mousePosition.x / 50,
          y: -mousePosition.y / 50,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/opening-character.png')" }}
        animate={{
          x: -mousePosition.x / 35,
          y: -mousePosition.y / 35,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/images/opening-fog.png')" }}
        animate={{
          x: -mousePosition.x / 20,
          y: -mousePosition.y / 20,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
      />

      
      <motion.div
        className="relative z-10 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          KamiLimu: Month 5
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-10 drop-shadow-md"
          variants={itemVariants}
        >
          Follow the journey of <span className="font-semibold">Amanda.</span>
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleStart}
            className="cursor-pointer px-10 py-4 bg-gray-800 text-white font-bold rounded-full shadow-xl"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            Enter the Story
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OpeningScreen;