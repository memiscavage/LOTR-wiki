// to-dos up here

// api keys
// lotr key
var lotrAPI = "ql0OUYOIpoNhyZBMrR2O";

//TO DO: Declare variables for document.querySelector to dynamically change text through HTML when 
//displaying info on content page
//TO DO: add other variables here

//TO DO: Create click event for search button on homepage
//TO DO: Create click event for hamburger on mobile homepage




// api stuffs
var baseLotrURL = "https://the-one-api.dev/v2/";
var charactersURL = baseLotrURL + "character" + "&appid=" + lotrAPI;
async function pullLotrAPI() {
    const lotrResponse = await fetch(charactersURL);
    const charactersInfo = await lotrResponse.json();
    console.log(charactersInfo);
}
// not working????????????
pullLotrAPI();