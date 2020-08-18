import React from 'react'
import Image1 from '../img/hulk-1.jpg'
import Image2 from '../img/venom-1.jpg'
import Image3 from '../img/venom-2.jpg'
import Wallpaper from './wallpaper'

function WallpaperSamples() {
    return (
        <div className= 'sample-wallpaper'>
         <  Wallpaper src= {Image2} alt= 'venom image #1'/>      
         <  Wallpaper src= {Image1} alt= 'hulk image #2'/>    
         <  Wallpaper src= {Image3} alt= 'venom image #3'/>  
        </div>
    )
}

export default WallpaperSamples;
