//old

import axios  from "axios";

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDUJPrKdHo-p8zsPEiQmd7E8mbaXstkZgo'


//  define o tipo das props que o componente ChatAswer rec.
type ChatAnswerProps = {
    SetResults : string 
  }

export const getAnswerGemini = async ({SetResults}: ChatAnswerProps)=>{
  
        const response = await axios({
            url: API_URL,
            method:'post',
            headers:{},
            data:{
                contents: [{ parts: [{ text: SetResults }] }],
            }
        })
    
        if(response.data && response.data.candidates.length > 0){
           const answer =  response.data.candidates[0].content.parts[0].text
           console.log(answer)
           return answer
        }

    return null  // Return null or an appropriate fallback value if no data is found

    
 }