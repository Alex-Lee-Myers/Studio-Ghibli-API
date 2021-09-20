//GLOBAL VARIABLES
// API URL
const charURL = 'https://ghibliapi.herokuapp.com/people';
const filmURL = 'https://ghibliapi.herokuapp.com/films';
const locURL = 'https://ghibliapi.herokuapp.com/locations';

// Call and use pre-existing HTML elements (main/section)
let SGSreplace = document.querySelector("#SGSearch");
let charID = document.querySelector("#charSearch");
let filmID = document.querySelector("#filmSearch");
let locID = document.querySelector("#locSearch");

// -------- separator ------- Local data from JS file displayed -------

// Make a display function to do all that:
// Creating elements, Give them data, Append to HTML/site page
//function displayFilms() {
    //Console.logging to check if object/data is passed
        //console.log(films);//to make sure when this gets called, is it actually receiving everything from myBio?

    // Create my elements for bio info

    //Give element bio data
        //nameTag.innerText = `Hello there, my name is ${bio.name}!`;

    //Append those elements to the main bio div
        //bioDiv.appendChild(nameTag);

// -------- separator ------- External data from API display -------
// Creating the fetch to grab data

fetch(charURL)
    .then(res => res.json())
    .then(data => charDisplay(data))
    .catch(err => console.log(err))

let charDisplay = (data) => {
     console.log(data);

    let tempAge = data[0].age;
    console.log(tempAge);
}
//       console.log(data);


    // create new elements for incoming data
       //let img1 = document.createElement("img"); //img = thats the tag.

    // Give new elements attributes and data to display 
       //img1.className = "cards"; //could do this with a loop

    // Populating card/img1's attributes
        //img1.src = `${card[0].image}`;
        //img1.alt = `A playing card that is the ${card[0].value} of ${card[0].suit.toLowerCase()}`;



    //Appending the cards/images to the HTML; through apiDiv
        //apiDiv.appendChild(img1);