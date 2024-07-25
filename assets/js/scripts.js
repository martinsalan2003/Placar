const timeCasa = document.querySelector ("#casa");
const timeFora = document.querySelector("#fora");
const container = document.querySelector("#visible");
const text = document.querySelectorAll(".txt")


function proximaEtapa() {
  let etapa2 = "";
  
  if(text[0].value.length === 0 || text[1].value.length === 0 ) {

    alert("Ops, esta faltando algo, verifique e tente novamente")
    
} else {
  etapa2 = `
        <section id="view">
        <div class="container">
            <input placeholder="Informe a quantidade de gols do ${timeCasa.value}" type="number" id="golScasa" >
            <h2>X</h2>
            <input placeholder="Informe a quantidade de gols do ${timeFora.value}" type="number" id="golSfora" >
            <button onclick="Resultado()">resultado</button>
            
        </div>
    </section>
        `;


  container.innerHTML = etapa2;
  } 
}

function Resultado() {
  let resposta = "";
  const golScasa = document.getElementById('golScasa')
  const golSfora = document.getElementById('golSfora')

if(golScasa.value.length === 0 || golSfora.value.length === 0) {
  alert("Ops, esta faltando algo, verifique e tente novamente")
}
else {
  if(golScasa.value > golSfora.value){
    
    resposta = `<section >
            <div class="container">
                Placar do jogo: 
                <br>
                ${timeCasa.value} : ${golScasa.value}
                <h2>X</h2>
                ${timeFora.value} : ${golSfora.value}
                <br>
                <br>
                 ${timeCasa.value} o mais novo campeão
                <button onClick="window.location.reload()">Refazer</button>
            </div>
         </section>`
  }else if(golScasa.value === golSfora.value) {
    resposta = `<section >
    <div class="container">
        Placar do jogo: 
        <br>
        ${timeCasa.value} : ${golScasa.value}
        <h2>X</h2>
        ${timeFora.value} : ${golSfora.value}
        <br>
        <br>
          Desta vez houve empate
        <button onClick="window.location.reload()">Refazer</button>
    </div>
 </section>`
  }else {
    resposta =  `<section >
    <div class="container">
        Placar do jogo: <br>
        ${timeFora.value} : ${golSfora.value}
        <h2>X</h2>
        ${timeCasa.value} : ${golScasa.value}
         <br>
         <br>
            ${timeFora.value} o mais novo campeão
        <button onClick="window.location.reload()">Refazer</button>
    </div>
 </section>`
  }

  container.innerHTML = resposta;
} 
}