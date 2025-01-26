import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from './useropiniondata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
  
  
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
          <div className="p-4 text-center text-white">
            <p className="text-lg text-white">"{testimonial.text}"</p>
            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
            <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
            <h4 className="font-bold mt-4 text-white">{testimonial.name}</h4>
            <p className="text-sm text-white">{testimonial.location}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
  
  export default TestimonialCarousel;
  