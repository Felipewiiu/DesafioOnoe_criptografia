const textImput = document.querySelector(".container__section--input");
const encryptBtn = document.querySelector("#encryptBtn");
const decryptBtn = document.querySelector("#decryptBtn");
const containerGroup = document.querySelector(".container_aside--img");
const boxText = document.querySelector(".box-text");
const copyBtn = document.querySelector(".copy-btn")
textImput.value = '';




  


textImput.addEventListener("input", ()=>{
    boxText.value = textImput.value
    if(textImput.value != ""){
        containerGroup.classList.add("disable-content");
        boxText.classList.remove("box-text")
        copyBtn.classList.remove("disable-content")
        
    }else{
        containerGroup.classList.remove("disable-content")
        boxText.classList.add("box-text")
        copyBtn.classList.add("disable-content")
    }

});



encryptBtn.addEventListener("click", () =>{
    boxText.value = textImput.value
    
})

decryptBtn.addEventListener("click", () =>{
    console.log(textImput.value)
})




