let searchBtn = document.querySelector(".serachBtn")
let serachVal = document.querySelector(".serachVal")
let partOfSpeech = document.querySelector(".partOfSpeech");
let partOfSpeech2 = document.querySelector(".partOfSpeech2");
let li1 = document.querySelector(".li-1");
let li2 = document.querySelector(".li-2");
let li3 = document.querySelector(".li-3");
let synonyms = document.querySelector(".synonyms");
let verbdes = document.querySelector(".verbdes");
let verbdefine = document.querySelector(".verbdefine");

let playbtn = document.querySelector("#playbtn");

const allDefinitions = [];
const updateDetails = (orgVal) => {
    serachVal.innerHTML = orgVal.word;

    try {
        partOfSpeech.innerHTML = orgVal.meanings[0].partOfSpeech;

    } catch (error) {
        console.log("Not defined")
    }

    try {
        partOfSpeech2.innerHTML = orgVal.meanings[1].partOfSpeech;

    } catch (error) {
        console.log("Not defined")
    }


    const meanings = orgVal.meanings;
    meanings.forEach((meaning) => {
        const definitions = meaning.definitions;
        definitions.forEach((definitions) => {
            allDefinitions.push(definitions.definition);

        })
    })
    try {
        li1.innerHTML = allDefinitions[0];

    } catch (error) {

    }
    try {

        li2.innerHTML = allDefinitions[1];
    } catch (error) {

    }
    try {

        li3.innerHTML = allDefinitions[2];
    } catch (error) {

    }
    try {
        synonyms.innerHTML = meanings[0].synonyms[0];

    } catch (error) {

    }
    try {

        verbdes.innerHTML = orgVal.meanings[1].definitions[0].definition;
    } catch (error) {

    }
    try {
        verbdefine.innerHTML = meanings[1].definitions[0].example;

    } catch (error) {

    }


    try {
        let audioURL = orgVal.phonetics[0].audio;

        var audioele = new Audio();
        var isPlaying = false;
        playbtn.addEventListener("click", function () {
            if (!isPlaying) {
                isPlaying = true;
                audioele.src = audioURL;
                audioele.play()
                    .then(function () {
                        console.log("Audio playing...");
                        isPlaying = false;
                    })
                    .catch(function (error) {
                        console.log("Error playing audio: " + error.message);
                        isPlaying = false;
                    });
            }
        });

    } catch (error) {
        console.log("error")
    }

}



const sendApiReq = () => {
    let inputValue = document.querySelector("#inputValues").value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then((Response) => {
            Response.json()
                .then(data => {

                    const arrData = [data];
                    const val = arrData[0][0]
                    updateDetails(val);
                })

        })
}



searchBtn.addEventListener("click", () => {
    sendApiReq();
})


const ac = document.querySelector('#accept');
ac.addEventListener('click', (e) => {

    if (ac.checked == true) {

        document.body.style.background = "#3f4144";
        document.querySelector('h1').style.color = "white"
        document.querySelector('.partOfSpeech').style.color = "white"
        document.querySelector('.partOfSpeech2').style.color = "white"
        document.querySelector('.li-1').style.color = "white"
        document.querySelector('.li-2').style.color = "white"
        document.querySelector('.li-3').style.color = "white"
        document.querySelector('.verbdes').style.color = "white"
    }
    if (ac.checked == false) {
        document.body.style.background = "#c1cdde";
    }



})



