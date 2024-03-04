
import React , {useState} from 'react'
import Singlemovie from './Singlemovie'

function Cinemarow() {
     const [totalmovies,moviechange]= useState([
        {
            heading:"head 1"
            , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ362GxqWJcvtvPBZTtCc7SSOTr2cVhzvdqw&usqp=CAU"
    
        }
        , {
            heading:"head 2",
             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ362GxqWJcvtvPBZTtCc7SSOTr2cVhzvdqw&usqp=CAU"
    
        }
        , {
            heading:"head 3"
            , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ362GxqWJcvtvPBZTtCc7SSOTr2cVhzvdqw&usqp=CAU"
    
        }
     ])
  return (
    <div>
        <div className='flex gap-36'>
            {totalmovies.map((item)=>(
             <Singlemovie data={item}/>   
            ))
            
            }
      
       
    </div>

    </div>
  )
}

export default Cinemarow