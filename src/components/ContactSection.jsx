import { useState } from 'react';
import ReactGA from 'react-ga';

const ContactSection = () => {
  const [message, setMessage] = useState('');

  const whatsappBaseURL =
    'https://api.whatsapp.com/send/?phone=%2B6281387934051&type=phone_number&app_absent=0';

  const handleOnClick = () => {
    ReactGA.event({
      category: 'Click Event',
      action: `Klik Kirim Pesan ${message && message}`,
    });
  };

  return (
    <div
      className='relative flex flex-col gap-4 items-center max-w-screen-xl my-20 mx-auto'
      id='contact'
    >
      <div className='absolute -top-72 lg:-top-20 inset-0 -z-10'>
        <img
          src='/glass-sphere.png'
          alt=''
          className='absolute -left-10 top-56 w-60 h-auto object-cover opacity-50'
        />
      </div>
      <h1 className='font-bold text-xl text-[#1a202c]'>Hubungi Kami</h1>
      <section className='container mx-auto px-4 py-8'>
        <div className='flex flex-wrap -mx-2'>
          <div className='w-full md:w-1/2 px-2 mb-4 md:mb-0'>
            <form className='bg-white rounded-lg px-8 pt-6 pb-8 mb-4'>
              <h2 className='text-xl mb-4 font-semibold'>Butuh Bantuan?</h2>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-base font-bold mb-4'
                  htmlFor='message'
                >
                  Pesan Kamu
                </label>
                <textarea
                  id='message'
                  className='appearance-none border rounded-lg w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  rows='5'
                  placeholder='Apa yang ingin kamu tanyakan?'
                  onChange={(e) => {
                    e.preventDefault();
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className='flex items-center justify-between'>
                <a
                  href={`${whatsappBaseURL}&text=${message}`}
                  onClick={handleOnClick}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline'
                >
                  Kirim
                </a>
              </div>
            </form>
          </div>

          <div className='w-full md:w-1/2 px-2'>
            <div className='bg-blue-700 text-white rounded-2xl px-8 pt-6 pb-8'>
              <div className='my-4'>
                <h2 className='text-xl mb-4 font-semibold'>
                  Ingin Tau Lebih Lanjut?
                </h2>
                <span className='text-sm'>
                  Hubungi kontak kami aktif 24/7 atau kunjungi kantor kami di
                  lokasi tertera
                </span>
              </div>
              <div className='mb-4 cursor-pointer'>
                <a
                  href={`${whatsappBaseURL}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <strong>WhatsApp: </strong> +62 813 - 8793 - 4051
                </a>
              </div>

              <p>
                <strong>Lokasi: </strong> Jl. Taman Induk NO.14A, Cipayung, Kec.
                Cipayung, Kota Depok, Jawa Barat, 16437
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
