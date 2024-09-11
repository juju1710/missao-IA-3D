import {aleatorio} from "./aleatotio.js";
import {perguntas} from "./perguntas.js";

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");


const perguntas = [
    {
        enunciado: " Qual dos animais é um mamífero ?",
        alternativas: [
            {
                texto: "Baleia ",
                afirmacao: [
                    "Se essa foi a apção escolhida , esta correto",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Cavalo marinho",
                afirmacao: [
                    "Se essa foi a opção , esta incorreta",
                    "afirmacao 2"
                    ]
            }           
            
        ]
    },
    {
        enunciado: " Qual é o unico mamífero que voa ?",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 2",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Alternativa 2 da pergunta 2",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
        ]
    },
    {
        enunciado: "Qual é o mamífero que bota ovo ?",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Alternativa 2 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classlist.add("mostrar");
    botaoJogarNovamente.addEventListener("click" , jogarNovamente);
}

function JogarNovamente {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remover("mostrar");
    mostraPergunta();
}

mostraPergunta();
