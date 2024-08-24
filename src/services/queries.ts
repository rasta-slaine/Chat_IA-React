
import { useQuery } from "@tanstack/react-query";
import TextGeneration from "./api";


//  define o tipo das props que o componente ChatAswer rec.
type ChatAnswerProps = {
    SetResults : string 
  }



export function useAnswerGemini({SetResults}:ChatAnswerProps){
    return useQuery({
        queryKey:['answer',SetResults],
        queryFn:()=> TextGeneration(SetResults) // Pass a function that calls getAnswerGemini
        
    })
}
