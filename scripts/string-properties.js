const movie = {
  title : "Tenet",
  releasedYear: 2020,
  rating: 9,
  director: 'Christopher Nolan'
}


function showProperties(obj){

  for (let key in obj){
    if (typeof obj[key] === 'string')
      console.log(key,obj[key])
  }

}

showProperties(movie);