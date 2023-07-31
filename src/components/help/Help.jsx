import './help.css'
import phone from '../../assets/phone.svg'
import plan from '../../assets/plan.svg'
import program from '../../assets/program.svg'
import search from '../../assets/search.svg'
import puplish from '../../assets/puplish.svg'
import graf from '../../assets/graf.svg'

const Help = () => {
  return (
    <div className='help'>
        <div className="help-head">
            <h2>نحن هنا <span className='text'>لمساعدتك</span></h2>
            <p className='help-para'>تعرف علي خطوات العمل علي اي مشروع</p>
        </div>

      <div className='loading-container'>
      <div className="loading">
            <div className="chlid">
                
            </div>
        </div>
      </div>


        <div className="boxs">

          <div className="box">
          <span className='number'>1</span>
          <div className='box-icon'>
            <img src={phone} id='fill-icon'/>
          </div>
          <div className="card-content">
              <h5 className='content-num'>الاتصال بك</h5>
              <p className='content-para'>أخبرنا بأي شئ تريد تصميمه</p>
          </div>
           
          </div>
          
          <div className="box">
          <span className='number'>1</span>
          <div className='box-icon'>
            <img src={plan} id='fill-icon'/>
          </div>
          <div className="card-content">
              <h5 className='content-num'> الخطة</h5>
              <p className='content-para'>سوف نقوم بعمل خطه بناء متكامله</p>
          </div>
           
          </div>

          <div className="box">
          <span className='number'>1</span>
          <div className='box-icon'>
            <img src={graf} id='fill-icon'/>
          </div>
          <div className="card-content">
              <h5 className='content-num'> التصميم</h5>
              <p className='content-para'>تصميم الواجهات تصميم مرن و فعال مع المستخدم</p>
          </div>
           
          </div>

          <div className="box">
          <span className='number'>1</span>
          <div className='box-icon'>
            <img src={program} id='fill-icon'/>
          </div>
          <div className="card-content">
              <h5 className='content-num'>البرمجة</h5>
              <p className='content-para'>نقوم بكتابه الكود و عمل قواعد البيانات و ربطها</p>
          </div>
           
          </div>

          <div className="box">
          <span className='number'>1</span>
          <div className="card-content">
          <div className='box-icon'>
            <img src={search} id='fill-icon'/>
          </div>
              <h5 className='content-num'> الفحص النهائى</h5>
              <p className='content-para'>سوف نقوم بفحص الكود و تأمينه من الثغرات </p>
          </div>
           
          </div>
          
          <div className="box">
          <span className='number'>1</span>
          <div className='box-icon'>
            <img src={puplish} id='fill-icon'/>
          </div>
          <div className="card-content">
              <h5 className='content-num'> النشر</h5>
              <p className='content-para'>  سوف نقوم برفع التطبيق او الموقع و نشرة لتبدا بجني الارباع </p>
          </div>
           
          </div>

        </div>
    </div>
  )
}

export default Help