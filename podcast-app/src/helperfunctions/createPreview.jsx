import { CCard, CCardImage, CCardBody, CCardText, CCardTitle } from '@coreui/react'
import { CCol ,CRow } from '@coreui/react'
import showGenres from './showGenres'
import { NavLink } from 'react-router-dom'

export default function createPrev(allShows) {
        
        let preview = allShows.map(prev => {     
           

            let newprev = ''
            if (prev.item) {
                newprev = prev.item
            } else {
                newprev = prev
            }

            return (
                
                <div className='prev-cont col xs12 ' key={newprev.id}>
                    <NavLink to={newprev.id} > 
                        <CCard className="preview z-depth-2" style={{ width: '18rem' }}>
                            <CCardImage className="preview-image" orientation="top" src={newprev.image} />
                            <CCardBody>
                            <CCardTitle>{newprev.title}</CCardTitle>
                            <CCardText>
                                Seasons: {newprev.seasons? newprev.seasons.length :''}                        
                            </CCardText>
                            <CCardText>
                                Last updated: {new Date(newprev.updated).toUTCString()}                            
                            </CCardText>
                            <CCardText>
                                Genres: {newprev.genres? showGenres(newprev.genres) : ''}                            
                            </CCardText>
                            </CCardBody>
                        </CCard>
                    </NavLink>
                    
                </div>
            )
                
        })
   


    return preview
    
}