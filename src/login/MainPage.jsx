import React from 'react'
import Hero from '../Component/Hero'
import Feature from '../Component/Feature'
import Faq from '../Component/Faq'

// const MainPage = () => {
function MainPage() {
  return (
    <div className=''>
      <Hero />
      <Feature f="1" heading="MONEY HEIST" para=" Money Heist refers to the television series you can find reviews for each season on various entertainment review platforms Keep in mind that individual opinions may vary so it beneficial to read a variety of reviews to get a comprehensive understanding of the reception" imgurl="https://e0.pxfuel.com/wallpapers/737/548/desktop-wallpaper-money-heist-netflix-web-series.jpg" />
      <Feature f="2" heading="EL CARRITO" para="El Carrito is a recent release or if it became known after my last update I recommend checking official movie databases reputable movie review websites  or streaming platforms for the most accurate and up-to-date information on the plot  cast  and reviews" imgurl="https://media.designrush.com/tinymce_images/205884/conversions/3.-El-Carrito-content.jpg" />
      <Feature f="3" heading="RED COAT" para=" Red Coat is a recent release or if it became known after my last update I recommend checking official movie databases reputable movie review websites or streaming platforms for the most accurate and up-to-date information on the plot cast and review" imgurl="https://img.elegantflyer.com/templates/preview/premium-movie-poster-psd-template-160810.jpg" />
      <Feature f="4" heading="ARCHER" para="Archer movie released Archer is primarily known as an animated television series created by Adam Reed The show is a comedic spy-spoof that follows the adventures of the self-centered and inept spy Sterling Archer and his colleagues at the International Secret Intelligence Service " imgurl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411" />
      <h4 className='text-white text-8xl flex justify-center'>FAQ</h4>
      <Faq />
    </div>
  )
}

export default MainPage