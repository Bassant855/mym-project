import graficIcon from '../../assets/grafic-icon.png'
import programIcon from '../../assets/program-icon.png'
import starIcon from '../../assets/star-icon.png'


import './service.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Service = () => {
  return (
    <div className='service padding-x' id='service'>
        <h4 className='serv-head'>خدمتنا</h4>
        <p className='serv-para'>كل الخدمات التي تحتاجونها في مكان واحد وبأيد أمينة</p>

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            


            <SwiperSlide className="card">
                <div className="card-icon">
                    <img src={graficIcon}  />
                </div>  
                <h5>التصميم الجرافك</h5>
                <p className="card-para">
                غلافات صفحات الفيسبوك, قنوات اليوتيوب, تصميم اعلانات لمنتجك, دعم تصاميم ثلاثية الابعاد, متاح جميع الاحجام
                </p>
            </SwiperSlide>
            <SwiperSlide className="card">
                <div className="card-icon">
                    <img src={starIcon}/>
                </div>
                <h5>تصميم واجهة المستخدم</h5>
                <p className="card-para">
                التصميم المرئي للواجهة الرقمية للبرامج أو التطبيقات أو مواقع الويب و تشمل ضبط الخصائص المرئية والتفاعلية للمنتجات الرقمية
                </p>
            </SwiperSlide>
            <SwiperSlide className="card">
                <div className="card-icon">
                <img src={programIcon}  />
                </div>
                <h5>برمجة التطبقيات</h5>
                <p className="card-para">
                تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة
                </p>
            </SwiperSlide>
            <SwiperSlide className="card">
                <div className="card-icon">
                    <img src={graficIcon}  />
                </div>  
                <h5>التصميم الجرافك</h5>
                <p className="card-para">
                غلافات صفحات الفيسبوك, قنوات اليوتيوب, تصميم اعلانات لمنتجك, دعم تصاميم ثلاثية الابعاد, متاح جميع الاحجام
                </p>
            </SwiperSlide>
            <SwiperSlide className="card">
                <div className="card-icon">
                    <img src={starIcon}/>
                </div>
                <h5>تصميم واجهة المستخدم</h5>
                <p className="card-para">
                التصميم المرئي للواجهة الرقمية للبرامج أو التطبيقات أو مواقع الويب و تشمل ضبط الخصائص المرئية والتفاعلية للمنتجات الرقمية
                </p>
            </SwiperSlide>
            <SwiperSlide className="card">
                <div className="card-icon">
                <img src={programIcon}  />
                </div>
                <h5>برمجة التطبقيات</h5>
                <p className="card-para">
                تصميم جذاب , يدعم جميع الاجهزة الاندرويد و الايفون بكل الاصدارات ، حق تملك كامل ل السورس كود, دعم ٢٤ ساعة
                </p>
            </SwiperSlide>

        
            </Swiper>
        </div>


 
  )
}

export default Service