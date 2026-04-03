import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FaqAccordionProps = {
  question: string
  answer: string
}

export function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`faq-accordion ${open ? 'faq-open' : ''}`}>
      <button
        className="faq-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        <h3>{question}</h3>
        <span className="faq-icon">
          <ChevronDown size={18} />
        </span>
      </button>
      <div className="faq-body">
        <p>{answer}</p>
      </div>
    </article>
  )
}
