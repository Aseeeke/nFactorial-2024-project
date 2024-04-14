const apiKey = '4280b236fba56670c76a96fae26c2463';

function getPopularMovies() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1&language=en-US`) //  
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      const moviesContainer = document.getElementById("movies");
      let html = '';
      for (let i = 0; i < movies.length-2; i++) {
        const movie = movies[i];
        html += `
          <div class="singleMovie">
          <div class="imageContainer">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="moviePoster"><div class="textOver"><h1>${movie.title}<br>${movie.release_date.slice(0, 4)}</h1></div>
          </div></div>
        `;
      }
      moviesContainer.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
}
getPopularMovies();

function discover(genreName) {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${genreName}`)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      const movieContainer = document.querySelector('.hidden');
      let html = '';
      for(let i = 0; i < movies.length-1; i++){
        const movie = movies[i];
        html += `
          <div class="singleMovie">
            <div class="imageContainer">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="moviePoster" style="width: 250px; height: 370px;"><div class="textOver"><h1>${movie.title}<br>${movie.release_date.slice(0, 4)}</h1></div>
            </div>
          </div>
        `;
      }
      html += `
      <div class="singleMovie">
        <div class="imageContainer">
          <img src="scenes/32.jpg" id="removeClick" style="width: 250px; height: 370px; border-radius: 6px;">
        </div>
      </div>
      `;
      movieContainer.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const logo = document.getElementById("logo");
  logo.addEventListener("click", scrollToTop);
  window.addEventListener('scroll', function() {
  var navigation = document.querySelector('.navigation');
  var logoImage = document.getElementById('logoImage');
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 400) {
    navigation.classList.add('shrink');
    logoImage.src = 'logeeen.png';
  } else {
    navigation.classList.remove('shrink');
    logoImage.src = 'logaaan.png';
  }
});
});

function executeSearch() {
  const name = document.getElementById("Name").value.trim();
  if (name === "") {
    
  }
  else {
    const dropdown = document.getElementsByClassName("dropdown-content")[0];
    const selectedOption = dropdown.querySelector(".selected");

    if (selectedOption) {
      const option = selectedOption.getAttribute("data-option");

      switch (option) {
        case "title":
          searchMovie();
          break;
        case "actor":
          searchActor();
          break;
        case "genre":
          searchGenre();
          break;
        case "TV":
          searchTV();
          break;
        default:
          searchMovie();
          break;
      }
    } 
    else {
      searchMovie(); 
    }
  }
}


function selectOption(option) {
  const dropdown = document.getElementsByClassName("dropdown-content")[0];
  const options = dropdown.getElementsByTagName("a");
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("selected");
  }

  option.classList.add("selected");
}

function searchMovie() {
  const movieName = document.getElementById("Name").value;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${encodeURIComponent(movieName)}`;
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("searchResults", JSON.stringify(data.results));
      window.location.href = "search-results.html";
    })
    .catch(error => {
      console.error(error);
      displayErrorMessage("An error occurred. Please try again later.");
    });
}

function searchActor() {
  const actorName = document.getElementById("Name").value;
  const searchUrl = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&page=1&query=${encodeURIComponent(actorName)}&include_adult=false`;
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("actorSearchResults", JSON.stringify(data.results));
      window.location.href = "trailer-prot.html";
    })
    .then(error => {
      console.error(error);
      displayErrorMessage("An error occurred. Please try again later.");
    });
}

function searchTV(){
  const TVName = document.getElementById("Name").value;
  const searchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${TVName}`;
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("TVSearchResults", JSON.stringify(data.results));
      window.location.href = "TV-results.html";
    })
    .then(error => {
      console.error(error);
      displayErrorMessage("An error occurred. Please try again later.");
    });
}

function displayErrorMessage(message) {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = `<h1 style="color: white;">${message}</h1>`;
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); 
    document.getElementById("search").click(); 
  }
}




