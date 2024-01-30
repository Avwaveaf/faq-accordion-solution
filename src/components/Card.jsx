import startIcon from '../assets/images/icon-star.svg'
import Accordion from './Accordion'
import faqData from "../data/faqData"
const Card = () => {

  

  return (
      <section className="card ">
          <div className='flex items-center gap-4'>
              <img src={ startIcon} alt="" />
              <h1 className='text-4xl font-bold'>FAQs</h1>
          </div>
          
          <section className='flex flex-col gap-5'>
              
          { 
              faqData.map(({ title, content}, index) => { 
                  return <Accordion key={index} title={title} content={ content} />
              })
          }
       
          </section>
    </section>
  )
}

export default Card