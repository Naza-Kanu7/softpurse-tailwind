import React from 'react'
import { useState } from 'react'
import { faqs } from './data'

import FAQAccordionItem from './FAQAccordionItem'
import FAQImg from './FAQImg.png'

function FAQAccordion() {

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
          return setClicked("0");
        }
        setClicked(index);
    };

  return (
    <div name='faq' className='w-full h-auto bg-faq-bg bg-cover mt-[-11rem] pt-[12rem] pb-[5rem] px-5 sm:mt-[-15rem] md:px-10 2xl:mt-[-18rem] 2xl:pt-[15rem]'>
        <div>
            <h1 className='text-whit pb-[3rem] text-[28px] font-bold'>Frequently Asked Questions</h1>
        </div>
        <div className="flex flex-col items-center justify-between gap-[2rem] lg:flex-row lg:items-start">
            <div className="w-full">
                {faqs.map((faq, index) => (
                    <FAQAccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} active={clicked === index}/>
                ))}
            </div>
            <div className='w-[80%] h-[30rem] md:h-[40rem] md:w-[70%] lg:h-[30rem] lg:w-[50%]'>
                <img src={FAQImg} alt='FAQImg' className='w-full h-full' />
            </div>
        </div>
    </div>
  )
}

export default FAQAccordion