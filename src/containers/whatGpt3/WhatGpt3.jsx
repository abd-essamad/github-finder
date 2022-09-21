import './whatgpt3.css'
import Feature from '../../components/feature/Feature'

const WhatGpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section_margin ' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is Gpt3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem dolorem quo ullam modi laboriosam quasi doloremque obcaecati earum non! Vel et nihil quos 
        quibusdam id odio dolore quaerat ea.'/>
      </div>
      
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibility are Beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <Feature title='Chatbots' text='hello there this is a chatbot from openAi' />
      <Feature title='Knowledgebase' text='welcome to new world knowledge' />
      <Feature title='Education' text='this is the education start from things' />
      </div>
    </div>
  )
}

export default WhatGpt3
