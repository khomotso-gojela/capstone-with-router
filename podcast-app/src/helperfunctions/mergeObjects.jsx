
export default function mergeOjects(show,fav) {

    let newSeasons = ''
    let newSeas = ''
    let newEpisodes = ''
    let newEpi = ''
    
   
        let newShow = ''
 
            if (fav.id == show.id) {
                
                newSeasons = show.seasons.map(showSeas => {
                    fav.seasons.map(favSeas => {
                        if (favSeas.season == showSeas.season) {
                            
                            newEpisodes = showSeas.episodes.map(sEpi => {
                                favSeas.episodes.map(fEpi => {
                                    if (fEpi.title == sEpi.title) {
                                        newEpi = {...fEpi}
                                    }
                                })
                                if ( sEpi.title == newEpi.title ) {
                                    return newEpi
                                } else {
                                    return sEpi
                                }
                            })
                            newSeas = {...favSeas}
                            newSeas.episodes = [...newEpisodes]
                        }

                    })
                    if (showSeas.season == newSeas.season) {
                        return newSeas
                    } else {
                        return showSeas
                    }

                })
                // newShow = fav
                // newShow.seasons = [...newSeasons]
                newShow = {
                    ...fav,
                    seasons: newSeasons
                } 
            }

        return newShow
}
