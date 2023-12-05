

function showGenres(array) {

  return (
    array.map((gen,ind) => (<span key={ind}> {gen} </span>))
  )
}

export default showGenres