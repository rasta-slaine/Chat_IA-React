

import {
  Card,
  CardContent,
  //CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ChatInput from '@/components/ChatInput'
import ChatAswer from '@/components/ChatAswer'
import { useState,useEffect } from "react";
//import { Typewriter } from 'react-simple-typewriter'  -- horrivel
import { ReactTyped } from "react-typed";


export default function Home() {
const[result,SetResult] = useState('')
const[question,SetQuestion] = useState('')
const [questionArray2, SetQuestionArray2] = useState<string[]>(['']); // Estado para o array

if(result == ''){
  SetResult('Olá')
}


useEffect(() => {

  // Converter a string em um array de palavras
  const updateArray2 = question.trim()
  // Atualizar o estado com o array resultante
  SetQuestionArray2(updateArray2 ? [updateArray2] : ['true']);  
  //console.log([updateArray2])

}, [question]);   


 // Verificação de conteúdo
 const isArrayEmpty = questionArray2[0] === "true"




  return (
  <div>
      <div className="top-4/2 p-8 mx-auto mx-w-7-xl"> 
          <Card className="mt-10 h-96" >
            <CardHeader>
              <CardTitle>
              <ReactTyped 
                 className="text-lg font-bold"
                 strings={
                  isArrayEmpty
                    ? ["Digite algo para começar!"]
                    : questionArray2
                 }
                 typeSpeed={40}
                 
                >
                </ReactTyped>
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="overflow-y-auto h-60">
              <ChatAswer SetResults={result}/>
              </div>
            </CardContent>
          </Card>
       </div>

       <div className="mt-50">
             <ChatInput SetResults={SetResult} SetQuestionTitle={SetQuestion}/>    
       </div>

  </div>
  );
}
