import nostar from '../../assets/nostar.png'
import star from '../../assets/star.png'
import play from '../../assets/play.png'

import { useState } from "react"
import {useParams, useLoaderData } from "react-router-dom"
import createEpisodes from "../../helperfunctions/createEpisodes"
import { useSelector,useDispatch } from "react-redux"
import { changeFav } from "../../Redux/favSlicer"
import { setFav } from '../../helperfunctions/createFav'
import mergeOjects from '../../helperfunctions/mergeObjects'



function SeasonDetails() {
  const { season } = useParams()
  const loadShow = useLoaderData()


  const favs = useSelector((state) => state.favorites.favorites)
  const dispatch = useDispatch()
  const favShow = favs.find(item => item.id == loadShow.id)

  let show = {}

  if (favShow) {
    show = mergeOjects(loadShow,favShow)
  } else {
    
    show = loadShow

  }

    
  return (
    <div>
        <h4>Season {season} Episodes </h4>
        <div>
          {/* Mapping episodes to create elements */}
          {show.seasons.find(item => item.season == season).episodes.map((item,ind) => (
      
            <div key={ind} className="e-container">
              <div >
                  <img src={play} width={'50%'}/>
              </div>

              <div>
                  {item.title}
              </div>
              
              <button onClick={() => dispatch(changeFav(setFav(favs,show,season,ind)))} className="star" >
                  <img src={show.seasons.find(item => item.season == season).episodes[ind].fav?star:nostar} width={'100%'}/>
              </button>

            </div>
          ))}
        </div>
    </div>
  )
}


export default SeasonDetails

export async function episodesLoader({ params }) {
    const {id} = params
    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`)

    return res.json()
}



