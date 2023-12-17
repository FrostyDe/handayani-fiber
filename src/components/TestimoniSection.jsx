import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import TestimoniCard from './TestimoniCard';

const TestimoniSection = () => {
  return (
    <div
      className='relative flex flex-col gap-4 items-center max-w-screen-xl my-20 mx-auto'
      id='testimonial'
    >
      <div className='absolute -top-72 lg:-top-20 inset-0 -z-10'>
        <img
          src='/glass-tube.png'
          alt=''
          className='absolute -right-10 top-20 w-60 h-auto object-cover opacity-50'
        />
      </div>
      <h1 className='font-bold text-xl text-[#1a202c]'>Testimoni</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        modules={[Autoplay, Navigation]}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='w-full box-border my-6 px-14 flex items-center justify-center'
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <TestimoniCard
            desc='"Gue sih milih Handayani Fiber, bro! Koneksinya lancar banget, buat streaming atau main game lancar jaya! Harga juga oke, nggak nyiksa kocek. Paling asiknya lagi, customer servicenya ramah-ramah banget, beneran bantu jadi solusi. Makasih banyak, Handayani Fiber, udah ngebantu gue banget, deh!"'
            name='Irfan F'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoniCard
            desc='"Handayani Fiber, emang juaranya! Koneksi cepat dan stabil, bikin kerjaan gue jadi makin gampang. Harga juga nggak bikin jebol kantong, terus instalasinya juga simpel dan cepet! Terima kasih, Handayani Fiber, udah bikin hidup online gue lebih enjoy!"'
            name='Rizki H'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoniCard
            desc='"Aku udah coba beberapa penyedia internet sebelumnya, tapi Handayani Fiber yang paling oke. Instalasinya cepat dan mudah, koneksi internetnya juga nggak pernah kendur, meski cuaca lagi nggak bersahabat. Bener-bener puas banget!"'
            name='Dina R'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoniCard
            desc='"Cakep, Lancar, Aman. Intinya Oke bet Handayani fiber."'
            name='Lia F'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimoniCard
            desc='"Handayani Fiber benar-benar layanan yang istimewa. Sinyalnya stabil banget, bikin kerja remote jadi lebih lancar. Harga yang ditawarkan juga sebanding dengan kecepatan internet yang didapat. Terima kasih, Handayani Fiber, udah jadi bagian penting dalam rutinitas onlineku!"'
            name='Siti N'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimoniSection;
