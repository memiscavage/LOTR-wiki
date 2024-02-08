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

// copy pasted from 06-Server-Side-APIs > 01-Activities > 05-Ins_Different_APIs > assets > js > script.js
var requestUrl = 'https://the-one-api.dev/v2/character';
//Browser XMLHttpRequest, built in the browser and require more code.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log('XMLHttpRequest Response \n-------------');
        console.log(xhr.response);
    }
};
xhr.open('GET', requestUrl);
xhr.send();

// copy pasted from stack overflow lol: https://stackoverflow.com/questions/51506579/sending-authorization-token-bearer-through-javascript
$.ajax({
    url: requestU,
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + lotrAPI);
    },
    success: function (response) {
        console.log(response);
    }
})

// old broken
//var baseLotrURL = "https://the-one-api.dev/v2/";
//var charactersURL = baseLotrURL + "character" + "&appid=" + lotrAPI;
//async function pullLotrAPI() {
//    const lotrResponse = await fetch(charactersURL);
//    const charactersInfo = await lotrResponse.json();
//    console.log(charactersInfo);
//}
//// not working????????????
//pullLotrAPI();