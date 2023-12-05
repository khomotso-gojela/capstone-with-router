import { Outlet, useLoaderData, useParams } from "react-router-dom"
import createSeasons from "../../helperfunctions/createSeasons"

function PrevDetailsLayout() {
    const show = useLoaderData()
    const id = useParams()
    
  return (
    <div>
        <h1>{show.title}</h1>
        <hr />
        <div>{createSeasons(show.seasons,id)}</div>
        <hr />
        <div>
            <Outlet />
        </div>
        
    </div>
  )
}



export default PrevDetailsLayout

export async function showLoader({ params }) {
    const {id} = params
    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`)

    return res.json()
}





