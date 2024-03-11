import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.scss';
import sprite from '../../assets/icons/sprite.svg';
import { useMedia } from '../../hooks/useMedia';

const Slider = ({ chunkedData, currentPage }) => {
  const { isMobile, isTablet } = useMedia();
  const dynamicSpaceBeetwen = isMobile ? 30 : isTablet ? 50 : 100;

  const slides = chunkedData.map((cards, idx) => {
    return <SwiperSlide key={idx}>{currentPage(cards)}</SwiperSlide>;
  });

  return (
    <Swiper
      spaceBetween={dynamicSpaceBeetwen}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slides}
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <svg className="arrow-icon">
            <use href={`${sprite}#icon-arrow-left`}></use>
          </svg>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next slider-arrow">
          <svg className="arrow-icon">
            <use href={`${sprite}#icon-arrow-right`}></use>
          </svg>
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
