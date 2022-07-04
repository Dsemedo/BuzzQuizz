let objeto = {};
let qtdPerguntas;
let qtdNiveis;
const btn = document.querySelector('#enviar');

function abrirTela3(){
  const tela1 = document.querySelector(".tela1").classList.add("escondido");
  const tela3 = document.querySelector(".tela3-1").classList.remove("escondido");
}


btn.addEventListener('click',function(e){
  e.preventDefault();
  const tituloQuizz3 = document.querySelector('#TituloQuizz');
  const UrlQuizz3 = document.querySelector('#UrlQuizz');
  const qtdperguntas3 = document.querySelector('#qtdperguntas');
  const qtdniveis3 = document.querySelector('#qtdniveis');
  verificaQuizz(tituloQuizz3.value,UrlQuizz3.value,qtdperguntas3.value,qtdniveis3.value);
})

function verificaQuizz(titulo, url, perguntas3, niveis3) {
  function checkUrl(url){
      var pattern = /^https:\/\//i;;
      if(pattern.test(url)) {
          return true;
      } 
  }

      if(titulo.length < 20 || checkUrl(url) !== true || perguntas3 < 3 || niveis3 < 2) {
          alert('Preencha os dados corretamente!');
      } else {
          objeto = {title:titulo,
                  image: url,
                  questions: []
          }
          console.log(objeto, perguntas3, niveis3)
          qtdPerguntas = perguntas3;
          qtdNiveis = niveis3;
          criaQuizz();
      }
      
}


function criaQuizz(perguntas3){
    const tela31 = document.querySelector(".tela3-1");
    tela31.classList.add("escondido");
    const tela32 = document.querySelector(".tela3-2");
    tela32.classList.remove("escondido");


    for(i=0; i < qtdPerguntas; i++){
        tela32.innerHTML += `
        <div class="caixa-quizz3">

        <div class="pergunta1-3">
        

          <div class="pergunta-aberta">
            <div class="titulo3">
            <span>Pergunta ${i + 1}</span>
            <input
              type="text"
              name=""
              id="TituloPergunta${i}"
              minlength="20"
              placeholder="Coloque aqui o texto da pergunta e abaixo coloque a cor desejada "
            />
            <input
              type="color"
              name=""
              id="CorPergunta${i}"
              placeholder="Cor de fundo da pergunta"
            />
          </div>

          <div class="titulo3">
            

            <input
              type="text"
              name=""
              id="RespostaCorreta${i}"
              placeholder="Resposta correta"
            />
            <input class="true"
              type="url"
              name=""
              id="UrlCorreta${i}"
              placeholder="URL da imagem"
            />
          </div>

          <div class="titulo3">
            
            <input
              type="text"
              name=""
              id="RespostaIncorreta${i}"
              placeholder="Resposta incorreta 1"
            />
            <input
              type="url"
              name=""
              id="UrlIncorreta${i}"
              placeholder="URL da imagem 1"
            />

            <div class="grupo">
              <input
                type="text"
                name=""
                id="RespostaIncorreta${i+1}"
                placeholder="Resposta incorreta 2"
              />
              <input
                type="url"
                name=""
                id="UrlIncorreta${i+1}"
                placeholder="URL da imagem 2"
              />
            </div>

            <div class="grupo">
              <input
                type="text"
                name=""
                id="RespostaIncorreta${i+2}"
                placeholder="Resposta incorreta 3"
              />
              <input
                type="url"
                name=""
                id="UrlIncorreta${i+2}"
                placeholder="URL da imagem 3"
              />
            </div>
          </div>
          </div>
        
      
        `
    }
    tela32.innerHTML += `
    <div class="caixa-quizz3">
    <button type="submit" onclick="enviarPerguntas()">
      Prosseguir para criar níveis
    </button>
    </div>

  `

}

function enviarPerguntas() {
  for (let i = 0; i < qtdPerguntas; i++) {
    const tituloPergunta = document.querySelector(`#TituloPergunta${i}`).value
    const corPergunta = document.querySelector(`#CorPergunta${i}`).value;
    objeto.questions[i] = {
      title:tituloPergunta,
      color:corPergunta, 
      answers:[]};




      const RespostaCorreta = document.querySelector(`#RespostaCorreta${i}`).value
      const UrlCorreta = document.querySelector(`#UrlCorreta${i}`).value;
      const RespostaIncorreta =  document.querySelector(`#RespostaIncorreta${i+2}`).value;
      const UrlIncorreta = document.querySelector(`#UrlIncorreta${i+2}`).value;
      const variavel = documente.querySelector()

      if(RespostaIncorreta){
        for(let j = 0; j < 4 ; j++) {
          objeto.questions[i].answers[j] = {
            text:RespostaCorreta,
            image: UrlCorreta,
            isCorrectAnswer: true
          }
        } 
      } else {
        

        for(let j = 0; j < 4 ; j++) {
          objeto.questions[i].answers[j] = {
            text: RespostaIncorreta,
            image: UrlIncorreta,
            isCorrectAnswer: false
          }
        }
      }
  }
  console.log(objeto.questions);
}



/* function abrirPergunta(elemento){
  console.log(elemento);
  if(elemento.classList('pergunta-fechada')) {
    elemento.classList.add("escondido");
  } else if(elemento.classList('pergunta-aberta')) {
    elemento.classList.remove("escondido");
  }
   
  
} */

// function abrirPergunta(elemento){
//   console.log(elemento)
//   const fecharPergunta = document.querySelector(".pergunta-fechada").classList.add("escondido");
//   const abrirPergunta = document.querySelector(".pergunta-aberta").classList.remove("escondido");

// }

// function abrirNivel(nivel){
//     const fecharNivel = document.querySelector(".nivel-fechado").classList.add("escondido");
//     const abrirNivel = document.querySelector(".nivel-aberto").classList.remove("escondido");

// }
