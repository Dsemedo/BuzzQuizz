const promessa = axios.get(`${API}`
	
  );
  promessa.then(obterQuizz);
  
  function obterQuizz(quiz) {
	const quizServer = quiz.data;
	carregarQuiz(1, quizServer);
	console.log(quizServer);
  }
  
function carregarQuiz(id, quizServer) {
	const quizEscolhido = quizServer.find((quiz) => quiz.id === id);
	postaPergunta(quizEscolhido.questions);
	postaImagem(quizEscolhido);
  }
  
  function postaImagem(titulo) {
	const imagemQuiz = document.querySelector(".imagem-quizz2");
	  imagemQuiz.innerHTML += `
  
				  <img src="${titulo.image}" alt="" srcset="">
				  <p>${titulo.title}</p>
		  `;
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
  
			  <div class="imagem2 imagemid-${i}">
				  <img src="${perguntasEmbaralhadas[j].image}" alt="" onclick="selecionaResposta(this,${i})" class="${perguntasEmbaralhadas[j].isCorrectAnswer}">
				  <p>${perguntasEmbaralhadas[j].text}</p>
			  </div>
		  
		  `;
	  }
	}
  }

  function selecionaResposta(imagem, id) {
	console.log(imagem)
	const verdade = imagem.classList;
	if (verdade.contains('true') === true) {
		imagem.classList.add('borda-verde');
	} else {
		imagem.classList.add('borda-vermelha')
	}

	const outrasImagens = document.querySelectorAll(`.imagemid-${id}`);
	for (let i=0; i < outrasImagens.length; i++) {
		if (outrasImagens[i].firstElementChild !== imagem) {
			outrasImagens[i].classList.add('filtrado');
			outrasImagens[i].firstElementChild.onclick = ""
		}
		console.log(outrasImagens[i].firstElementChild);
	}
	
  }
