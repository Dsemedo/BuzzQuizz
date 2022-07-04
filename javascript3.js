let API = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

let objeto = {};

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
			criaQuizz(objeto, perguntas3, niveis3);
            criaNiveis(niveis3);
		}

	
  }

  function criaQuizz (obj, perg) {
	
  }

  function criaNiveis(niv) {
    const div = document.querySelector('.tela3-3');
    for (let i = 0; i < niv; i++) {
    div.innerHTML += `<div class="níveis3-3" id="nivel${i}">
    <span>Nível 1</span>
    <input
      type="text"
      name=""
      id="Título do Nível"
      minlength="10"
      placeholder="Título do Nível"
    />

    <input
      type="number"
      name=""
      height="100px"
      id=""
      min="0"
      max="100"
      placeholder="%de acerto mínimo"
    />

    <input type="text" name="" id="" placeholder="URL da imagem do nível" />

    <input
      type="text"
      name=""
      id=""
      minlength="30"
      placeholder="Descrição do nível"
    />
  </div>
  `
  }
  div.innerHTML += `<button type="enviar3" id="enviar3">Finalizar Quizz</button>`
}

