
document.querySelector('form').addEventListener('submit', addMovies)
function addMovies(e){
  e.preventDefault()
  let title = document.getElementById('title')
  let plot = document.getElementById('plot')
  let poster = document.getElementById('poster')
  

  const movieObject = {
    Title: title.value,
    Plot: plot.value,
    Poster: poster.value
  }
  fetch('http://localhost:3000/movies',{
    method: 'POST',
    header:{
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(movieObject)

  })
  
}



function addmovies(movie){
   const raw =  document.getElementById('card')
    const div = document.createElement('div')
    div.classList.add('col-3')
    div.innerHTML =   `
    <div class="card">
  <img src="${movie.Poster}" class="card-img-top" height="200px" width="200px" alt="image">
  <div class="card-body bg-dark">
    <h5 class="card-title hind-bold text-primary">${movie.Title}</h5>
    <p class="card-text hind-light text-light">${movie.Plot}</p>
    <button  class="btn btn-danger <i class="bi bi-trash3 heading"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 heading" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg></button>
 <button  class="btn btn-warning">Watch movie</button></a>
  </div>
</div>`
 
    
    raw.appendChild(div)
    div.querySelector('button').addEventListener('click', function(){
      div.remove()
      deleteData(movie.id)
    })
    

}



function getMovies(){
    fetch('http://localhost:3000/movies',)
    .then(res => res.json())
    .then(movies =>{
        movies.forEach(addmovies)
    })
  
    
}


document.addEventListener('DOMContentLoaded',function(e){
    getMovies()

})
function  deleteData(id){
  fetch(`http://localhost:3000/movies/${id}`,{
    method: 'DELETE',
    header:{
      'Content-Type': 'application/JSON'
    },
  
  })
  .then(response => response.json())
  
 
  
  
  
 }