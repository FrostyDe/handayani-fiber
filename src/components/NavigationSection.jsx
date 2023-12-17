import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const NavigationSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for the mobile menu button
  const mobileMenuVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45, transition: { duration: 0.25 } },
  };

  const smoothScrollTo = (element) => {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * percent);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  };

  const handleNavLinkClick = (sectionId, event) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      smoothScrollTo(section);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='bg-transparent fixed top-0 w-screen z-10 backdrop-blur-sm'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-20'>
          <div className='flex items-center'>
            <a href='#' className='flex-shrink-0 flex items-center'>
              <img
                className='block lg:hidden h-10 w-auto'
                src='/logo.png'
                alt='Handayani'
              />
              <img
                className='hidden lg:block h-10 w-auto'
                src='/logo.png'
                alt='Handayani'
              />
            </a>
          </div>
          <div className='flex items-center'>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <a
                  href='#home'
                  className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  onClick={(e) => handleNavLinkClick('#home', e)}
                >
                  Beranda
                </a>
                <a
                  href='#service'
                  className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                  onClick={(e) => handleNavLinkClick('#service', e)}
                >
                  Layanan
                </a>
                <a
                  href='#testimonial'
                  onClick={(e) => handleNavLinkClick('#testimonial', e)}
                  className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Testimoni
                </a>
                <a
                  href='#contact'
                  onClick={(e) => handleNavLinkClick('#contact', e)}
                  className='text-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Kontak
                </a>
              </div>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            {/* Mobile menu button */}
            <motion.button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-controls='mobile-menu'
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              variants={mobileMenuVariants}
            >
              <span className='sr-only'>Open main menu</span>
              {isMobileMenuOpen ? (
                <IoClose className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <IoMenu className='block h-6 w-6' aria-hidden='true' />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial='hidden'
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, height: 0 },
          visible: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.25, ease: 'easeInOut' },
          },
        }}
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <a
            href='#home'
            onClick={(e) => handleNavLinkClick('#home', e)}
            className='text-gray-700 block px-3 py-2 rounded-md text-base font-medium'
          >
            Beranda
          </a>
          <a
            href='#service'
            onClick={(e) => handleNavLinkClick('#service', e)}
            className='text-gray-700 block px-3 py-2 rounded-md text-base font-medium'
          >
            Layanan
          </a>
          <a
            href='#testimonial'
            onClick={(e) => handleNavLinkClick('#testimonial', e)}
            className='text-gray-700 block px-3 py-2 rounded-md text-base font-medium'
          >
            Testimoni
          </a>
          <a
            href='#contact'
            onClick={(e) => handleNavLinkClick('#contact', e)}
            className='text-gray-700 block px-3 py-2 rounded-md text-base font-medium'
          >
            Kontak
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavigationSection;
