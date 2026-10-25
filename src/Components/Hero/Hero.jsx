import './Hero.css'
import HeroImg from '../../assets/Images/HeroImg.png'
import PepsiLogo from '../../assets/Images/PepsiLogo.png'

function Hero() {
  return (
    <section className='Hero'>
      <div className='HeroTitle'>
      <img src={PepsiLogo} alt="" />
        <div className='Title'>
           <h1>PEPSI SYRIA WEBSITE IS COMMING SOON</h1>
           <h2>THANK YOU FOR WAITING</h2>
           <p>Our website is currently under construction. We Should be online shortly. Thank you for your patience.</p>
        </div>
        </div>

    </section>
  )
}

export default Hero