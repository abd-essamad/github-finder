import './header.css';
import people from '../../assets/ai.png'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets's Build Somethig Amazing with GPT-3 Open AI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ullam aliquam suscipit sed at dolor delectus necessitatibus 
          nam non reiciendis vero distinctio eos asperiores quia?</p>
        <div className="gpt3__header-content__input">
           <input type="email" placeholder='Your Email Address' />
           <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={logo} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>

        
      </div>
      <div className='gpt3__header-image'>
          <img src={people} alt="ai" />
        </div>
    </div>
  )
}

export default Header
