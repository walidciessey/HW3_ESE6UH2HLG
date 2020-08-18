import React from 'react'
import WallpaperSamples from './WallpaperSamples'

function Header() {
    return (
        <header>
        <div className = 'container'>
            <h1 className='title'>Mavel's Fearless</h1>
            <p className= 'subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, reprehenderit magni. 
            Expedita ullam nihil vel illum quisquam? Aliquam voluptate est, temporibus at amet ratione tenetur alias aspernatur eligendi itaque. 
            Doloribus.</p>
         <div className= 'search-bar'>
             <input type='search' placeholder='search'/>
             </div> 
             <WallpaperSamples/>  
        </div>
        </header>
    )
}

export default Header
