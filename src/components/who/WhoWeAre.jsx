import './whoWeAre.css'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import phone from '../../assets/phone.png'

const WhoWeAre = () => {
  return (
    <div className='who-we-are padding-x' id='who'>
        <div className='heading '>
            <h4 className='who-head'>من نحن </h4>
            <p>هؤلاء وثقوا بنا , كن انت التالي</p>
            <p className='who-para'>نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا 
          سجل حافل من العملاء حول العالم حيث اننا نحن نقدم جودة
             عالمية بأفضل الخبرات والمطورين مع تكلفة مناسبة للجميع 
            بداية من طلاب التخرج , مرورا باصحاب الشركات والافكار الناشئه انتهاء بالشركات العملاقه وأنظمة الدفع والبنوك
        </p>
        </div>

        <div className='content'>
          <div className='right-content'>
            <span className='number'>1</span>
            <h5 className='content-num'>10+</h5>
            <p className='content-para'>عمل تطبيقات هاتف في الشرق<br/> الاوسط و الوطن العربي</p>

          </div>
          <div className="middel-content">
            <div className="left-arrow">
            <img src={leftArrow}/>
            </div>
           
            <div className="phone">
            <img src={phone} />
            </div>
        
             <div className="right-arrow">
            <img src={rightArrow}/>
            </div>          


          </div>
          <div className="left-content">
          <span className='number'>2</span>
            <h5 className='content-num'>13+</h5>
            <p className='content-para'>عمل تطبيقات هاتف في الشرق<br/> الاوسط و الوطن العربي</p>


          </div>
        </div>


    </div>
  )
}

export default WhoWeAre