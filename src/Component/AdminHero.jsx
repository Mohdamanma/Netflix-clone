import React, { useEffect, useState } from 'react';
import Axios from '../Axios';
import { API_KEY } from '../Constant/Constants';
import { imageUrl } from '../Constant/Constants';
import { requestPopular } from '../Url';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


function AdminHero() {
    const [movie, setMovies] = useState([]);
    const movies =movie[Math.floor(Math.random() * movie.length)]
    const [user, loading, error] = useAuthState(auth);
  
    useEffect(() => {
        Axios.get(requestPopular)
            .then((response) => {
                setMovies(response.data.results); 
            })          
    }, []);
    console.log(movies);

   const truncateString = (str,num) => {
    if (str?.length > num){
        return str.slice(0, num) + '....';
    }else {
      return str
    }
   
   }

    return (
       <div className='w-full h-[550px]'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'>
        <img className='w-full h-full object-cover'   src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.title} />
        <div className='absolute top-[20%] w-full p-4 md:p-8'>
        <h1 className=' text-3xl font-serif text-white pb-5'>Hii <br></br> <span className='text-3xl font-serif text-red-600'>{user && user.displayName}</span></h1>
            <h1 className='text-3xl text-white md:text-5xl font-bold'>{movies?.title}</h1>
        <div className='my-4'>
            <button className='text-black border bg-white py-2 px-4' >Play</button>
            <button className='text-white ml-4 hover:bg-gray-600 border bg-grey-300 py-2 px-4'>Watch Later</button>
        </div>
        <p className='text-white text-sm'>Realesed :<span className='text-red-400'> {movies?.release_date}</span></p>
        <p className='text-white w-full md:max-w-[70%] lg:max-w-[35%] pt-5'>{truncateString(movies?.overview,200)}</p>
        </div>
          </div>  
        </div>
       </div>
    );
}

export default AdminHero