

/**
 * add/remove fav episodes in store/state
 * @param {[]} favs 
 * @param {{}} obj 
 * @param {Number} season 
 * @param {Number} index 
 * @returns {[]}
 */
export function setFav(favs,obj,season,index) {
console.log(favs,obj,season,index)
  // check if show exist
  let newShow = favs.find(item => item.id == obj.id)

  if (newShow) { // if it does exist

    // check if season in quetion exist
    const newSeason = newShow.seasons.find(item => item.season == season)

    if (newSeason) { // if season exist go change current epi
      const newSeasons = newShow.seasons.map(seas => {

        if (seas.season == season) {
          // check if episode in question exists
          const newEpi = seas.episodes.find(item => item.title == obj.seasons.find(item => item.season == season).episodes[index].title)

          if (newEpi) { // if episode exists

            // map episodes and change episode in question
            let newEpisodes = seas.episodes.map(epi => {
              if (epi.title == obj.seasons.find(item => item.season == season).episodes[index].title) {
                return {
                  ...obj.seasons.find(item => item.season == season).episodes[index],
                  fav: !epi.fav
                }
              } else {
                return epi
              }
            })

            return {
              ...seas,
              episodes: newEpisodes
            }    

          } else { // if episode doen't exists

            let newEpi = obj.seasons.find(item => item.season == season).episodes[index]
            newEpi = {...newEpi,fav:true}
            let newEpisodes = [...seas.episodes,newEpi]

            return {
              ...seas,
              episodes: newEpisodes
            } 

          }
        } else {
          return seas
        }
      })

      let newFavs = favs.filter(item => item.id != obj.id)

      newShow = {
        ...newShow,seasons:newSeasons
      }

      return [...newFavs,Strip(newShow)]

    } else { // if season doesn't exist in favs
      const newSeas = obj.seasons.find(item => item.season == season)
      console.log(newSeas)
      newSeas.episodes[index] = {...newSeas.episodes[index],fav:true}
      const newSeasons = [...newShow.seasons,newSeas]

      newShow = {
        ...newShow,seasons:newSeasons
      }

      let newFavs = favs.filter(item => item.id != obj.id)

      return [...newFavs,Strip(newShow)]
      

    }

  } else {

    const newObj = obj
    newObj.seasons.find(item => item.season == season).episodes[index].fav = true

    return [...favs,Strip(newObj)]
  }
}   


/**
 * deletes no favorite episodes and seasons
 * @param {{}} show 
 * @returns {}
 */
export function Strip(show) {
   
  const list = []
  show.seasons.map(seas => {
     
      const favEpisodes = seas.episodes.filter(item => item.fav === true);

      list.push({
          ...seas,
          fav: favEpisodes.length > 0,
          episodes: favEpisodes
      })
  });

  
  const newSeasons = list.filter(item => item.fav === true);

  const haveFavs = list.some(item => item.fav === true);

  return {
      ...show,
      fav: haveFavs,
      seasons: newSeasons
  };

  
}