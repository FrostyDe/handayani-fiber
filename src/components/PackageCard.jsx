import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const PackageCard = ({ title, speed, price, discounted, cta, isPopuler }) => {
  // Prefill message for WhatsApp
  const prefillMessage = encodeURIComponent(
    `Halo, saya ingin tau lebih lanjut tentang Paket ${title} dengan kecepatan ${speed} Mbps seharga $${
      discounted || price
    } ribu per bulan.`
  );

  const renderTextColor = () => {
    if (title.toLowerCase() === 'home starter') {
      return 'text-cyan-700';
    }
    if (title.toLowerCase() === 'home basic') {
      return 'text-blue-700';
    }
    if (title.toLowerCase() === 'premium') {
      return 'text-indigo-700';
    }
    if (title.toLowerCase() === 'business') {
      return 'text-violet-700';
    }
  };

  const handleOnClick = () => {
    ReactGA.event({
      category: 'Click Event',
      action: `Klik pilih paket ${title}`,
    });
  };

  return (
    <div
      className={`max-w-[260px] rounded-xl relative overflow-hidden shadow-lg py-6 px-8 min-h-72 h-full bg-white m-4 flex flex-col justify-between ${
        isPopuler ? 'border-2 border-blue-500' : ''
      }`}
    >
      {isPopuler && (
        <div className='absolute top-0 right-4 bg-blue-500 text-white p-1 rounded-b-lg'>
          Populer
        </div>
      )}
      <img src='/rocket.png' className='w-16 mx-auto my-4' alt='' />
      <div className='flex flex-col'>
        <h1 className={`font-bold text-lg py-4 text-center text-gray-800`}>
          Paket {title}
        </h1>
        <p className={`text-2xl font-bold text-center ${renderTextColor()}`}>
          {speed} Mbps
        </p>
      </div>
      <div className='my-4 text-center font-normal text-sm'>
        <ul>
          <li className='mb-1'>Gratis Fiber Optik</li>
          <li className='mb-1'>Free Bandwidth selama promo berlangsung</li>
          <li className='mb-1'>No FUP</li>
          <li className='mb-1'>Belum Termasuk PPN 11%</li>
        </ul>
      </div>
      <div className='my-4'>
        <p className='text-red-600 text-center font-medium line-through'>
          Rp. {price} k
        </p>
        <p className='text-gray-800 text-center font-bold text-2xl'>
          Rp. {discounted} k
        </p>
      </div>
      <a
        href={`${cta}&text=${prefillMessage}`}
        target='_blank'
        rel='noopener noreferrer'
        onClick={handleOnClick}
      >
        <button className='bg-blue-700 hover:bg-blue-800 text-base text-white w-full font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>
          Pilih Paket
        </button>
      </a>
    </div>
  );
};

PackageCard.propTypes = {
  title: PropTypes.string.isRequired,
  speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discounted: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  cta: PropTypes.string.isRequired,
  isPopuler: PropTypes.bool,
};

export default PackageCard;
