/**
* Author: Ali 102116967
* Target: Home.html/Movie.html
* Purpose: Dev Project file
* Created: 27/09/2019
* Last updated: 27/09/2019
* Credits: Ali Moalin
*/

//This function gets the word entered and puts it in the findmovies function
$(document).ready(function()
{
  $('#search').on('submit', (eve) =>
   {
    let movie_search = $('#movie_search').val();
    findmovies(movie_search);
    eve.preventDefault();
  });

  $('#comment').on('submit', (e) => {

    CurrentUser = localStorage.getItem('CurrentUser');

    e.preventDefault();

    if(CurrentUser == null){
        alert("Please login before commenting.")
    }
    else{
        comment_template = "<div class=\"usercomment\"><strong class=\"comment_user\">"+CurrentUser+"</strong><br /><p class=\"comment_text\">"+$("#comment_item").val()+"</p></div><br /><br />"
        $("#comments").prepend(comment_template)
        if(localStorage.getItem($('#movie_name').text()+" comments") == null){
            localStorage.setItem($('#movie_name').text()+" comments",1);
        } else {
            count = parseInt(localStorage.getItem($('#movie_name').text()+" comments"));
            count += 1;
            localStorage.setItem($('#movie_name').text()+" comments", count);
        }
        count = localStorage.getItem($('#movie_name').text()+" comments");
        localStorage.setItem($('#movie_name').text()+" "+count,(comment_template));
    }
  });

});

//this function uses axios to get the movie form the api
function findmovies(movie_search)
{
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=1b33681d3af10205d536492ed8950b6b&language=en-US&query='+movie_search)

  .then((result) => {
    let movies_results = result.data.results;
    let output = ' ';

    //for each loop to loop through the objects provided from the api
    $.each(movies_results, (index, movie) =>{
      //outputs every movie detail in this format -- add classes and id to html it and make it look nice
      if(movie.poster_path != null)
      {
        output += `
        <div id="movie_item">
          <div id="border">
              <img src="http://image.tmdb.org/t/p/w300${movie.poster_path}" width="200" height="313">
              <h2 id="original_title">${movie.original_title}</h2>
              <p>Released: ${movie.release_date}</p>
              <a onclick="movieClick('${movie.id}')" href="#" class="movie_details"> Movie Details </a>
          </div>
        </div>
        `;
      }

    });

    //prints all the movie details into the div inside the home html file
    $('#movie_results').html(output);

  })

  .catch((error) => {
    console.log(error);
  });
}

function movieClick(id)
{
  sessionStorage.setItem('mID', id);
  window.location = 'Movie.html';
  return false;
}

function findmovie()
{
  let mID = sessionStorage.getItem('mID');

  axios.get('https://api.themoviedb.org/3/movie/'+mID+'?api_key=1b33681d3af10205d536492ed8950b6b')
  .then((result) => {
    console.log(result);
    let movieR = result.data;

    let output = `
      <ul style="list-style-type: none;">
          <li id="Image">
            <img src="http://image.tmdb.org/t/p/w300${movieR.poster_path}" width="200" height="313">
          </li>

          <li id="Title">
            <h2 id="movie_name">${movieR.original_title}</h2>
          </li>

          <li id="plot">
            <p>${movieR.overview}</p>
          </li>

          <li class="Information"><strong>Genres:</strong> ${movieR.genres[0].name}</li>
          <li class="Information"><strong>Language:</strong> ${movieR.original_language}</li>
          <li class="Information"><strong>Status:</strong> ${movieR.status}</li>
          <li class="Information"><strong>Released:</strong> ${movieR.release_date}</li>
          <li class="Information"><strong>Rating:</strong> ${movieR.vote_average}</li>

      </ul>
    `;

    $('#movie_details').html(output);
    if(localStorage.getItem($('#movie_name').text())+" comments" != null){
        for (var i = 1; i < localStorage.length; i++){
            console.log(localStorage.getItem(localStorage.key(i)));
            if(localStorage.getItem($('#movie_name').text()+" "+i) != null){
                $("#comments").prepend(localStorage.getItem($('#movie_name').text()+" "+i))
            }
        }    
    }
  })

  axios.get('http://api.themoviedb.org/3/movie/'+mID+'/videos?api_key=1b33681d3af10205d536492ed8950b6b')
  .then((result) => {
    console.log(result);
    let movieR = result.data;

    let output = `
    <ul style="list-style-type: none;">
          <li id="Trailer">
          <iframe width="500" height="300" src="https://www.youtube.com/embed/${movieR.results[0].key}"</iframe>
          </li>
    </ul>
    `;

    $('#trailer_details').html(output);
  })

    .catch((error) => {
      console.log(error);
    });

}
