import PackageCard from './PackageCard';

const ServiceSection = () => {
  const whatsappBaseURL = 'https://api.whatsapp.com/send?phone=+6281387934051';

  return (
    <div
      className='flex flex-col gap-4 items-center max-w-screen-xl mx-auto'
      id='service'
    >
      <h1 className='font-bold text-xl text-[#1a202c]'>Layanan Kami</h1>
      <h2 className='text-base font-semibold text-red-700 mb-6'>
        Hot Promo Spesial Tahun Baru
      </h2>
      <div className='flex flex-row flex-wrap justify-around'>
        <PackageCard
          title='Home Starter'
          speed='17'
          price='238'
          discounted='178'
          cta={whatsappBaseURL}
        />
        <PackageCard
          title='Home Basic'
          speed='20'
          price='249'
          discounted='189'
          cta={whatsappBaseURL}
          isPopuler
        />
        <PackageCard
          title='Premium'
          speed='30'
          price='349'
          discounted='289'
          cta={whatsappBaseURL}
        />
        <PackageCard
          title='Business'
          speed='50'
          price='899'
          discounted='599'
          cta={whatsappBaseURL}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
