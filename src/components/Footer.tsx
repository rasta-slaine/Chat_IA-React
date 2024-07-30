
import { Separator } from "@/components/ui/separator"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div >
      <Separator  className='mt-8'/>
        <div className="flex justify-center  ">
          <div className='flex mt-2  items-center justify-center flex-col'>
               <p>Desenvolvido Por <a href="https://github.com/rasta-slaine"  className='font-bold  hover:text-sky-400' target='_blank'>Nathan</a> </p>
               <p> © 2024 Chat IA. Todos os direitos reservados.</p>
          </div>          
        </div>
    </div>
  )
}

export default Footer