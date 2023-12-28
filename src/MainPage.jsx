import React from 'react'
import Hero from './Hero'
import Feature from './Feature'
import Faq from './Faq'

const MainPage = () => {
  return (
    <div>
        <Hero />
        <Feature heading="Movie" para="lore upsum" videourl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHLlIDr-ixvLiWXnuNV6mnPPSkR0zrTBzfQ&usqp=CAU" />
        <Feature heading="Movie" para="lore upsum" videourl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHLlIDr-ixvLiWXnuNV6mnPPSkR0zrTBzfQ&usqp=CAU" />
        <Feature heading="Movie" para="lore upsum" videourl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHLlIDr-ixvLiWXnuNV6mnPPSkR0zrTBzfQ&usqp=CAU" />
        <Feature heading="Movie" para="lore upsum" videourl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHLlIDr-ixvLiWXnuNV6mnPPSkR0zrTBzfQ&usqp=CAU" />
        <Faq/>
    </div>
  )
}

export default MainPage