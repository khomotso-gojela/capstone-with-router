import { useSelector } from "react-redux"
import {CRow } from '@coreui/react'
import { useEffect, useState } from "react";
import createPrev from "../../helperfunctions/createPreview"

function Favorites() {
  const favs = useSelector((state) => state.favorites.favorites)
  const [ allFavs, setAllFavs ] = useState([])

  useEffect(() => {
    setAllFavs(() => createPrev(favs))
  }, [favs]);

 
  return (
    <>
        <h3 className="center-align">All Favorites</h3>
        {favs ? <CRow>{allFavs}</CRow>: 'No Favorites yet.'}
    
    </>
  )
}

export default Favorites