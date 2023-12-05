import { useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react"
import createPrev from "../../helperfunctions/createPreview"



function Previews() {
    const previewsList = useLoaderData()
    const [ allPreviews, setAllPreviews ] = useState([])

    useEffect(() => {
        setAllPreviews(() => createPrev(previewsList))
    }, []);


  return (
    <div className="container">
        <h3 className="center-align"> All previews</h3>
        <div className="row" style={{margin:'0'}}>{allPreviews}</div>
    
    </div>
    
  )
}








export default Previews

export async function previewsLoader() {
    const res = await fetch('https://podcast-api.netlify.app/shows')

    return res.json()
}