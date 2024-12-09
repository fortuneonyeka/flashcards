import React, { useState } from 'react'
import { questions } from './data'

const Test = () => {
  const [selectedId, setSelectedId] = useState(null)

  const handleSelected = (id) => {
    setSelectedId(id !== selectedId ? id : null)
  }
  return (
    <div className='flashcards'>
      {questions.map(question => <div className={selectedId === question.id ? "selected" : ""} onClick={() => handleSelected(question.id)}>
        <p>{selectedId === question.id ? question.answer : question.question}</p>
      </div>)}
    </div>
  )
}

export default Test
