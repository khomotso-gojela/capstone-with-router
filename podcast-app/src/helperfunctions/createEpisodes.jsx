import nostar from '../assets/nostar.png'
import star from '../assets/star.png'
import play from '../assets/play.png'

function createEpisodes(array,setFav) {


    return (
      array.map((item,ind) => (
      
      <div key={ind} className="e-container">
            <div >
                <img src={play} width={'50%'}/>
            </div>

            <div>
                {item.title}
            </div>
            
            <button onClick={() => setFav(item,ind)} className="star" >
                <img src={star} width={'100%'}/>
            </button>

        </div>
      ))
    )
  }
  
  export default createEpisodes