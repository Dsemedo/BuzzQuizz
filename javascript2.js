const promessa = axios.get(
	"https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );
  promessa.then(obterQuizz);
  
  function obterQuizz(quiz) {
	const quizServer = quiz.data;
	carregarQuiz(8229, quizServer);
  }
  
  function carregarQuiz(id, quizServer) {
	const quizEscolhido = quizServer.find((quiz) => quiz.id === id);
	postaPergunta(quizEscolhido.questions);
	postaImagem(quizEscolhido);
  }
  
  function postaImagem(titulo) {
	const imagemQuiz = document.querySelector(".imagem-quizz2");
	for (let i = 0; i < 1; i++) {
	  imagemQuiz.innerHTML += `
  
				  <img src="${titulo.image}" alt="" srcset="">
				  <p>${titulo.title}</p>
		  `;
	}
  }
  
  function postaPergunta(perguntas) {
	const selecionaDiv = document.querySelector(".jogo2");
	let perguntasEmbaralhadas;
	for (let i = 0; i < perguntas.length; i++) {
	  selecionaDiv.innerHTML += `
		  <div class="quadro2" id="quadro-${i}" >
			  <div class="pergunta2" style="background-color:${perguntas[i].color}">
			  <p>${perguntas[i].title}</p>
			  </div>
		  </div>
	  `;
	  const selecionaQuadro = document.querySelector(`#quadro-${i}`);
	  selecionaQuadro.innerHTML += `<div class="imagens2" id="imagens-${i}"></div>`;
	  const selecionaImagem = document.querySelector(`#imagens-${i}`);
	  perguntasEmbaralhadas = perguntas[i].answers.sort(
		() => Math.random() - 0.5
	  );
	  for (let j = 0; j < perguntasEmbaralhadas.length; j++) {
		selecionaImagem.innerHTML += `
  
			  <div class="imagem2 ${perguntasEmbaralhadas}" >
				  <img src="${perguntasEmbaralhadas[j].image}" alt="" onclick="selecionaResposta(this)">
				  <p>${perguntasEmbaralhadas[j].text}</p>
			  </div>
		  
		  `;
	  }
	}
	console.log(perguntas);
	console.log(perguntasEmbaralhadas);
  }

  function selecionaResposta(elemento) {
	console.log(elemento);
	elemento.classList.add('borda-verde');
  }
  
  console.log(perguntas);