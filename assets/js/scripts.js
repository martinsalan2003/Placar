const timeCasa = document.querySelector("#casa");
const timeFora = document.querySelector("#fora");
const container = document.querySelector("#visible");

function proximaEtapa() {
  let etapa2 = "";
  
  etapa2 = `
        <section id="view">
        <div class="container">
            <input placeholder="Informe a quantidade de gols do ${timeCasa.value}" type="number" id="golScasa">
            <h2>X</h2>
            <input placeholder="Informe a quantidade de gols do ${timeFora.value}" type="number" id="golSfora">
            <button onclick="Resultado()">resultado</button>
            
        </div>
    </section>
        `;

  container.innerHTML = etapa2;
  
}

function Resultado() {
  let resposta = "";

  const golsScasa = document.getElementById('golScasa')
  const golSfora = document.getElementById('golSfora')


  if(golsScasa.value > golSfora.value){
    
    resposta = `<section >
            <div class="container">
                Placar do jogo: 
                <br>
                ${timeCasa.value} : ${golsScasa.value}
                <h2>X</h2>
                ${timeFora.value} : ${golSfora.value}
                <br>
                <br>
                 ${timeCasa.value} o mais novo campeão
                <button onclick="()">Refazer</button>
            </div>
         </section>`
  }else if(golsScasa.value === golSfora.value) {
    resposta = `<section >
    <div class="container">
        Placar do jogo: 
        <br>
        ${timeCasa.value} : ${golsScasa.value}
        <h2>X</h2>
        ${timeFora.value} : ${golSfora.value}
        <br>
        <br>
          Desta vez houve empate
        <button onclick="()">Refazer</button>
    </div>
 </section>`
  }else {
    resposta =  `<section >
    <div class="container">
        Placar do jogo: <br>
        ${timeFora.value} : ${golSfora.value}
        <h2>X</h2>
        ${timeCasa.value} : ${golsScasa.value}
         <br>
         <br>
            ${timeFora.value} o mais novo campeão
        <button onclick="()">Refazer</button>
    </div>
 </section>`
  }


  container.innerHTML = resposta;
}



function validação() {

}