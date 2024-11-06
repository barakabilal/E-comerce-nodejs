import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from './useropiniondata';

  
  
  const TestimonialCarousel = () => (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="p-4 text-center">
            <p className="text-lg">"{testimonial.text}"</p>
            <h4 className="font-bold mt-4">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
  
  export default TestimonialCarousel;
  