//array
let participantes = [
  {
    nome: "Breno Goularte",
    email: "Breno@hotmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Fernanda Zaranda",
    email: "Zaranda@hotmail.com",
    dataInscricao: new Date(2024, 3, 27, 18, 20),
    dataCheckIn: null
  },
  {
    nome: "José Silva",
    email: "jose.silva@example.com",
    dataInscricao: new Date(2024, 3, 1, 14, 30),
    dataCheckIn: new Date(2024, 3, 2, 10, 00)
  },
  {
    nome: "Ana Sousa",
    email: "ana.sousa@example.com",
    dataInscricao: new Date(2024, 2, 15, 11, 45),
    dataCheckIn: null
  },
  {
    nome: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    dataInscricao: new Date(2024, 2, 8, 9, 15),
    dataCheckIn: new Date(2024, 2, 10, 14, 45)
  },
  {
    nome: "Mariana Santos",
    email: "mariana.santos@example.com",
    dataInscricao: new Date(2024, 3, 5, 17, 10),
    dataCheckIn: new Date(2024, 3, 8, 11, 20)
  },
  {
    nome: "Pedro Costa",
    email: "pedro.costa@example.com",
    dataInscricao: new Date(2024, 2, 19, 20, 40),
    dataCheckIn: new Date(2024, 2, 22, 8, 30)
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataInscricao: new Date(2024, 3, 10, 15, 55),
    dataCheckIn: new Date(2024, 3, 14, 9, 10)
  },
  {
    nome: "Jorge Pereira",
    email: "jorge.pereira@example.com",
    dataInscricao: new Date(2024, 3, 18, 13, 25),
    dataCheckIn: new Date(2024, 3, 20, 18, 45)
  },
  {
    nome: "Luísa Martins",
    email: "luisa.martins@example.com",
    dataInscricao: new Date(2024, 2, 25, 8, 50),
    dataCheckIn: new Date(2024, 2, 28, 12, 15)
  }
];


const criarNovoParticipante =(participante)=>{
 const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

 let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
//condicional
 if(participante.dataCheckIn == null){
  dataCheckIn=`
  <button 
  data-email="${participante.email}"  
  onclick="fazerCheckIn(event)">
  Confirmar Check-in
  </button>

  `
 }


  return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
          </strong>
          <br>
          <small>
          ${participante.email}
        </small>

      </td>
      <td>${dataInscricao}</td>
      <td> ${dataCheckIn}</td>
    </tr>
  `
}

const atualizarlista=(participantes)=>{
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes){
    //faça alguma coisa
    output = output + criarNovoParticipante(participante)

  }
  //substituir informação do HTML
  document.querySelector("tbody").innerHTML = output
}

atualizarlista(participantes)

const adicionarParticipante=(event)=>{

  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante={
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null

  }
  
  // o participante existe?
  const participanteExiste= participantes.find((p) => p.email == participante.email
    
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }
  participantes = [participante, ...participantes]
  atualizarlista(participantes)
  //limpar form
  event.target.querySelector('[name="nome"]').value=""
  event.target.querySelector('[name="email"]').value=""

}

const fazerCheckIn = (event)=>{
  //confirmar check-in
  const mensagemConfirmacao = 'tem certeza que      deseja fazer o check-in'

  if(confirm(mensagemConfirmacao) == false){
  return
  }

  //encontrar o participante dentro da lista
  const participante = participantes.find((p)=> {
    return p.email == event.target.dataset.email 
  })
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  //atualizar a lista de participantes
  atualizarlista(participantes)

}


