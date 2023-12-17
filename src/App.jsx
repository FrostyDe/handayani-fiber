import ContactSection from './components/ContactSection';
import HeaderSection from './components/HeaderSection';
import NavigationSection from './components/NavigationSection';
import ServiceSection from './components/ServiceSection';
import TestimoniSection from './components/TestimoniSection';
import smoothscroll from 'smoothscroll-polyfill';
import { FaWhatsapp } from 'react-icons/fa';
import ReactGA from 'react-ga';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);

function App() {
  const whatsappBaseURL =
    'https://api.whatsapp.com/send/?phone=%2B6281387934051&type=phone_number&app_absent=0';

  const handleOnClickWa = () => {
    ReactGA.event({
      category: 'Click Event',
      action: 'Klik whatsapp floating icon',
    });
  };

  smoothscroll.polyfill();
  return (
    <div className='overflow-x-hidden'>
      <NavigationSection />
      <HeaderSection />
      <ServiceSection />
      <TestimoniSection />
      <ContactSection />
      <div className='fixed z-50 cursor-pointer right-10 bottom-10 text-3xl w-12 h-12 p-2 flex items-center justify-center bg-green-500 rounded-full text-white'>
        <a
          href={whatsappBaseURL}
          onClick={handleOnClickWa}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaWhatsapp className='w-10' />
        </a>
      </div>
    </div>
  );
}

export default App;
