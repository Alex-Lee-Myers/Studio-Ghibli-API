//GLOBAL VARIABLES /* random update for august 21, 2021 class */
// API URL
const filmURL = 'https://ghibliapi.herokuapp.com/films';

// Call and use pre-existing HTML elements (main/section)
let filmID = document.querySelector("#newFilm");
const filmInfo = document.getElementById('#filmInfo');
const bcInfo = document.getElementsByClassName('.bcInfo');

// Creating the fetch to grab data
let newFilm = () => {
fetch(filmURL)
    .then(res => res.json())
    .then(data => filmDisplay(data))
    .catch(err => console.log(err))
}

let filmDisplay = (data) => {
    while(bcInfo.firstChild) {
        bcInfo.removeChild(bcInfo.firstChild);
    }

    while(buttonClick.firstChild) { //if it has a first child
        buttonClick.removeChild(buttonClick.firstChild); //then remove that child
    }

    //random array values
    let filmArray = [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20]];
    let theArray = filmArray[Math.floor(Math.random() * filmArray.length)];
    // console.log(theArray);

    //Create elements for random array pull
    let titleOfFilm = document.createElement('h1');
    let jpnTitle = document.createElement('h3');
    let directorOfFilm = document.createElement('h3');
    let descriptionOfFilm = document.createElement('p');
    let rtScore = document.createElement('h3');
    let releaseDate = document.createElement('h3');
    

    //give data

    titleOfFilm.innerText = `${theArray.title}`;   
    jpnTitle.innerText = `${theArray.original_title}`;
    directorOfFilm.innerText = `Director: ${theArray.director}`; //stretch goal is italizing the calling in element
    descriptionOfFilm.innerText = `${theArray.description}`;
    rtScore.innerText = `RottenTomatoe's Score: ${theArray.rt_score}`; //stretch goal is italizing the calling in element
    releaseDate.innerText = `Release Year: ${theArray.release_date}`; 
    
    
    // STRETCH GOAL
    // 1.) remove the main image on click
    // 2.) replace buttonClick info on top of it
        // 2a.) smooth transition of this
    // 3.) SGSreplace main image returns after 20 seconds OR reset button hit
    let SGSreplace = document.querySelector("#SGSearch");
    // SGSreplace.remove();
    // while(SGSreplace = './assets/StudioGhibliSearch.png') { //if it has a first child
    //     SGSreplace.remove; //then remove that child
    // }

    //append the above to HTML to display
    buttonClick.appendChild(titleOfFilm);
    buttonClick.appendChild(jpnTitle);
    buttonClick.appendChild(directorOfFilm);
    buttonClick.appendChild(descriptionOfFilm);
    buttonClick.appendChild(rtScore);
    buttonClick.appendChild(releaseDate);
    
}