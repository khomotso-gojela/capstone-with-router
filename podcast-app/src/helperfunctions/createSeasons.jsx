import { NavLink } from "react-router-dom"

function createSeasons(array,show) {

    return (
      array.map((item,ind) => (
      <span key={ind}> <NavLink to={`${item.season}`}>Season {item.season}</NavLink> </span>
      ))
    )
  }
  
  export default createSeasons