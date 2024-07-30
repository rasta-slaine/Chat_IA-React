
 
import { BrowserRouter as Router, Link,useNavigate } from 'react-router-dom';


const NavBar = ( )=>{


        return(
            <Router>
            <div  className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
                <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
                  
                    <Link to={"/"}  className="flex items-center gap-2">
                    <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                         Chat IA
                    </p>
                    </Link>
                    
                    <div className="flex items-center">
                    <Link to={"https://github.com/rasta-slaine"} target='_blank'>
                          <img src="/icon.png" alt="" className='w-10'/>
                    </Link>    
                    </div>
                </div>
            </div>
            </Router> 
        )


}

export default NavBar