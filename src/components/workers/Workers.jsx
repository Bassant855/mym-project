import './workers.css'
import Behance from '../../assets/Behance.png'
import Github from '../../assets/Github.png'
import linkedin from '../../assets/linkedin 1.png'
import worker from '../../assets/worker.png'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Workers = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  return (

    <>
    
    <div className='workers padding-x' style={{margin:'30px'}} id='teamWork'>
        <h4>فريق العمل</h4>
        <div className="buttons">
            <button className="work-btn">الكل</button>
            <button className="work-btn">مطور الويب</button>
            <button className="work-btn">مطور تطبيقات الهاتف</button>
            <button className="work-btn">مصمم الوجهات</button>
            <button className="work-btn">المدراء</button>
            <button className="work-btn">قواعد البيانات</button>
        </div>

    <div className='loading-container'>
      <div className="loading">
            <div className="chlid">
                
            </div>
        </div>
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide className="boxs padding-x">

            <div className="work-box ">
                <div className="work-img">
                    <img src={worker}/>
                </div>
                <h2 className="work-head">Mohamed ALI</h2>
                <p className="work-para"> Head of Web Development</p>
                <div className="work-soical">
                    <img src={linkedin} alt="" />
                    <img src={Github} alt="" />
                    <img src={Behance}/>
                </div>
            </div>

            <div className="work-box ">
                <div className="work-img">
                    <img src={worker}/>
                </div>
                <h2 className="work-head">Mohamed ALI</h2>
                <p className="work-para"> Head of Web Development</p>
                <div className="work-soical">
                    <img src={linkedin} alt="" />
                    <img src={Github} alt="" />
                    <img src={Behance}/>
                </div>
            </div>
            <div className="work-box ">
                <div className="work-img">
                    <img src={worker}/>
                </div>
                <h2 className="work-head">Mohamed ALI</h2>
                <p className="work-para"> Head of Web Development</p>
                <div className="work-soical">
                    <img src={linkedin} alt="" />
                    <img src={Github} alt="" />
                    <img src={Behance}/>
                </div>
            </div>
            <div className="work-box ">
                <div className="work-img">
                    <img src={worker}/>
                </div>
                <h2 className="work-head">Mohamed ALI</h2>
                <p className="work-para"> Head of Web Development</p>
                <div className="work-soical">
                    <img src={linkedin} alt="" />
                    <img src={Github} alt="" />
                    <img src={Behance}/>
                </div>
            </div>
            <div className="work-box ">
                <div className="work-img">
                    <img src={worker}/>
                </div>
                <h2 className="work-head">Mohamed ALI</h2>
                <p className="work-para"> Head of Web Development</p>
                <div className="work-soical">
                    <img src={linkedin} alt="" />
                    <img src={Github} alt="" />
                    <img src={Behance}/>
                </div>
            </div>
            <div className="work-box ">
                <div className="work-img">
                    <img src={worker}/>
                </div>
                <h2 className="work-head">Mohamed ALI</h2>
                <p className="work-para"> Head of Web Development</p>
                <div className="work-soical">
                    <img src={linkedin} alt="" />
                    <img src={Github} alt="" />
                    <img src={Behance}/>
                </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className="boxs padding-x">

<div className="work-box ">
    <div className="work-img">
        <img src={worker}/>
    </div>
    <h2 className="work-head">Mohamed ALI</h2>
    <p className="work-para"> Head of Web Development</p>
    <div className="work-soical">
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance}/>
    </div>
</div>

<div className="work-box ">
    <div className="work-img">
        <img src={worker}/>
    </div>
    <h2 className="work-head">Mohamed ALI</h2>
    <p className="work-para"> Head of Web Development</p>
    <div className="work-soical">
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance}/>
    </div>
</div>
<div className="work-box ">
    <div className="work-img">
        <img src={worker}/>
    </div>
    <h2 className="work-head">Mohamed ALI</h2>
    <p className="work-para"> Head of Web Development</p>
    <div className="work-soical">
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance}/>
    </div>
</div>


</SwiperSlide>
</Swiper>



    </div>
    
    </>
  )
}

export default Workers

