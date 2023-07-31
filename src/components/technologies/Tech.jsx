import './technology.css'
import flutterArrow from '../../assets/flutterArrow.png'

const Tech = () => {
  return (
    <div className='technology'>
    <h4 className='tech-head'>التقنيات الذي نستخدمها </h4>
    
    <div className="boxs ">
        <div className="tech-box">
        <span className='number'>1</span>
        <div className="tech-text">
          <h3 >Flutter</h3>
          <img src={flutterArrow} className='arrow'/>
        </div>

        </div>
        <div className="tech-box">
        <span className='number'>2</span>
        <div className="tech-text">
          <h3 >Flutter</h3>
          <img src={flutterArrow} className='arrow'/>
        </div>
        </div>
        <div className="tech-box">
        <span className='number'>3</span>
        <div className="tech-text">
          <h3 >Flutter</h3>
          <img src={flutterArrow} className='arrow'/>
        </div>
        </div>
        <div className="tech-box">
        <span className='number'>4</span>
        <div className="tech-text">
          <h3 >Flutter</h3>
          <img src={flutterArrow} className='arrow'/>
        </div>
        </div>
        <div className="tech-box">
        <span className='number'>5</span>
        <div className="tech-text">
          <h3 >Flutter</h3>
          <img src={flutterArrow} className='arrow'/>
        </div>
        </div>
        <div className="tech-box">
        <span className='number'>6</span>
        <div className="tech-text">
          <h3 >Flutter</h3>
          <img src={flutterArrow} className='arrow'/>
        </div>
        </div>
    </div>
</div>  
  )
}

export default Tech