//TO DO: Declare variables for document.querySelector to dynamically change text through HTML when 
//displaying info on content page

// API Keys
// LOTR Key
var lotrAPI = "ql0OUYOIpoNhyZBMrR2O";


// API Pulls

// LOTR API pull:
// copy-pasted from 06-Server-Side-APIs > 01-Activities > 05-Ins_Different_APIs > assets > js > script.js
var requestUrl = 'https://the-one-api.dev/v2/character';
//Browser XMLHttpRequest, built in the browser and require more code.
var lotrInfo = "";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log('XMLHttpRequest Response \n-------------');
        console.log(xhr.response);
    }
};
xhr.open('GET', requestUrl);
xhr.send();
// copy-pasted from stack overflow lol: https://stackoverflow.com/questions/51506579/sending-authorization-token-bearer-through-javascript
$.ajax({
    url: requestUrl,
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + lotrAPI);
    },
    success: function (response) {
        //console.log(response);
        lotrInfo = response;
    
        // how to grab specific info:
        //console.log(lotrInfo["docs"]["40"]["name"]);
        //This section is to append character info from the API to the HTML
        function getCharacterInfo() {
        const charName = document.getElementById("charName");
        charName.innerText = (lotrInfo["docs"]["40"]["name"]);
        const name = document.getElementById("name");
        name.innerText = (lotrInfo["docs"]["40"]["name"]);
        const dob = document.getElementById("dob");
        dob.innerText = (lotrInfo["docs"]["40"]["birth"]);
        const doDeath = document.getElementById("doDeath");
        doDeath.innerText = (lotrInfo["docs"]["40"]["death"]);
        const race = document.getElementById("race");
        race.innerText = (lotrInfo["docs"]["40"]["race"]);
        const realm = document.getElementById("realm");
        realm.innerText = (lotrInfo["docs"]["40"]["realm"]);
        const spouse = document.getElementById("spouse");
        spouse.innerText = (lotrInfo["docs"]["40"]["spouse"]);
        const height = document.getElementById("height");
        height.innerText = (lotrInfo["docs"]["40"]["height"]);
        const hair = document.getElementById("hair");
        hair.innerText = (lotrInfo["docs"]["40"]["hair"]);
        const gender = document.getElementById("gender");
        gender.innerText = (lotrInfo["docs"]["40"]["gender"]);
    }
        getCharacterInfo();
    }
})
