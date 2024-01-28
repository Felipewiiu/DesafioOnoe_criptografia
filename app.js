import cryptography from "./cryptography.js";
import copy from "./functionCopy.js";
const textImput = document.querySelector(".container__section--input");
const encryptBtn = document.querySelector("#encryptBtn");
const decryptBtn = document.querySelector("#decryptBtn");
const containerGroup = document.querySelector(".container_aside--img");
const boxText = document.querySelector(".box-text");
const copyBtn = document.querySelector(".copy-btn")
const label = document.querySelector("#label")
const texTip = document.querySelector(".text__tip")
textImput.value = '';

const objectCripity = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const objectDeCripity = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

//Logica de habilitar e desabilitar a imagem lateral
textImput.addEventListener("input", () => {
    boxText.value = textImput.value
    if (textImput.value != "") {
        containerGroup.classList.add("disable-content");
        boxText.classList.remove("box-text")
        copyBtn.classList.remove("disable-content")

    } else {
        containerGroup.classList.remove("disable-content")
        boxText.classList.add("box-text")
        copyBtn.classList.add("disable-content")
    }

    const regex = new RegExp("^[a-z0-9\\s]+$", 'g')

    const test = regex.test(boxText.value)


    if (test) {
        texTip.classList.remove("text-error")
        console.log("Passou no teste no teste")
        encryptBtn.removeAttribute("disabled")

    } else {
        console.log("Reprovou no teste")
        texTip.classList.add("text-error")
        encryptBtn.setAttribute("disabled", true)

    }

    boxText.value == "" ? 
    texTip.classList.remove("text-error") &&
     encryptBtn.removeAttribute("disabled") : "";


});


encryptBtn.addEventListener("click", () => {
    cryptography(textImput, objectCripity, boxText)
})



decryptBtn.addEventListener("click", () => {
    cryptography(textImput, objectDeCripity, boxText)
})

function desableLable() {
    label.classList.add("label-disable")
}

copyBtn.addEventListener("click", () => {
    copy(boxText)
    label.classList.remove("label-disable")
    label.classList.add("label-enable")
    setTimeout(desableLable, 2000)


})





