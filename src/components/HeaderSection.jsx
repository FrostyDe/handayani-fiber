import { motion } from 'framer-motion';
import ReactGA from 'react-ga';

const HeaderSection = () => {
  // Define variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const whatsappBaseURL =
    'https://api.whatsapp.com/send/?phone=%2B6281387934051&type=phone_number&app_absent=0';

  const handleOnClick = () => {
    ReactGA.event({
      category: 'Click Event',
      action: `Klik WA header`,
    });
  };

  return (
    <div className='relative w-screen h-full pt-10' id='home'>
      <div className='absolute -top-20 inset-0 blur -z-10 bg-gradient-to-b from-blue-200 via-cyan-200 to-transparent'>
        <img
          src='/glass-sphere.png'
          alt=''
          className='absolute left-20 top-20 w-60 h-auto object-cover opacity-50'
        />
      </div>

      <motion.div
        className='max-w-screen-xl m-auto flex flex-col-reverse lg:flex-row px-4 sm:px-8 lg:px-24 py-12 items-center justify-between'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <div className='text-center lg:text-left flex flex-col items-center lg:items-start gap-10 align-baseline flex-1'>
          <motion.h1
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a202c]'
            variants={containerVariants}
          >
            Internet cepat, stabil, dan tanpa batasan quota
          </motion.h1>
          <motion.span
            className='text-base text-[#1a202c] max-w-md mx-auto lg:mx-0'
            variants={containerVariants}
          >
            Handayani Fiber menghadirkan internet sehat cepat anti buffer untuk
            keluarga di rumah
          </motion.span>
          <motion.a
            className='mt-0 bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg w-fit'
            variants={containerVariants}
            href={`${whatsappBaseURL}`}
            onClick={handleOnClick}
            target='_blank'
            rel='noopener noreferrer'
          >
            Hubungi Kami
          </motion.a>
        </div>
        <motion.img
          className='w-32 h-auto mx-auto mb-4 lg:w-44 lg:mb-0 lg:flex-1'
          src='/illus-1.png'
          alt=''
          variants={containerVariants}
        />
      </motion.div>
    </div>
  );
};

export default HeaderSection;
