import { useSelector } from "react-redux"
import createSeasons from "../../helperfunctions/createSeasons"
import { Outlet, useParams } from "react-router-dom"

function FavDetails() {
    const favs = useSelector((state) => state.favorites.favorites)
    const {id} = useParams()

    const show = favs.find(item => item.id == id)
    console.log(show)

    return (
        <div>
            <h1>{show.title}</h1>
            <hr />
            <div>{createSeasons(show.seasons,show)}</div>
            <hr />
            <div>
                <Outlet />
            </div>
            
        </div>
    )
}

export default FavDetails




