import React from 'react'
import { useRef } from 'react'

function FAQAccordionItem({faq, onToggle, active}) {

    const { question, answer } = faq

    const contentEl = useRef()

  return (
    <div className={`border-b border-faq-border ${active ? "active" : ""}`}>
      <button className="bg-transparent text-whit text-left flex flex-nowrap w-full justify-between items-center px-[0.2rem] py-[1.4rem] cursor-pointer border-none text-[21px] font-bold transition-all duration-3000 ease-in xl:py-[1.0rem]" onClick={onToggle}>
        {question}
        <span className="control">{active ? <p>&#8963;</p> : <p>&#8964;</p>}</span>
      </button>
      <div 
        ref={contentEl} 
        className="h-0 overflow-hidden transition-height ease duration-500" 
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="bg-tranparent p-[15px] text-[20px] text-whit transition-height ease duration-400">{answer}</div>
      </div>
    </div>
  )
}

export default FAQAccordionItem