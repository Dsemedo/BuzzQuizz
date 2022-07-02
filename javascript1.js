let API = "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes";
let arrayQuizzes = [];
let array;
let quizzID;

const promise2 = axios.get(API);
promise2.then(listarQuizzes);


function listarQuizzes(resposta) {
            
    for (let i = 0; i < resposta.data.length; i++) {
        const tamanhoQuizz = resposta.data[i];

        let cardQuizz = document.querySelector(".lista-api1").innerHTML +=

    `
    <div class="quizzes-api1" onclick = "carregarID(${tamanhoQuizz.id})">
   
    <img src="${tamanhoQuizz.image}" alt="" srcset="">
    <span>
    ${tamanhoQuizz.title}
    </span>
    <div class="degrade"> </div>
    </div>  
    `
    }
    array = resposta.data

}

function carregarID(id) {

    quizzID = id;
    console.log(quizzID);
    carregarQuiz(quizzID,array)
    
}


