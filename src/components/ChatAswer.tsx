
import { useAnswerGemini } from '@/services/queries';
import { Skeleton } from "@/components/ui/skeleton"




//  define o tipo das props que o componente ChatAswer rec.
type ChatAswerProps = {
  SetResults : string 
}



const ChatAswer = ({SetResults}: ChatAswerProps) => {
 
const {data,isError,isLoading} = useAnswerGemini({SetResults})

if(isLoading){
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
if(isError){
  return <span>ERROR</span>
}


function PreFormattedTextComponent( message : string) {
  return (
    <div className=''>
      {message.split('\n').map((line, index) => {
        // Remove espaços em branco no início e no fim e substitui '*' por ' '
        const formattedLine = line.trim().replace(/\*/g, '');

        return(
          <p key={index}>
          { //
             formattedLine.trim() === '' ? '\u00A0' : formattedLine
             } 
          {'\n'}
        </p>
        )})}
     </div>
  )}


  return (
    <div className='whitespace-pre-wrap overflow-y-auto h-60'>
       {
        PreFormattedTextComponent(data)
       }
    </div>
  )
}

// <Gemini question={question}/>
export default ChatAswer