import nostar from '../../assets/nostar.png'
import star from '../../assets/star.png'
import play from '../../assets/play.png'

import { useState } from "react"
import {useParams, useLoaderData } from "react-router-dom"
import { changeFav } from "../../Redux/favSlicer"
import { setFav } from '../../helperfunctions/createFav'
import { useDispatch, useSelector } from 'react-redux'

function FavSeasoninfo(props) {
  const { id, season } = useParams()
  const favs = useSelector((state) => state.favorites.favorites)
  const dispatch = useDispatch()

  const show = favs.find(item => item.id == id)
    
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
                  <img src={star} width={'100%'}/>
              </button>

            </div>
          ))}
        </div>
    </div>
  )
}

export default FavSeasoninfo

