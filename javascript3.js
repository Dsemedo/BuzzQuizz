let API = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

let objeto = {};
let qtdPerguntas;
const btn = document.querySelector('#enviar');

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
        <div class="pergunta-fechada" onclick="abrirPergunta(this)">
            
            <span>Pergunta ${i + 1}</span>
            <ion-icon name="create-outline"></ion-icon>
  
          </div>

          <div class="pergunta-aberta escondido">
            <div class="titulo3">
            <span>Pergunta ${i + 1}</span>
            <input
              type="text"
              name=""
              id="TextoPergunta1"
              minlength="20"
              placeholder="Coloque aqui o texto da pergunta e abaixo coloque a cor desejada "
            />
            <input
              type="color"
              name=""
              id="CorPergunta1"
              placeholder="Cor de fundo da pergunta"
            />
          </div>

          <div class="titulo3">
            <span>Resposta Correta</span>

            <input
              type="text"
              name=""
              id="RespostaCorreta1"
              placeholder="Resposta correta"
            />
            <input
              type="url"
              name=""
              id="UrlQuizz"
              placeholder="URL da imagem"
            />
          </div>

          <div class="titulo3">
            <span>Respostas incorretas</span>

            <input
              type="text"
              name=""
              id="RespostaIncorreta1"
              placeholder="Resposta incorreta 1"
            />
            <input
              type="url"
              name=""
              id="UrlResposta1"
              placeholder="URL da imagem 1"
            />

            <div class="grupo">
              <input
                type="text"
                name=""
                id="RespostaIncorreta2"
                placeholder="Resposta incorreta 2"
              />
              <input
                type="url"
                name=""
                id="UrlResposta2"
                placeholder="URL da imagem 2"
              />
            </div>

            <div class="grupo">
              <input
                type="text"
                name=""
                id="RespostaIncorreta3"
                placeholder="Resposta incorreta 3"
              />
              <input
                type="url"
                name=""
                id="UrlResposta3"
                placeholder="URL da imagem 3"
              />
            </div>
          </div>
        </div>
        
      
        `
    }

}

function abrirPergunta(){
    const fecharPergunta = document.querySelector(".pergunta-fechada").classList.add("escondido");
    const abrirPergunta = document.querySelector(".pergunta-aberta").classList.remove("escondido");

}

// function abrirNivel(nivel){
//     const fecharNivel = document.querySelector(".nivel-fechado").classList.add("escondido");
//     const abrirNivel = document.querySelector(".nivel-aberto").classList.remove("escondido");

// }