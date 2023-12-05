function showArray(array) {

    return (
      array.map((item,ind) => (<div key={ind}> {item.title} </div>))
    )
  }
  
  export default showArray