const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola vdjkdkjcfjçdfkjdvbjdvj"
        alternativas: [ 
            { 
            texto: "isso é assutador!",
            afirmacao: "afirmação",
            },
            { 
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            },
        ]
    },

    {
        enunciado: "Assim que saiu da escola vdjkdkjcfjçdfkjdvbjdvj"
        alternativas: [ 
            { 
            texto: "isso é assutador!",
            afirmacao: "afirmação",
            },
            { 
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            },
        ]
    },

    {
        enunciado: "Assim que saiu da escola vdjkdkjcfjçdfkjdvbjdvj"
        alternativas: [ 
            { 
            texto: "isso é assutador!",
            afirmacao: "afirmação",
            },
            { 
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            },
        ]
    },

    {
        enunciado: "Assim que saiu da escola vdjkdkjcfjçdfkjdvbjdvj"
        alternativas: [ 
            { 
            texto: "isso é assutador!",
            afirmacao: "afirmação",
            },
            { 
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            },
        ]
    },

    {
        enunciado: "Assim que saiu da escola vdjkdkjcfjçdfkjdvbjdvj"
        alternativas: [ 
            { 
            texto: "isso é assutador!",
            afirmacao: "afirmação",
            },
            { 
            texto: "isso é maravilhoso!",
            afirmacao: "afirmação",
            },
        ]
    },
 
     

let atual =0;
let perguntaATual;

function mostraPergunta () {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntas.enunciado;
}

mostraPergunta ();