fronteditor.dev/nlw-unite


# JS
const mensagem="Oi tudo bem"
alert(mensagem)


//objeto JS
const participante= {
  nome:"Breno Goularte",
  email: "Breno@hotmail.com",
  dataInscricao: new Date(2024,2, 22, 19,20),
  dataCheckIn: new Date(2024, 2,25, 22,00) 
}
//array
let participantes =[
  {
   nome:"Breno Goularte",
   email: "Breno@hotmail.com",
   dataInscricao: new Date(2024,2, 22, 19, 20),
   dataCheckIn: new Date(2024, 2,25, 22,00) 

  },

  //estrutura de repetição - loop
  const atualizarlista=(participantes)=>{
  let output = ""
  for(let participante of participantes){
    //faça alguma coisa
    output = output + criarNovoParticipante(participante)

  }
  //substituir informação do HTML
  document.querySelector("tbody").innerHTML = output
}