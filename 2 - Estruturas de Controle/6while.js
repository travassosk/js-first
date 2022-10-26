// Cria uma função que gera um número aleatório entre 2 números passados via params
function getInteiroAleatorioEntre(min, max) {
    // O Math.randon cria um número entre 0 e 1, ex: 0.5152988406908281
    // Então este número é multiplicado pela subtração do numero maior (max) pelo menor (min)
    // Depois é somado ao menor (min) e armazenado na constante valor
    const valor = Math.random() * (max - min) + min
    // retorna o número arredondado pra baixo e sem casas decimais
    return Math.floor(valor)
  }
   
  // inicializa a variavel opcao com o valor 0
  let opcao = 0
   
  // Enquanto o valor de opcão for diferente de -1, executa o código do escopo
  while (opcao != -1) {
    // Gera um número entre -1 e 10 e armazena na variável opção
    opcao = getInteiroAleatorioEntre(-1, 10)
    // Mostra qual número foi gerado
    console.log(`Opcão escolhida foi ${opcao}.`)
  }
   
  console.log('Até a proxima')