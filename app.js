const textImput = document.querySelector(".container__section--input");
const encryptBtn = document.querySelector("#encryptBtn");
const decryptBtn = document.querySelector("#decryptBtn");
const containerGroup = document.querySelector(".container_aside--img");
const boxText = document.querySelector(".box-text");
const copyBtn = document.querySelector(".copy-btn")
textImput.value = '';

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

});



encryptBtn.addEventListener("click", () => {
    let text = textImput.value

    const objectVowel = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
      };
      
      // Aqui transformo o objeto em um array de string e depois aglutino com(|),expressão regular "OU", passando
      // a flag "ig", que serve para verificar a string por inteiro e ignorando o case dos caracteres
      const regex = new RegExp(Object.keys(objectVowel).join('|'), 'ig'); //  retorno --> a|e|i|o|u
      
      // aqui crio um novo texto que pega o valor do imput e usa a regex para identificar o padrão procurado passando 
      // uma calback que é executada a cada match da regex trocando a vogal pelo valor de um dos atributos do  objectVowel
      let newText = text.replace(regex, (c) => objectVowel[c.toLowerCase()]);
      boxText.value = newText
})



decryptBtn.addEventListener("click", () => {
    console.log(textImput.value)
})




