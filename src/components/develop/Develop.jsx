import './develop.css'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import phone from '../../assets/phone.png'

import starIcon from '../../assets/star-icon.png'
import programIcon from '../../assets/program-icon.png'
import graficIcon from '../../assets/grafic-icon.png'


const Develop = () => {
  return (
    <div className='develop padding-x'>
        <div className="develop-heading">
            <h1>يمكننا <span className='text'>تطوير تطبيقات الهاتف</span></h1>
            <p className='dev-para'>أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات / موقع<br/> ويب من البداية يناسب احتياجاتك</p>
        </div>




<div className='content'>
  
          <div className="new-box" style={{display:'flex', flexDirection:'column', gap:'20px', marginTop: '140px'}}>
                <div className='right-content' style={{height:'200px', paddingBottom:'10px', textAlign:'center'}}>
                <div className="icon" style={{width:'60px', margin:'10px auto'}}>
                <img src={starIcon} style={{width:"100%"}} />
                </div>
                <h5> كود قوي و مرن  </h5>
                <p className="content-para" style={{padding:'0', margin:'10px'}}>
                يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء
                </p>

                </div>

                <div className="new-arrow" style={{transform:'translateX(245px)',width:'200px' }}>
                    <img src={leftArrow} style={{width:'100%'}}/>
                </div>
           

                <div className='right-content' style={{height:'200px', paddingBottom:'10px', textAlign:'center'}}>
                <div className="icon" style={{width:'60px', margin:'10px auto'}}>
                <img src={starIcon} style={{width:"100%"}} />
                </div>
                <h5>سهل الاطلاق  </h5>
                <p className="content-para" style={{padding:'0', margin:'10px'}}>
                سوف نقدم لك لوحه الادارة و كيفيه التعامل معها بشكل كامل 
                </p>

                </div>

          
          </div>
         
         
         
          <div className="middel-content" >
            <div className="left-arrow" style={{top:"-70px", left: "-180px"}}>
            <img src={leftArrow}/>
            </div>
           
            <div className="phone">
            <img src={phone} />
            </div>
        
             <div className="right-arrow" style={{top:"-70px"}}>
            <img src={rightArrow}/>
            </div>         

                  <div className='loading-container' style={{top:'0'}}>
      <div className="loading">
            <div className="chlid">
                
            </div>
        </div>
      </div> 


          </div>
          <div className="new-box" style={{display:'flex', flexDirection:'column', gap:'20px', marginTop: '140px'}}>
                
          <div className='right-content' style={{height:'200px', paddingBottom:'10px', textAlign:'center'}}>
                <div className="icon" style={{width:'60px', margin:'10px auto'}}>
                <img src={starIcon} style={{width:"100%"}} />
                </div>
                <h5>تصميم واجهة المستخدم </h5>
                <p className="content-para" style={{padding:'0', margin:'10px'}}>
                من خلال تزودنا بما تحتاجه سنعمل علي انشاء واجهه مصتخدم سهله و مرنه
                </p>

                </div>



               

                <div className="new-arrow" style={{transform:'translateX(-180px)',width:'200px' }}>
                    <img src={rightArrow} style={{width:'100%'}}/>
                </div>


                <div className='right-content' style={{height:'200px', paddingBottom:'10px', textAlign:'center'}}>
                <div className="icon" style={{width:'60px', margin:'10px auto'}}>
                <img src={starIcon} style={{width:"100%"}} />
                </div>
                <h5>السرعة </h5>
                <p  className="content-para" style={{padding:'0', margin:'10px'}}>
                نحن مرنون في التعديلات ومع اخراج المشروع بأعلى جوده
                </p>

                </div>

                
          </div>
         
        </div>



    </div>
  )
}

export default Develop