export default function cryptography (variable, object, boxText){
    let text = variable.value

      // Aqui transformo o objeto em um array de string e depois aglutino com(|),expressão regular "OU", passando
      // a flag "ig", que serve para verificar a string por inteiro e ignorando o case dos caracteres
      const regex = new RegExp(Object.keys(object).join('|'), 'ig'); //  retorno --> a|e|i|o|u
      
      // aqui crio um novo texto que pega o valor do imput e usa a regex para identificar o padrão procurado passando 
      // uma calback que é executada a cada match da regex trocando a vogal pelo valor de um dos atributos do  objectVowel
      let newText = text.replace(regex, (c) => object[c.toLowerCase()]);
      boxText.value = newText
}