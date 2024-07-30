
import  { useState } from 'react'

import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"




type ChatInputProps = {
  SetResults:  (result : string)=> void,
  SetQuestionTitle: (result : string)=> void,
}

const ChatInput = ({SetResults,SetQuestionTitle}: ChatInputProps) => {

 const[question,SetQuestion] = useState('')

  function HandleChange(text: string ){
    SetQuestion(text)
  }

  function UpperCase(text: string){
    return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
  }

  function SendChange(){
    SetResults(question)
    SetQuestionTitle(UpperCase(question))
  }


return (
    <div className='flex flex-row items-center justify-center'>
     
        <Input 
        className='w-3/6'
        placeholder='Escreva uma pergunta...'
        onChange={(e)=>{HandleChange(e.target.value)}}
        
        />
        <Button className='w-1/6 ml-3'
        onClick={SendChange}
        >Enviar</Button>

    </div>
  )
}

export default ChatInput