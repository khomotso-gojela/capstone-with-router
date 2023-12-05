import { Outlet, useLoaderData, useParams } from "react-router-dom"
import createSeasons from "../../helperfunctions/createSeasons"

function PreviewDetails() {
    const show = useLoaderData()
    const props = useParams()
    
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



export default PreviewDetails

export async function showLoader({ params }) {
    const {id} = params
    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`)

    return res.json()
}





