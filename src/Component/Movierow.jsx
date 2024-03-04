import React from 'react'
import YouTube from 'react-youtube';
import { useEffect } from 'react'
import Axios from '../Axios';
import { API_KEY, imageUrl } from '../Constant/Constants';
import { useState } from 'react';


function Movierow(props) {

    const [movie, setMovie] = useState([])
    const [urlId, setUrl] = useState('')
    useEffect(() => {
        Axios.get(props.url).then((response) => {
            console.log(response.data.results[0])
            setMovie(response.data.results)
        })

    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const movieTrailer = (id) => {
        console.log(id);
        Axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response => {
            if (response.data.results.length != 0) {
                setUrl(response.data.results[0])
            } else {
                console.log("movie array is empty")
            }
        })

    }
    return (
        <div className='mx-10 w-full'>
            {/* poster*/}
            <h2 className='text-white text-2xl pt-9 font-bold'>{props.title}</h2>

                <div className='flex w-full text-black mt-10 overflow-x-scroll gap-8' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            {movie.map((obj) => (
                     <div> 
                        <div className='w-52'>
                        <img onClick={() => movieTrailer(obj.id)} className='w-52 h-64 hover:scale-110' alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                      </div>
                        <p className='text-white font-semibold text-center pt-4'>{obj.title}</p>
                     </div>
                    ))}
                    </div>
            {urlId && <YouTube opts={opts} videoId={urlId.key} />}
        </div>



    )
}

export default Movierow
