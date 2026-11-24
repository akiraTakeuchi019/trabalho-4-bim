const Form = document.querySelector("#formulario");
const Finalizar = document.querySelector("#Finalizar");
const result = document.querySelector("#result");

const ak = {
    Q1: 'd',
    Q2: 'c',
    Q3: 'e',
    Q4: 'd',
    Q5: 'b',
    Q6: 'd',
    Q7: 'a',
    Q8: 'e',
    Q9: 'd',
    Q10: 'b',
    /*lembra de colocar em maiusculo*/
};

let userAnswer = {};

Form.addEventListener("submit", (event) => {

    event.preventDefault();

    let acertos = 0;
    let falta = 0;
    // Percorre todas as perguntas
    for (let pergunta in ak) {

        // Pega a resposta selecionada pelo usuário
        let resposta = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        // Guarda a resposta do usuário
        if (resposta) { // se resposta
            userAnswer[pergunta] = resposta.value; // adiciona resposta na useransw
        }
        else{
            falta = 1;
            break;
        }

        // Compara a resposta do usuário com a correta
        if (userAnswer[pergunta] === ak[pergunta]) {
            acertos ++;
        }
    }

    console.log("Respostas do usuário:", userAnswer);
    console.log("Respostas corretas:", ak);
    console.log("Acertos:", acertos);

    let total = 0
    for (i in ak){
        total ++
    }
    result.innerHTML = `você acertou ${acertos} de ${total}`
    if (falta === 1){
        result.innerHTML = "falta responter todas as perguntas";
    }

    result.hidden = false;
    
    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
});

Form.addEventListener("reset", ()=>{
    result.hidden = true
    userAnswer = {}
    result.innerHTML = ""

});