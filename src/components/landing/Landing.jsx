
import landing from '../../assets/landing.png'
import './landing.css'
import facebook from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import whatsapp from '../../assets/whatsapp.png'



const Landing = () => {
  return (
    <div className='landing padding-x ' id='main'>
    <div className='landing-container '>
        <div className='img-container '>
            <img src={landing} alt='landing-img'/>
        </div>
        <div className="text-container">
            <h1 className='heading'>ابحث عن أفضل <span className='text' >الحلول</span> <br/>البرمجية</h1>
            <p className='head-para'>خيارك الأول لتحويل فكرتك الي واقع مع أفضل سعر لأعلي جودة</p>
            <button className='btn'>الحصول علي استشارة</button>
        </div>
    </div>
    <div className='overlay-div padding-x'>
        <div className='right'>
            <h3>هدفنا</h3>
            <p>أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء تطبيقات و موقع ويب من البداية يناسب احتياجاتك</p>

        </div>
        <div className='left'>
            <h5>صفحاتنا علي السوشيال ميديا</h5>
            <div className='media'>
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />

            </div>
        </div>
    </div>
    <div className="whatsapp">
        <a href='https://wa.me/01019659884'><img src={whatsapp} alt=""  /></a>
    </div>
    </div>
  )
}

export default Landing