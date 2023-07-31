import './project.css'
// import AutoplaySlider from 'react-awesome-slider'
import graficIcon from '../../assets/grafic-icon.png'
import programIcon from '../../assets/program-icon.png'
import starIcon from '../../assets/star-icon.png'




import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Project = () => {
  return (
    <div className='project padding-x'>
        <div className="project-text">
            <h5>دعنا نعرفك علي مشاريعنا السابقة</h5>
            <p>اكتشف اهم مشاريعنا في السنوات الماضية</p>
        </div>
        <div className="buttons">
            <button className="work-btn">الكل</button>
            <button className="work-btn"> مواقع الويب</button>
            <button className="work-btn"> تطبيقات الهاتف</button>
            <button className="work-btn">تصاميم الوجهات</button>
            <button className="work-btn">تصاميم الجرافيك</button>
        </div>


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

export default Project