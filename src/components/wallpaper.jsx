import React from 'react'

function wallpaper(props) {
    return (
        <div>
            <article className = 'wallpaper'>
                <img src={props.src} alt={props.alt} className= 'wallpaper'/>
            </article>
        </div>
    )
}

export default wallpaper
