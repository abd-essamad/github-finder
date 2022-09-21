import './features.css'
import Feature from '../../components/feature/Feature'

const Features = () => {
  const featureData = [
    {
      title: 'shopidy items',
      text:'lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa totam quisquam, eius rerum minima aspernatur voluptate quasi quod nisi placeat',

    },
    {
      title: 'holiday items',
      text:'lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa totam quisquam, eius rerum minima aspernatur voluptate quasi quod nisi placeat',

    },
    {
      title: 'google items',
      text:'lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa totam quisquam, eius rerum minima aspernatur voluptate quasi quod nisi placeat',

    },
    {
      title: 'samsung items',
      text:'lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa totam quisquam, eius rerum minima aspernatur voluptate quasi quod nisi placeat',

    },

  ]
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Futute is 
        Now and you just Need to realize it</h1>
         <p style={{color: '#fff'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nesciunt aspernatur voluptas nam sapiente, inventore veritatis iure cumque eligendi obcaecati illo quis voluptatem nulla, error
           ea maxime esse tenetur recusandae!</p>    
      </div>

      <div className='gpt3__features-container'>
      {featureData.map((item, index)=>(
        <Feature title={item.title} text ={item.text} id={item.title + index}/>
      ))}
      
      </div>
      
    </div>
  )
}

export default Features
