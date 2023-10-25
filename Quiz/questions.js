// Uso de módulos - exportando array  

export default [
    {
      question: "Qual das alternativas possui a sintaxe correta de uma arrow function?",
      answers: [
        { option: "var somar = [a, b] => (a + b);", correct: false },
        { option: "const saudacao = () => 'Olá, mundo!';", correct: true },
        { option: "let function = (numero) => numero * 2", correct: false },
      ],
    },
    {
      question: "Como se usa o operador ternário em uma estrutura condicional?",
      answers: [
        { option: "condição ? valor_se_verdadeiro : valor_se_falso", correct: true },
        { option: "condição : valor_se_verdadeiro ? valor_se_falso", correct: false },
        { option: "condição : valor_se_falso ? valor_se_verdadeiro", correct: false },
      ],
    },
    {
      question: "Qual é a diferença entre null e undefined?",
      answers: [
        { option: "Null é atribuído a uma variável que foi declarada, mas não foi inicializada, undefined é atribuído quando é necessário indicar explicitamente que algo não possui uma referência válida.", correct: false },
        { option: "Undefined indica que algo está vazio ou sem valor intencionalmente, null é usado para indicar que algo não foi definido ou inicializado.", correct: false },
        { option: "Undefined indica que algo não foi definido ou inicializado, null é usado para indicar que algo está vazio ou sem valor intencionalmente.", correct: true },
      ],
    },
    {
      question: "Qual das alternativas possui a sintaxe correta de um objeto?",
      answers: [
        { option: "var objeto = { nome completo: 'Bob', idade: 25 };", correct: false },
        { option: "var objeto = { nome: 'Alice', idade 30; };", correct: false },
        { option: "var pessoa = { nome: 'João', idade: 37 };", correct: true },
      ],
    },
    {
      question: "Qual é a diferença entre escopo global e escopo local?",
      answers: [
        { option: "Escopo local possui variáveis e funções que são acessíveis em todo o programa. Escopo global possui variáveis e funções que são declaradas dentro de uma função ou bloco de código.", correct: false },
        { option: "Escopo global possui variáveis e funções que são acessíveis em todo o programa. Escopo local possui variáveis e funções que são são acessíveis somente dentro desse escopo.", correct: true },
        { option: "Escopo global possui variáveis e funções que são acessíveis em todo o programa. Escopo local possui variáveis que são são acessíveis somente dentro de uma função e não pode conter outras funções.", correct: false },
      ],
    },
    {
      question: "Como acessar as propriedades de um objeto?",
      answers: [
        { option: "console.log(idade.pessoa);", correct: false },
        { option: "console.log(pessoa['idade']);", correct: true },
        { option: "console.log(pessoa(idade));", correct: false },
      ],
    },
    {
      question: "O que são módulos em JavaScript e como é possível usá-los?",
      answers: [
        { option: "Módulos são estruturas que permitem que objetos de diferentes classes respondam de maneira semelhante. É possível usar as palavras-chave 'require' e 'exports' para manipular módulos.", correct: false },
        { option: "Módulo é o padrão que define as regras, recursos e funcionalidades fundamentais que a linguagem JavaScript deve seguir. É possível usar a palavra-chave 'require para importar módulos.'", correct: false },
        { option: "Módulos são uma maneira de organizar e estruturar seu código em partes reutilizáveis e independentes.É possível usar as palavras-chave 'import' e 'export' manipular módulos.", correct: true },
      ],
    },
    {
      question: "O que são Callbacks?",
      answers: [
        { option: "É uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona ou de algum evento específico.", correct: true },
        { option: "Callback é uma função que só pode ser usada para lidar com erros ue nunca é executada.", correct: false },
        { option: "Callback é uma função que lida apenas com operações de loop que é executada de forma síncrona", correct: false },
      ],
    },
    {
      question: "Qual  alternativa possui a criação correta de protótipos?",
      answers: [
        { option: "Prototype.pessoa.cumprimentar = function(){console.log('Olá, meu nome é this.nome');};", correct: false },
        { option: "ObjectPrototype.cumprimentar = function(){console.log(`Olá, meu nome é ${this.nome}`);};", correct: false },
        { option: "Pessoa.prototype.cumprimentar = function(){console.log(`Olá, meu nome é ${this.nome}`);};", correct: true },
      ],
    },
    {
      question: "O que é herança de classes e como você a implementa?",
      answers: [
        { option: "Herança é um conceito que permite que uma classe herde as propriedades e métodos de outra classe. É possível implementá-la usando a palavra-chave 'extends'.", correct: true },
        { option: "Herança é um conceito que permite ocultar os detalhes internos de um objeto e expor apenas a interface necessária para interagir com ele. É possível implementá-la usando a palavra-chave 'import'.  ", correct: false },
        { option: "Herança é um conceito que permite que uma classe herde as propriedades e métodos de outra classe. É possível implementá-la usando a palavra-chave 'import'.", correct: false },
      ],
    },
  ];